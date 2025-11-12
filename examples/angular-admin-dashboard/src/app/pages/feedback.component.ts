import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent } from '../../components/ui/card';
import { AlertComponent } from '../../components/ui/alert';
import { ButtonComponent } from '../../components/ui/button';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
    AlertComponent,
    ButtonComponent
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h2 class="text-3xl font-bold">Feedback Components</h2>
        <p class="text-gray-600 mt-2">Alert components for user notifications</p>
      </div>

      <ui-card>
        <ui-card-header>
          <ui-card-title>Alert Examples</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-4">
            <ui-alert>
              <strong>Info:</strong> This is an informational alert.
            </ui-alert>

            <ui-alert variant="destructive">
              <strong>Error:</strong> Something went wrong!
            </ui-alert>

            <div class="space-y-2">
              <p class="font-medium">Interactive Alerts:</p>
              <div class="flex gap-2">
                <ui-button (click)="showSuccess()">Show Success</ui-button>
                <ui-button variant="destructive" (click)="showError()">Show Error</ui-button>
              </div>
            </div>
          </div>
        </ui-card-content>
      </ui-card>
    </div>
  `
})
export class FeedbackComponent {
  showSuccess() {
    window.alert('Success! Operation completed.');
  }

  showError() {
    window.alert('Error! Something went wrong.');
  }
}
