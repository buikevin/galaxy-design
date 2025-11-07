#!/bin/bash

PAGES_DIR="/Users/buitronghieu/Desktop/Project/person-work-project/galaxy-ui-cli/examples/angular-example/src/app/pages"

# Create scroll-area page
mkdir -p "$PAGES_DIR/scroll-area"
cat > "$PAGES_DIR/scroll-area/scroll-area.component.ts" << 'EOF'
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollAreaComponent as UiScrollArea} from '@/components/ui/scroll-area';

@Component({
	selector: 'app-scroll-area',
	standalone: true,
	imports: [CommonModule, UiScrollArea],
	templateUrl: './scroll-area.component.html',
	styleUrls: ['./scroll-area.component.css'],
})
export class ScrollAreaComponent {}
EOF

cat > "$PAGES_DIR/scroll-area/scroll-area.component.html" << 'EOF'
<div class="space-y-8">
	<div>
		<h1 class="text-3xl font-bold">Scroll Area</h1>
		<p class="text-muted-foreground mt-2">
			Augments native scroll functionality for custom, cross-browser styling.
		</p>
	</div>

	<div class="space-y-4">
		<div>
			<h2 class="text-xl font-semibold mb-4">Default</h2>
			<div class="rounded-lg border p-6">
				<ui-scroll-area class="h-72 w-96 rounded-md border">
					<div class="p-4">
						<h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
						<div class="text-sm">
							<div *ngFor="let tag of tags" class="py-2">
								{{ tag }}
							</div>
						</div>
					</div>
				</ui-scroll-area>
			</div>
		</div>
	</div>
</div>
EOF

cat > "$PAGES_DIR/scroll-area/scroll-area.component.css" << 'EOF'
EOF

# Create aspect-ratio page
mkdir -p "$PAGES_DIR/aspect-ratio"
cat > "$PAGES_DIR/aspect-ratio/aspect-ratio.component.ts" << 'EOF'
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AspectRatioComponent as UiAspectRatio} from '@/components/ui/aspect-ratio';

@Component({
	selector: 'app-aspect-ratio',
	standalone: true,
	imports: [CommonModule, UiAspectRatio],
	templateUrl: './aspect-ratio.component.html',
	styleUrls: ['./aspect-ratio.component.css'],
})
export class AspectRatioComponent {}
EOF

cat > "$PAGES_DIR/aspect-ratio/aspect-ratio.component.html" << 'EOF'
<div class="space-y-8">
	<div>
		<h1 class="text-3xl font-bold">Aspect Ratio</h1>
		<p class="text-muted-foreground mt-2">
			Displays content within a desired aspect ratio.
		</p>
	</div>

	<div class="space-y-4">
		<div>
			<h2 class="text-xl font-semibold mb-4">16:9 Ratio</h2>
			<div class="rounded-lg border p-6">
				<ui-aspect-ratio [ratio]="16/9" class="bg-muted">
					<img
						src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
						alt="Photo"
						class="rounded-md object-cover w-full h-full"
					/>
				</ui-aspect-ratio>
			</div>
		</div>
	</div>
</div>
EOF

cat > "$PAGES_DIR/aspect-ratio/aspect-ratio.component.css" << 'EOF'
EOF

# Create resizable page
mkdir -p "$PAGES_DIR/resizable"
cat > "$PAGES_DIR/resizable/resizable.component.ts" << 'EOF'
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	ResizablePanelGroupComponent,
	ResizablePanelComponent,
	ResizableHandleComponent,
} from '@/components/ui/resizable';

@Component({
	selector: 'app-resizable',
	standalone: true,
	imports: [
		CommonModule,
		ResizablePanelGroupComponent,
		ResizablePanelComponent,
		ResizableHandleComponent,
	],
	templateUrl: './resizable.component.html',
	styleUrls: ['./resizable.component.css'],
})
export class ResizableComponent {}
EOF

cat > "$PAGES_DIR/resizable/resizable.component.html" << 'EOF'
<div class="space-y-8">
	<div>
		<h1 class="text-3xl font-bold">Resizable</h1>
		<p class="text-muted-foreground mt-2">
			Accessible resizable panel groups and layouts with keyboard support.
		</p>
	</div>

	<div class="space-y-4">
		<div>
			<h2 class="text-xl font-semibold mb-4">Horizontal</h2>
			<div class="rounded-lg border p-6">
				<ui-resizable-panel-group direction="horizontal" class="h-64 rounded-lg border">
					<ui-resizable-panel [defaultSize]="50">
						<div class="flex h-full items-center justify-center p-6">
							<span class="font-semibold">Left</span>
						</div>
					</ui-resizable-panel>
					<ui-resizable-handle />
					<ui-resizable-panel [defaultSize]="50">
						<div class="flex h-full items-center justify-center p-6">
							<span class="font-semibold">Right</span>
						</div>
					</ui-resizable-panel>
				</ui-resizable-panel-group>
			</div>
		</div>
	</div>
</div>
EOF

cat > "$PAGES_DIR/resizable/resizable.component.css" << 'EOF'
EOF

# Create toggle page
mkdir -p "$PAGES_DIR/toggle"
cat > "$PAGES_DIR/toggle/toggle.component.ts" << 'EOF'
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleComponent as UiToggle} from '@/components/ui/toggle';

@Component({
	selector: 'app-toggle',
	standalone: true,
	imports: [CommonModule, UiToggle],
	templateUrl: './toggle.component.html',
	styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {}
EOF

cat > "$PAGES_DIR/toggle/toggle.component.html" << 'EOF'
<div class="space-y-8">
	<div>
		<h1 class="text-3xl font-bold">Toggle</h1>
		<p class="text-muted-foreground mt-2">
			A two-state button that can be either on or off.
		</p>
	</div>

	<div class="space-y-4">
		<div>
			<h2 class="text-xl font-semibold mb-4">Default</h2>
			<div class="rounded-lg border p-6">
				<ui-toggle aria-label="Toggle italic">
					<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="19" y1="4" x2="10" y2="4"/>
						<line x1="14" y1="20" x2="5" y2="20"/>
						<line x1="15" y1="4" x2="9" y2="20"/>
					</svg>
				</ui-toggle>
			</div>
		</div>

		<div>
			<h2 class="text-xl font-semibold mb-4">Variants</h2>
			<div class="rounded-lg border p-6 flex gap-4">
				<ui-toggle variant="default">Default</ui-toggle>
				<ui-toggle variant="outline">Outline</ui-toggle>
			</div>
		</div>

		<div>
			<h2 class="text-xl font-semibold mb-4">Sizes</h2>
			<div class="rounded-lg border p-6 flex items-center gap-4">
				<ui-toggle size="sm">Small</ui-toggle>
				<ui-toggle size="default">Default</ui-toggle>
				<ui-toggle size="lg">Large</ui-toggle>
			</div>
		</div>
	</div>
</div>
EOF

cat > "$PAGES_DIR/toggle/toggle.component.css" << 'EOF'
EOF

# Create toggle-group page
mkdir -p "$PAGES_DIR/toggle-group"
cat > "$PAGES_DIR/toggle-group/toggle-group.component.ts" << 'EOF'
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	ToggleGroupComponent as UiToggleGroup,
	ToggleGroupItemComponent,
} from '@/components/ui/toggle-group';

@Component({
	selector: 'app-toggle-group',
	standalone: true,
	imports: [CommonModule, UiToggleGroup, ToggleGroupItemComponent],
	templateUrl: './toggle-group.component.html',
	styleUrls: ['./toggle-group.component.css'],
})
export class ToggleGroupComponent {}
EOF

cat > "$PAGES_DIR/toggle-group/toggle-group.component.html" << 'EOF'
<div class="space-y-8">
	<div>
		<h1 class="text-3xl font-bold">Toggle Group</h1>
		<p class="text-muted-foreground mt-2">
			A set of two-state buttons that can be toggled on or off.
		</p>
	</div>

	<div class="space-y-4">
		<div>
			<h2 class="text-xl font-semibold mb-4">Default</h2>
			<div class="rounded-lg border p-6">
				<ui-toggle-group type="single">
					<ui-toggle-group-item value="bold" aria-label="Toggle bold">
						<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
							<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
						</svg>
					</ui-toggle-group-item>
					<ui-toggle-group-item value="italic" aria-label="Toggle italic">
						<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<line x1="19" y1="4" x2="10" y2="4"/>
							<line x1="14" y1="20" x2="5" y2="20"/>
							<line x1="15" y1="4" x2="9" y2="20"/>
						</svg>
					</ui-toggle-group-item>
					<ui-toggle-group-item value="underline" aria-label="Toggle underline">
						<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/>
							<line x1="4" y1="21" x2="20" y2="21"/>
						</svg>
					</ui-toggle-group-item>
				</ui-toggle-group>
			</div>
		</div>

		<div>
			<h2 class="text-xl font-semibold mb-4">Multiple Selection</h2>
			<div class="rounded-lg border p-6">
				<ui-toggle-group type="multiple">
					<ui-toggle-group-item value="bold">Bold</ui-toggle-group-item>
					<ui-toggle-group-item value="italic">Italic</ui-toggle-group-item>
					<ui-toggle-group-item value="underline">Underline</ui-toggle-group-item>
				</ui-toggle-group>
			</div>
		</div>
	</div>
</div>
EOF

cat > "$PAGES_DIR/toggle-group/toggle-group.component.css" << 'EOF'
EOF

echo "Created all missing component pages!"
ls -la "$PAGES_DIR" | grep -E "(scroll-area|aspect-ratio|resizable|toggle)"
