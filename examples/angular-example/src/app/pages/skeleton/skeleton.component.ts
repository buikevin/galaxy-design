import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkeletonComponent as UiSkeleton} from '@/components/ui/skeleton';

@Component({
	selector: 'app-skeleton',
	standalone: true,
	imports: [CommonModule, UiSkeleton],
	templateUrl: './skeleton.component.html',
	styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent {}
