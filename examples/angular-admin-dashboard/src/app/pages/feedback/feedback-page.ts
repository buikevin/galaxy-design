import { Component } from '@angular/core';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardHeaderComponent, CardTitleComponent } from '@/components/ui/card';
import { AlertComponent, AlertTitleComponent, AlertDescriptionComponent } from '@/components/ui/alert';
import { DialogComponent, DialogTriggerComponent, DialogContentComponent, DialogHeaderComponent, DialogTitleComponent, DialogDescriptionComponent, DialogFooterComponent } from '@/components/ui/dialog';
import { TooltipComponent, TooltipTriggerComponent, TooltipContentComponent } from '@/components/ui/tooltip';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-feedback-page',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    AlertComponent,
    AlertTitleComponent,
    AlertDescriptionComponent,
    DialogComponent,
    DialogTriggerComponent,
    DialogContentComponent,
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
    DialogFooterComponent,
    TooltipComponent,
    TooltipTriggerComponent,
    TooltipContentComponent,
    ButtonComponent,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">Feedback Components</h1>
        <p class="text-gray-500 mt-2">Alerts, dialogs, toasts, and tooltips</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Alert Examples -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Alert</h3>
            <p ui-card-description>Static notification messages</p>
          </div>
          <div ui-card-content class="space-y-4">
            <ui-alert>
              <h5 ui-alert-title>Info</h5>
              <p ui-alert-description>
                This is an informational alert message.
              </p>
            </ui-alert>

            <ui-alert variant="destructive">
              <h5 ui-alert-title>Error</h5>
              <p ui-alert-description>
                Something went wrong. Please try again later.
              </p>
            </ui-alert>
          </div>
        </ui-card>

        <!-- Dialog Examples -->
        <!-- <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Dialog</h3>
            <p ui-card-description>Modal dialogs for user interaction</p>
          </div>
          <div ui-card-content class="space-y-4">
            <ui-dialog>
              <button ui-button ui-dialog-trigger>Open Dialog</button>
              <ui-dialog-content>
                <div ui-dialog-header>
                  <h2 ui-dialog-title>Dialog Title</h2>
                  <p ui-dialog-description>
                    This is a basic dialog with a title and description.
                  </p>
                </div>
                <div class="py-4">
                  <p class="text-sm text-gray-600">
                    You can add any content here.
                  </p>
                </div>
                <div ui-dialog-footer>
                  <button ui-button variant="outline">Cancel</button>
                  <button ui-button>Confirm</button>
                </div>
              </ui-dialog-content>
            </ui-dialog>
          </div>
        </ui-card> -->

        <!-- Tooltip Examples -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Tooltip</h3>
            <p ui-card-description>Contextual help on hover</p>
          </div>
          <div ui-card-content class="space-y-4">
            <div class="space-y-2">
              <p class="text-sm font-medium">Basic Tooltips</p>
              <div class="flex flex-wrap gap-4">
                <ui-tooltip>
                  <button ui-button ui-tooltip-trigger>Hover me</button>
                  <p ui-tooltip-content>This is a tooltip!</p>
                </ui-tooltip>
              </div>
            </div>
          </div>
        </ui-card>
      </div>
    </div>
  `,
  styles: [],
})
export class FeedbackPageComponent {}
