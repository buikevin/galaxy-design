import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Explicitly import specs (no require.context/import.meta.glob)
import './blocks/chat-ui/__tests__/chat-ui.component.spec';
import './blocks/sidebar/__tests__/sidebar.component.spec';
import './components/button/__tests__/button.component.spec';
import './components/checkbox/__tests__/checkbox.component.spec';
import './components/dialog/__tests__/dialog.component.spec';
import './components/input/__tests__/input.component.spec';
import './components/select/__tests__/select.component.spec';
