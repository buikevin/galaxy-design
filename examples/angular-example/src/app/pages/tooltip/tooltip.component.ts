import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipComponent as UiTooltip, TooltipTriggerComponent, TooltipContentComponent} from '@/components/ui/tooltip';
import {ButtonComponent} from '@/components/ui/button';

@Component({
	selector: 'app-tooltip',
	standalone: true,
	imports: [CommonModule, UiTooltip, TooltipTriggerComponent, TooltipContentComponent, ButtonComponent],
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent {}
