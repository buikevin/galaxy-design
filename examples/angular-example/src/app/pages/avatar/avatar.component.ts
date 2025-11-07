import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent as UiAvatar} from '@/components/ui/avatar';

@Component({
	selector: 'app-avatar',
	standalone: true,
	imports: [CommonModule, UiAvatar],
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {}
