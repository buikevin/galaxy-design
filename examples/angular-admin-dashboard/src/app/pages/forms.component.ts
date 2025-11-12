import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent } from '../../components/ui/card';
import { ButtonComponent } from '../../components/ui/button';
import { InputComponent } from '../../components/ui/input';
import { LabelComponent } from '../../components/ui/label';
import { CheckboxComponent } from '../../components/ui/checkbox';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardContentComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    CheckboxComponent
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h2 class="text-3xl font-bold">Form Components</h2>
        <p class="text-gray-600 mt-2">Input, Label, Checkbox, and Button components</p>
      </div>

      <ui-card>
        <ui-card-header>
          <ui-card-title>Sample Form</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <form class="space-y-4">
            <div class="space-y-2">
              <ui-label [for]="'name'">Full Name</ui-label>
              <ui-input type="text" id="name" placeholder="John Doe" />
            </div>

            <div class="space-y-2">
              <ui-label [for]="'email'">Email</ui-label>
              <ui-input type="email" id="email" placeholder="john@example.com" />
            </div>

            <div class="flex items-center space-x-2">
              <ui-checkbox id="terms" />
              <ui-label [for]="'terms'" [class]="'text-sm font-normal'">
                I agree to the terms and conditions
              </ui-label>
            </div>

            <div class="flex gap-2">
              <ui-button type="submit">Submit</ui-button>
              <ui-button variant="outline" type="button">Cancel</ui-button>
            </div>
          </form>
        </ui-card-content>
      </ui-card>
    </div>
  `
})
export class FormsComponent {}
