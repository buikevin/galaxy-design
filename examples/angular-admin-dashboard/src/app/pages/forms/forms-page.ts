import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardHeaderComponent, CardTitleComponent } from '@/components/ui/card';
import { ButtonComponent } from '@/components/ui/button';
import { InputComponent } from '@/components/ui/input';
import { LabelComponent } from '@/components/ui/label';
import { CheckboxComponent } from '@/components/ui/checkbox';
import { TextareaComponent } from '@/components/ui/textarea';
import {    SelectItemComponent } from '@/components/ui/select';
import { RadioGroupComponent, RadioGroupItemComponent } from '@/components/ui/radio-group';
import { SwitchComponent } from '@/components/ui/switch';
import { SliderComponent } from '@/components/ui/slider';
import { SeparatorComponent } from '@/components/ui/separator';

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    CheckboxComponent,
    TextareaComponent,
    SelectItemComponent,
    RadioGroupComponent,
    RadioGroupItemComponent,
    SwitchComponent,
    SliderComponent,
    SeparatorComponent,
  ],
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-3xl font-bold">Form Components</h1>
        <p class="text-gray-500 mt-2">Interactive form components from Galaxy UI</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Button Examples -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Button</h3>
            <p ui-card-description>Different button variants and sizes</p>
          </div>
          <div ui-card-content class="space-y-4">
            <div class="flex flex-wrap gap-2">
              <button ui-button>Default</button>
              <button ui-button variant="secondary">Secondary</button>
              <button ui-button variant="outline">Outline</button>
              <button ui-button variant="ghost">Ghost</button>
              <button ui-button variant="destructive">Destructive</button>
            </div>
            <div class="flex flex-wrap gap-2">
              <button ui-button size="sm">Small</button>
              <button ui-button size="default">Default</button>
              <button ui-button size="lg">Large</button>
            </div>
          </div>
        </ui-card>

        <!-- Input Fields -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Input</h3>
            <p ui-card-description>Text input examples</p>
          </div>
          <div ui-card-content class="space-y-4">
            <div class="space-y-2">
              <label ui-label for="text-input">Text Input</label>
              <ui-input
                id="text-input"
                type="text"
                placeholder="Enter text..."
                [(ngModel)]="inputValue"
              ></ui-input>
            </div>
            <div class="space-y-2">
              <label ui-label for="email-input">Email Input</label>
              <ui-input
                id="email-input"
                type="email"
                placeholder="Enter email..."
              ></ui-input>
            </div>
            <div class="space-y-2">
              <label ui-label for="password-input">Password Input</label>
              <ui-input
                id="password-input"
                type="password"
                placeholder="Enter password..."
              ></ui-input>
            </div>
            <div class="space-y-2">
              <label ui-label for="disabled-input">Disabled Input</label>
              <ui-input
                id="disabled-input"
                type="text"
                placeholder="Disabled..."
                [disabled]="true"
              ></ui-input>
            </div>
          </div>
        </ui-card>

        <!-- Textarea -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Textarea</h3>
            <p ui-card-description>Multi-line text input</p>
          </div>
          <div ui-card-content class="space-y-4">
            <div class="space-y-2">
              <label ui-label for="textarea-default">Default Textarea</label>
              <ui-textarea
                id="textarea-default"
                placeholder="Enter your message here..."
                [(ngModel)]="textareaValue"
                [rows]="4"
              ></ui-textarea>
              <p class="text-sm text-gray-500">
                Character count: {{ textareaValue.length }}
              </p>
            </div>
            <div class="space-y-2">
              <label ui-label for="textarea-disabled">Disabled Textarea</label>
              <ui-textarea
                id="textarea-disabled"
                placeholder="This is disabled..."
                [disabled]="true"
                [rows]="3"
              ></ui-textarea>
            </div>
          </div>
        </ui-card>

        <!-- Checkbox -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Checkbox</h3>
            <p ui-card-description>Checkbox examples</p>
          </div>
          <div ui-card-content class="space-y-4">
            <div class="flex items-center space-x-2">
              <ui-checkbox
                id="checkbox-1"
                [(checked)]="checked"
              />
              <label ui-label for="checkbox-1">Accept terms and conditions</label>
            </div>
            <div class="flex items-center space-x-2">
              <ui-checkbox id="checkbox-2" />
              <label ui-label for="checkbox-2">Subscribe to newsletter</label>
            </div>
            <div class="flex items-center space-x-2">
              <ui-checkbox id="checkbox-3" [checked]="true" />
              <label ui-label for="checkbox-3">Remember me</label>
            </div>
            <div class="flex items-center space-x-2">
              <ui-checkbox id="checkbox-4" [disabled]="true" />
              <label ui-label for="checkbox-4" class="text-gray-400">Disabled checkbox</label>
            </div>
          </div>
        </ui-card>

        <!-- Radio Group -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Radio Group</h3>
            <p ui-card-description>Radio button selection</p>
          </div>
          <div ui-card-content class="space-y-4">
            <div class="space-y-2">
              <label ui-label>Choose your plan</label>
              <ui-radio-group [(value)]="radioValue">
                <div class="flex items-center space-x-2">
                  <ui-radio-group-item value="option1" id="radio-1"></ui-radio-group-item>
                  <label ui-label for="radio-1">Free Plan - $0/month</label>
                </div>
                <div class="flex items-center space-x-2">
                  <ui-radio-group-item value="option2" id="radio-2"></ui-radio-group-item>
                  <label ui-label for="radio-2">Pro Plan - $9/month</label>
                </div>
                <div class="flex items-center space-x-2">
                  <ui-radio-group-item value="option3" id="radio-3"></ui-radio-group-item>
                  <label ui-label for="radio-3">Enterprise Plan - $29/month</label>
                </div>
              </ui-radio-group>
              <p class="text-sm text-gray-500">Selected: {{ radioValue }}</p>
            </div>
          </div>
        </ui-card>

        <!-- Switch -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Switch</h3>
            <p ui-card-description>Toggle switch component</p>
          </div>
          <div ui-card-content class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label ui-label for="switch-1">Enable notifications</label>
                <p class="text-sm text-gray-500">Receive notifications about updates</p>
              </div>
              <ui-switch id="switch-1" [(checked)]="switchValue" />
            </div>
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label ui-label for="switch-2">Marketing emails</label>
                <p class="text-sm text-gray-500">Receive emails about new features</p>
              </div>
              <ui-switch id="switch-2" />
            </div>
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label ui-label for="switch-3">Security updates</label>
                <p class="text-sm text-gray-500">Critical security notifications</p>
              </div>
              <ui-switch id="switch-3" [checked]="true" />
            </div>
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label ui-label for="switch-4" class="text-gray-400">Beta features</label>
                <p class="text-sm text-gray-400">Access experimental features</p>
              </div>
              <ui-switch id="switch-4" [disabled]="true" />
            </div>
          </div>
        </ui-card>

        <!-- Slider -->
        <ui-card>
          <div ui-card-header>
            <h3 ui-card-title>Slider</h3>
            <p ui-card-description>Range slider component</p>
          </div>
          <div ui-card-content class="space-y-6">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label ui-label for="slider-1">Volume</label>
                <span class="text-sm text-gray-500">{{ sliderValue }}%</span>
              </div>
              <ui-slider
                id="slider-1"
                [value]="sliderValue"
                (valueChange)="sliderValue = $event"
                [max]="100"
                [step]="1"
                class="w-full"
              />
            </div>
            <ui-separator />
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label ui-label for="slider-2">Brightness</label>
                <span class="text-sm text-gray-500">75%</span>
              </div>
              <ui-slider
                id="slider-2"
                [value]="75"
                [max]="100"
                [step]="1"
                class="w-full"
              />
            </div>
          </div>
        </ui-card>
      </div>
    </div>
  `,
  styles: [],
})
export class FormsPageComponent {
  inputValue = '';
  checked = false;
  textareaValue = '';
  radioValue = 'option1';
  switchValue = false;
  sliderValue = 50;
}
