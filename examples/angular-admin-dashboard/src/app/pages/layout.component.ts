import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardDescriptionComponent,
  CardContentComponent,
  CardFooterComponent,
} from '../../components/ui/card';
import { SeparatorComponent } from '../../components/ui/separator';
import {
  UiAccordionRootDirective,
  UiAccordionItemDirective,
  UiAccordionTriggerDirective,
  UiAccordionContentDirective,
} from '../../components/ui/accordion';
import {
  UiTabsRootDirective,
  UiTabsListDirective,
  UiTabsTriggerDirective,
  UiTabsContentDirective,
} from '../../components/ui/tabs';
import {
  UiCollapsibleRootDirective,
  UiCollapsibleTriggerDirective,
  UiCollapsibleContentDirective,
} from '../../components/ui/collapsible';
import { ScrollAreaComponent } from '../../components/ui/scroll-area';
import { AspectRatioComponent } from '../../components/ui/aspect-ratio';
import { ButtonComponent } from '../../components/ui/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    CardFooterComponent,
    SeparatorComponent,
    UiAccordionRootDirective,
    UiAccordionItemDirective,
    UiAccordionTriggerDirective,
    UiAccordionContentDirective,
    UiTabsRootDirective,
    UiTabsListDirective,
    UiTabsTriggerDirective,
    UiTabsContentDirective,
    UiCollapsibleRootDirective,
    UiCollapsibleTriggerDirective,
    UiCollapsibleContentDirective,
    ScrollAreaComponent,
    AspectRatioComponent,
    ButtonComponent,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">Layout Components</h1>
        <p class="text-gray-500 mt-2">Cards, separators, accordions, dialogs, and more layout helpers</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ui-card>
          <ui-card-header>
            <ui-card-title>Card Example</ui-card-title>
            <ui-card-description>A simple card component</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <p>This is the card content area. You can put any content here.</p>
          </ui-card-content>
          <ui-card-footer>
            <p class="text-sm text-gray-500">Card footer</p>
          </ui-card-footer>
        </ui-card>

        <ui-card>
          <ui-card-header>
            <ui-card-title>Another Card</ui-card-title>
            <ui-card-description>Cards are versatile</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <p>Cards can contain any type of content including forms, lists, and more.</p>
          </ui-card-content>
        </ui-card>
      </div>

      <ui-card>
        <ui-card-header>
          <ui-card-title>Separator Example</ui-card-title>
          <ui-card-description>Visual dividers</ui-card-description>
        </ui-card-header>
        <ui-card-content class="space-y-4">
          <div>Section 1</div>
          <ui-separator />
          <div>Section 2</div>
          <ui-separator />
          <div>Section 3</div>
        </ui-card-content>
      </ui-card>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Accordion -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Accordion</ui-card-title>
            <ui-card-description>Collapsible content sections</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <div uiAccordionRoot type="single" class="w-full border rounded-md">
              <div uiAccordionItem value="item-1" class="border-b">
                <h3 class="flex">
                  <button uiAccordionTrigger class="flex flex-1 items-center justify-between py-4 px-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
                    What is Galaxy Design?
                    <svg class="h-4 w-4 shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </h3>
                <div uiAccordionContent class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div class="pb-4 pt-0 px-4">
                    Galaxy Design is a comprehensive UI component library built with Angular, TypeScript, and Tailwind CSS. It provides a collection of beautiful, accessible components that you can copy and paste into your projects.
                  </div>
                </div>
              </div>
              <div uiAccordionItem value="item-2" class="border-b">
                <h3 class="flex">
                  <button uiAccordionTrigger class="flex flex-1 items-center justify-between py-4 px-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
                    How do I install components?
                    <svg class="h-4 w-4 shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </h3>
                <div uiAccordionContent class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div class="pb-4 pt-0 px-4">
                    You can install components using the Galaxy CLI. Simply run <code class="bg-gray-100 px-1 rounded">npx galaxy-design add [component-name]</code> to add any component to your project.
                  </div>
                </div>
              </div>
              <div uiAccordionItem value="item-3">
                <h3 class="flex">
                  <button uiAccordionTrigger class="flex flex-1 items-center justify-between py-4 px-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
                    Is it free to use?
                    <svg class="h-4 w-4 shrink-0 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </h3>
                <div uiAccordionContent class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div class="pb-4 pt-0 px-4">
                    Yes! Galaxy Design is completely free and open source. You can use it in your personal and commercial projects.
                  </div>
                </div>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Tabs -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Tabs</ui-card-title>
            <ui-card-description>Organize content in tabs</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <div uiTabsRoot defaultValue="account" class="w-full">
              <div uiTabsList class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-3">
                <button uiTabsTrigger value="account" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Account</button>
                <button uiTabsTrigger value="password" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Password</button>
                <button uiTabsTrigger value="settings" class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Settings</button>
              </div>
              <div uiTabsContent value="account" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-2">
                <p class="text-sm text-gray-600">
                  Manage your account settings and preferences here.
                </p>
              </div>
              <div uiTabsContent value="password" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-2">
                <p class="text-sm text-gray-600">
                  Change your password and security settings.
                </p>
              </div>
              <div uiTabsContent value="settings" class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-2">
                <p class="text-sm text-gray-600">
                  Configure application preferences and options.
                </p>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Dialog - Temporarily disabled -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Dialog</ui-card-title>
            <ui-card-description>Modal dialog windows (Implementation in progress)</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <div class="rounded-lg border border-dashed p-8 text-center">
              <p class="text-sm text-muted-foreground">
                Dialog component is being refactored to use Radix Angular service-based approach for consistency with React/Vue implementations.
              </p>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- Collapsible -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Collapsible</ui-card-title>
            <ui-card-description>Expandable content sections</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div
              uiCollapsibleRoot
              [(open)]="isCollapsibleOpen"
              class="space-y-2"
            >
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-semibold">
                  &#64;galaxy-ui/angular - 1.2.3
                </h4>
                <button ui-button variant="ghost" size="sm" uiCollapsibleTrigger>
                  <svg *ngIf="isCollapsibleOpen" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  <svg *ngIf="!isCollapsibleOpen" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  <span class="sr-only">Toggle</span>
                </button>
              </div>
              <div class="rounded-md border px-4 py-2 text-sm">
                &#64;radix-ui/angular-collapsible
              </div>
              <div uiCollapsibleContent class="space-y-2">
                <div class="rounded-md border px-4 py-2 text-sm">
                  &#64;radix-ui/angular-accordion
                </div>
                <div class="rounded-md border px-4 py-2 text-sm">
                  &#64;radix-ui/angular-dialog
                </div>
                <div class="rounded-md border px-4 py-2 text-sm">
                  &#64;radix-ui/angular-tabs
                </div>
              </div>
            </div>

            <ui-separator />

            <div uiCollapsibleRoot class="space-y-2">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-semibold">Features</h4>
                <button ui-button variant="outline" size="sm" uiCollapsibleTrigger>
                  Show Details
                </button>
              </div>
              <div uiCollapsibleContent class="space-y-2">
                <div class="rounded-md border px-4 py-2 text-sm">
                  ✓ Fully accessible components
                </div>
                <div class="rounded-md border px-4 py-2 text-sm">
                  ✓ Customizable with Tailwind
                </div>
                <div class="rounded-md border px-4 py-2 text-sm">
                  ✓ TypeScript support
                </div>
              </div>
            </div>
          </ui-card-content>
        </ui-card>

        <!-- ScrollArea -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Scroll Area</ui-card-title>
            <ui-card-description>Custom scrollable regions</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <ui-scroll-area class="h-[200px] w-full rounded-md border p-4">
              <div class="space-y-4">
                <h4 class="text-sm font-medium leading-none">Tags</h4>
                <ui-separator />
                @for (i of scrollItems; track i) {
                  <div class="text-sm">
                    Tag {{ i }}
                  </div>
                }
              </div>
            </ui-scroll-area>
          </ui-card-content>
        </ui-card>

        <!-- AspectRatio -->
        <ui-card>
          <ui-card-header>
            <ui-card-title>Aspect Ratio</ui-card-title>
            <ui-card-description>Maintain image aspect ratios</ui-card-description>
          </ui-card-header>
          <ui-card-content class="space-y-4">
            <div class="space-y-2">
              <p class="text-sm font-medium">16:9 Ratio</p>
              <ui-aspect-ratio [ratio]="16 / 9" class="bg-muted rounded-md flex items-center justify-center">
                <svg class="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </ui-aspect-ratio>
            </div>

            <div class="space-y-2">
              <p class="text-sm font-medium">4:3 Ratio</p>
              <ui-aspect-ratio [ratio]="4 / 3" class="bg-muted rounded-md flex items-center justify-center">
                <svg class="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </ui-aspect-ratio>
            </div>

            <div class="space-y-2">
              <p class="text-sm font-medium">1:1 Ratio</p>
              <ui-aspect-ratio [ratio]="1" class="bg-muted rounded-md flex items-center justify-center">
                <svg class="h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </ui-aspect-ratio>
            </div>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `,
})
export class LayoutComponent {
  dialogOpen1 = false;
  dialogOpen2 = false;
  isCollapsibleOpen = false;
  scrollItems = Array.from({ length: 20 }, (_, i) => i + 1);
}
