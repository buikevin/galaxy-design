import { Component } from '@angular/core';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardFooterComponent, CardHeaderComponent, CardTitleComponent } from '@/components/ui/card';
import { SeparatorComponent } from '@/components/ui/separator';
import { AccordionComponent, AccordionItemComponent, AccordionTriggerComponent, AccordionContentComponent } from '@/components/ui/accordion';
import { CollapsibleComponent, CollapsibleTriggerComponent, CollapsibleContentComponent } from '@/components/ui/collapsible';
import { ScrollAreaComponent } from '@/components/ui/scroll-area';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    CardFooterComponent,
    SeparatorComponent,
    AccordionComponent,
    AccordionItemComponent,
    AccordionTriggerComponent,
    AccordionContentComponent,
    CollapsibleComponent,
    CollapsibleTriggerComponent,
    CollapsibleContentComponent,
    ScrollAreaComponent,
    ButtonComponent,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">Layout Components</h1>
        <p class="text-gray-500 mt-2">Cards, separators, accordions, and more layout helpers</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Card Example</h3>
            <p ui-card-description>A simple card component</p>
          </div>
          <div ui-card-content>
            <p>This is the card content area. You can put any content here.</p>
          </div>
          <div ui-card-footer>
            <p class="text-sm text-gray-500">Card footer</p>
          </div>
        </ui-card>

        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Separator Example</h3>
            <p ui-card-description>Visual dividers</p>
          </div>
          <div ui-card-content class="space-y-4">
            <div>Section 1</div>
            <ui-separator />
            <div>Section 2</div>
            <ui-separator />
            <div>Section 3</div>
          </div>
        </ui-card>

        <!-- Accordion -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Accordion</h3>
            <p ui-card-description>Collapsible content sections</p>
          </div>
          <div ui-card-content>
            <ui-accordion type="single" collapsible class="w-full">
              <div ui-accordion-item value="item-1">
                <button ui-accordion-trigger>What is Galaxy Design?</button>
                <div ui-accordion-content>
                  Galaxy Design is a comprehensive UI component library.
                </div>
              </div>
              <div ui-accordion-item value="item-2">
                <button ui-accordion-trigger>How do I install components?</button>
                <div ui-accordion-content>
                  Use the Galaxy CLI to add components to your project.
                </div>
              </div>
            </ui-accordion>
          </div>
        </ui-card>

        <!-- Collapsible -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Collapsible</h3>
            <p ui-card-description>Expandable content sections</p>
          </div>
          <div ui-card-content class="space-y-4">
            <ui-collapsible class="space-y-2">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-semibold">Galaxy UI React - 1.2.3</h4>
                <button ui-button variant="ghost" size="sm" ui-collapsible-trigger>
                  Toggle
                </button>
              </div>
              <div ui-collapsible-content class="space-y-2">
                <div class="rounded-md border px-4 py-2 text-sm">
                  @radix-ui/react-accordion
                </div>
                <div class="rounded-md border px-4 py-2 text-sm">
                  @radix-ui/react-dialog
                </div>
              </div>
            </ui-collapsible>
          </div>
        </ui-card>

        <!-- ScrollArea -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Scroll Area</h3>
            <p ui-card-description>Custom scrollable regions</p>
          </div>
          <div ui-card-content>
            <ui-scroll-area class="h-[200px] w-full rounded-md border p-4">
              <div class="space-y-4">
                <h4 class="text-sm font-medium leading-none">Tags</h4>
                <ui-separator />
                @for (item of scrollItems; track item) {
                  <div class="text-sm">Tag {{ item }}</div>
                }
              </div>
            </ui-scroll-area>
          </div>
        </ui-card>
      </div>
    </div>
  `,
  styles: [],
})
export class LayoutPageComponent {
  scrollItems = Array.from({ length: 20 }, (_, i) => i + 1);
}
