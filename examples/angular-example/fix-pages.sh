#!/bin/bash

PAGES_DIR="/Users/buitronghieu/Desktop/Project/person-work-project/galaxy-ui-cli/examples/angular-example/src/app/pages"

# Fix aspect-ratio page - simplify TypeScript
cat > "$PAGES_DIR/aspect-ratio/aspect-ratio.component.ts" << 'EOF'
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-aspect-ratio',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './aspect-ratio.component.html',
	styleUrls: ['./aspect-ratio.component.css'],
})
export class AspectRatioComponent {}
EOF

# Fix aspect-ratio HTML - simplify demo
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
				<div class="w-full" style="aspect-ratio: 16/9">
					<img
						src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
						alt="Photo"
						class="rounded-md object-cover w-full h-full"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
EOF

# Fix toggle TypeScript
cat > "$PAGES_DIR/toggle/toggle.component.ts" << 'EOF'
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-toggle',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './toggle.component.html',
	styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {}
EOF

# Fix toggle HTML
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
				<button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent h-10 px-3">
					<svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="19" y1="4" x2="10" y2="4"/>
						<line x1="14" y1="20" x2="5" y2="20"/>
						<line x1="15" y1="4" x2="9" y2="20"/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>
EOF

# Fix toggle-group TypeScript
cat > "$PAGES_DIR/toggle-group/toggle-group.component.ts" << 'EOF'
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-toggle-group',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './toggle-group.component.html',
	styleUrls: ['./toggle-group.component.css'],
})
export class ToggleGroupComponent {}
EOF

# Fix toggle-group HTML
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
				<div class="flex items-center justify-center gap-1">
					<button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent h-10 px-3">
						Bold
					</button>
					<button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent h-10 px-3">
						Italic
					</button>
					<button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent h-10 px-3">
						Underline
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
EOF

echo "Fixed all problematic component pages!"
