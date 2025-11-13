import { Directive, Input, TemplateRef } from '@angular/core';
import {
  RdxDialogTriggerDirective,
  RdxDialogContentDirective,
  RdxDialogTitleDirective,
  RdxDialogDescriptionDirective,
  RdxDialogCloseDirective,
} from '@radix-ng/primitives/dialog';

/**
 * Dialog Trigger Directive
 * Apply to a button to trigger the dialog
 * @example
 * <button uiDialogTrigger [uiDialogTrigger]="dialogTemplate">Open Dialog</button>
 * <ng-template #dialogTemplate>
 *   <div uiDialogContent>...</div>
 * </ng-template>
 */
@Directive({
  selector: '[uiDialogTrigger]',
  standalone: true,
  hostDirectives: [
    {
      directive: RdxDialogTriggerDirective,
      inputs: ['id', 'rdxDialogTrigger: uiDialogTrigger', 'rdxDialogConfig: dialogConfig'],
    },
  ],
})
export class UiDialogTriggerDirective {}

/**
 * Dialog Content Directive
 * Apply to the dialog content container
 * @example
 * <div uiDialogContent>Content here</div>
 */
@Directive({
  selector: '[uiDialogContent]',
  standalone: true,
  hostDirectives: [RdxDialogContentDirective],
  host: {
    '[class]': '"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"',
  },
})
export class UiDialogContentDirective {}

/**
 * Dialog Title Directive
 * Apply to the dialog title element
 * @example
 * <h2 uiDialogTitle>Dialog Title</h2>
 */
@Directive({
  selector: '[uiDialogTitle]',
  standalone: true,
  hostDirectives: [RdxDialogTitleDirective],
  host: {
    '[class]': '"text-lg font-semibold leading-none tracking-tight"',
  },
})
export class UiDialogTitleDirective {}

/**
 * Dialog Description Directive
 * Apply to the dialog description element
 * @example
 * <p uiDialogDescription>Dialog description text</p>
 */
@Directive({
  selector: '[uiDialogDescription]',
  standalone: true,
  hostDirectives: [RdxDialogDescriptionDirective],
  host: {
    '[class]': '"text-sm text-muted-foreground"',
  },
})
export class UiDialogDescriptionDirective {}

/**
 * Dialog Close Directive
 * Apply to a button to close the dialog
 * @example
 * <button uiDialogClose>Close</button>
 */
@Directive({
  selector: '[uiDialogClose]',
  standalone: true,
  hostDirectives: [RdxDialogCloseDirective],
})
export class UiDialogCloseDirective {}

/**
 * Dialog Header Directive
 * Apply to a container for dialog title and description
 * @example
 * <div uiDialogHeader>
 *   <h2 uiDialogTitle>Title</h2>
 *   <p uiDialogDescription>Description</p>
 * </div>
 */
@Directive({
  selector: '[uiDialogHeader]',
  standalone: true,
  host: {
    '[class]': '"flex flex-col space-y-1.5 text-center sm:text-left"',
  },
})
export class UiDialogHeaderDirective {}

/**
 * Dialog Footer Directive
 * Apply to a container for dialog action buttons
 * @example
 * <div uiDialogFooter>
 *   <button>Cancel</button>
 *   <button>Confirm</button>
 * </div>
 */
@Directive({
  selector: '[uiDialogFooter]',
  standalone: true,
  host: {
    '[class]': '"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"',
  },
})
export class UiDialogFooterDirective {}
