import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent } from '../../components/ui/card';
import { ButtonComponent } from '../../components/ui/button';
import { InputComponent } from '../../components/ui/input';
import { LabelComponent } from '../../components/ui/label';
import { CheckboxComponent } from '../../components/ui/checkbox';
import { TextareaComponent } from '../../components/ui/textarea';
import { SwitchComponent } from '../../components/ui/switch';
import { SelectComponent, SelectItemComponent } from '../../components/ui/select';
import { RadioGroupComponent, RadioGroupItemComponent } from '../../components/ui/radio-group';

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
    CheckboxComponent,
    TextareaComponent,
    SwitchComponent,
    SelectComponent,
    SelectItemComponent,
    RadioGroupComponent,
    RadioGroupItemComponent,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h2 class="text-3xl font-bold">Form Components</h2>
        <p class="text-gray-600 mt-2">Input, Label, Checkbox, Textarea, Select, and Switch components</p>
      </div>

      <!-- Basic Inputs -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Text Inputs</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-4">
            <div class="space-y-2">
              <ui-label [for]="'name'">Full Name</ui-label>
              <ui-input type="text" id="name" placeholder="John Doe" [(ngModel)]="name" />
            </div>

            <div class="space-y-2">
              <ui-label [for]="'email'">Email</ui-label>
              <ui-input type="email" id="email" placeholder="john@example.com" [(ngModel)]="email" />
            </div>

            <div class="space-y-2">
              <ui-label [for]="'password'">Password</ui-label>
              <ui-input type="password" id="password" placeholder="••••••••" [(ngModel)]="password" />
            </div>

            <div class="space-y-2">
              <ui-label [for]="'phone'">Phone</ui-label>
              <ui-input type="tel" id="phone" placeholder="+1 (555) 000-0000" [(ngModel)]="phone" />
            </div>
          </div>
        </ui-card-content>
      </ui-card>

      <!-- Textarea -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Textarea</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-2">
            <ui-label [for]="'message'">Message</ui-label>
            <ui-textarea
              id="message"
              placeholder="Type your message here..."
              [(ngModel)]="message"
              class="min-h-[100px]"
            />
            <p class="text-sm text-muted-foreground">
              {{ message.length }} characters
            </p>
          </div>
        </ui-card-content>
      </ui-card>

      <!-- Select Dropdown -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Select Dropdown</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-4">
            <div class="space-y-2">
              <ui-label>Country</ui-label>
              <ui-select [(value)]="selectedCountry" placeholder="Select a country">
                <ui-select-item value="us">United States</ui-select-item>
                <ui-select-item value="uk">United Kingdom</ui-select-item>
                <ui-select-item value="ca">Canada</ui-select-item>
                <ui-select-item value="au">Australia</ui-select-item>
                <ui-select-item value="vn">Vietnam</ui-select-item>
              </ui-select>
              <p class="text-sm text-muted-foreground" *ngIf="selectedCountry">
                Selected: {{ selectedCountry }}
              </p>
            </div>

            <div class="space-y-2">
              <ui-label>Role</ui-label>
              <ui-select [(value)]="selectedRole" placeholder="Select your role">
                <ui-select-item value="developer">Developer</ui-select-item>
                <ui-select-item value="designer">Designer</ui-select-item>
                <ui-select-item value="manager">Manager</ui-select-item>
                <ui-select-item value="tester">QA Tester</ui-select-item>
              </ui-select>
              <p class="text-sm text-muted-foreground" *ngIf="selectedRole">
                Selected: {{ selectedRole }}
              </p>
            </div>
          </div>
        </ui-card-content>
      </ui-card>

      <!-- Radio Group -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Radio Group</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-4">
            <ui-label>Notification Preferences</ui-label>
            <ui-radio-group [(value)]="notificationPreference">
              <div class="flex items-center space-x-2">
                <ui-radio-group-item value="all" id="all" />
                <ui-label [for]="'all'" [class]="'text-sm font-normal'">
                  All notifications
                </ui-label>
              </div>
              <div class="flex items-center space-x-2">
                <ui-radio-group-item value="important" id="important" />
                <ui-label [for]="'important'" [class]="'text-sm font-normal'">
                  Important only
                </ui-label>
              </div>
              <div class="flex items-center space-x-2">
                <ui-radio-group-item value="none" id="none" />
                <ui-label [for]="'none'" [class]="'text-sm font-normal'">
                  No notifications
                </ui-label>
              </div>
            </ui-radio-group>
            <p class="text-sm text-muted-foreground" *ngIf="notificationPreference">
              Selected: {{ notificationPreference }}
            </p>
          </div>
        </ui-card-content>
      </ui-card>

      <!-- Checkboxes -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Checkboxes</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <ui-checkbox id="terms" [(checked)]="termsAccepted" />
              <ui-label [for]="'terms'" [class]="'text-sm font-normal'">
                I agree to the terms and conditions
              </ui-label>
            </div>

            <div class="flex items-center space-x-2">
              <ui-checkbox id="newsletter" [(checked)]="newsletter" />
              <ui-label [for]="'newsletter'" [class]="'text-sm font-normal'">
                Subscribe to newsletter
              </ui-label>
            </div>

            <div class="flex items-center space-x-2">
              <ui-checkbox id="updates" [(checked)]="updates" />
              <ui-label [for]="'updates'" [class]="'text-sm font-normal'">
                Receive product updates
              </ui-label>
            </div>

            <p class="text-sm text-muted-foreground pt-2">
              Selected:
              <span *ngIf="termsAccepted">Terms</span>
              <span *ngIf="newsletter">{{ termsAccepted ? ', ' : '' }}Newsletter</span>
              <span *ngIf="updates">{{ termsAccepted || newsletter ? ', ' : '' }}Updates</span>
              <span *ngIf="!termsAccepted && !newsletter && !updates">None</span>
            </p>
          </div>
        </ui-card-content>
      </ui-card>

      <!-- Switches -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Switches</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <ui-label [for]="'marketing'">Marketing emails</ui-label>
                <p class="text-sm text-muted-foreground">
                  Receive emails about new products and features
                </p>
              </div>
              <ui-switch id="marketing" [(checked)]="marketingEmails" />
            </div>

            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <ui-label [for]="'security'">Security alerts</ui-label>
                <p class="text-sm text-muted-foreground">
                  Get notified about security updates
                </p>
              </div>
              <ui-switch id="security" [(checked)]="securityAlerts" />
            </div>

            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <ui-label [for]="'notifications'">Push notifications</ui-label>
                <p class="text-sm text-muted-foreground">
                  Enable push notifications on your device
                </p>
              </div>
              <ui-switch id="notifications" [(checked)]="pushNotifications" />
            </div>
          </div>
        </ui-card-content>
      </ui-card>

      <!-- Complete Form Example -->
      <ui-card>
        <ui-card-header>
          <ui-card-title>Complete Form Example</ui-card-title>
        </ui-card-header>
        <ui-card-content>
          <form class="space-y-4" (ngSubmit)="onSubmit()">
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <ui-label [for]="'firstName'">First Name</ui-label>
                <ui-input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  [(ngModel)]="formData.firstName"
                  name="firstName"
                  required
                />
              </div>
              <div class="space-y-2">
                <ui-label [for]="'lastName'">Last Name</ui-label>
                <ui-input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  [(ngModel)]="formData.lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div class="space-y-2">
              <ui-label [for]="'email2'">Email</ui-label>
              <ui-input
                type="email"
                id="email2"
                placeholder="john@example.com"
                [(ngModel)]="formData.email"
                name="email"
                required
              />
            </div>

            <div class="space-y-2">
              <ui-label [for]="'bio'">Bio</ui-label>
              <ui-textarea
                id="bio"
                placeholder="Tell us about yourself..."
                [(ngModel)]="formData.bio"
                name="bio"
              />
            </div>

            <div class="flex items-center space-x-2">
              <ui-checkbox
                id="consent"
                [(checked)]="formData.consent"
                name="consent"
              />
              <ui-label [for]="'consent'" [class]="'text-sm font-normal'">
                I consent to data processing
              </ui-label>
            </div>

            <div class="flex gap-2">
              <button ui-button type="submit" [disabled]="!isFormValid()">
                Submit
              </button>
              <button ui-button variant="outline" type="button" (click)="resetForm()">
                Reset
              </button>
            </div>

            <div *ngIf="submitted" class="p-4 bg-green-50 border border-green-200 rounded-md">
              <p class="text-sm text-green-800">
                Form submitted successfully!
              </p>
            </div>
          </form>
        </ui-card-content>
      </ui-card>
    </div>
  `
})
export class FormsComponent {
  // Basic inputs
  name = '';
  email = '';
  password = '';
  phone = '';
  message = '';

  // Select
  selectedCountry = '';
  selectedRole = '';

  // Radio Group
  notificationPreference: string | null = '';

  // Checkboxes
  termsAccepted = false;
  newsletter = false;
  updates = false;

  // Switches
  marketingEmails = false;
  securityAlerts = true;
  pushNotifications = false;

  // Form data
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    consent: false
  };

  submitted = false;

  isFormValid(): boolean {
    return !!(
      this.formData.firstName &&
      this.formData.lastName &&
      this.formData.email &&
      this.formData.consent
    );
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }

  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      bio: '',
      consent: false
    };
    this.submitted = false;
  }
}
