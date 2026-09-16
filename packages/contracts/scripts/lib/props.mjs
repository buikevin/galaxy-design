/**
 * Merge framework-local prop lists into normalized prop definitions.
 *
 * Props are bucketed by a canonical key so that obvious name aliases
 * (className/class, modelValue/value, onValueChange/valueChange, ...) land in
 * the same bucket. The most common raw name wins as the representative; other
 * frameworks are recorded through per-framework overrides.
 */

const PRIORITY = ['react', 'vue', 'angular', 'react-native', 'flutter'];

const NAME_ALIASES = {
  classname: 'class',
  modelvalue: 'value',
  child: 'children',
};

export function canonicalPropName(name) {
  let key = String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  if (key.length > 2 && key.startsWith('on')) {
    key = key.slice(2);
  }
  return NAME_ALIASES[key] || key;
}

function priorityOf(framework) {
  return PRIORITY.indexOf(framework);
}

function sameJson(a, b) {
  return JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
}

export function mergeNormalizedProps(frameworkProps) {
  const buckets = new Map();

  for (const framework of PRIORITY) {
    for (const prop of frameworkProps[framework] || []) {
      const key = canonicalPropName(prop.name);
      if (!buckets.has(key)) {
        buckets.set(key, []);
      }
      buckets.get(key).push({ framework, prop });
    }
  }

  const normalized = [];

  for (const entries of buckets.values()) {
    const counts = new Map();
    for (const { prop } of entries) {
      counts.set(prop.name, (counts.get(prop.name) || 0) + 1);
    }

    const sorted = [...entries].sort((a, b) => {
      const countA = counts.get(a.prop.name) || 0;
      const countB = counts.get(b.prop.name) || 0;
      if (countB !== countA) {
        return countB - countA;
      }
      return priorityOf(a.framework) - priorityOf(b.framework);
    });

    const representative = sorted[0];
    const frameworks = sorted.map((entry) => entry.framework);
    const overrides = {};

    for (const { framework, prop } of sorted.slice(1)) {
      const override = {};
      if (prop.name !== representative.prop.name) {
        override.name = prop.name;
      }
      if (!sameJson(prop.type, representative.prop.type)) {
        override.type = prop.type;
      }
      if (!sameJson(prop.default, representative.prop.default)) {
        override.default = prop.default;
      }
      if (Object.keys(override).length > 0) {
        overrides[framework] = override;
      }
    }

    const normalizedProp = {
      name: representative.prop.name,
      type: representative.prop.type || {
        kind: 'custom',
        name: 'unknown',
      },
      frameworks,
    };
    if (representative.prop.default !== undefined) {
      normalizedProp.default = representative.prop.default;
    }
    if (representative.prop.description) {
      normalizedProp.description = representative.prop.description;
    }
    if (Object.keys(overrides).length > 0) {
      normalizedProp.overrides = overrides;
    }

    normalized.push(normalizedProp);
  }

  return normalized;
}
