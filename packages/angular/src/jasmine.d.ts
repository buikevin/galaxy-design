// Minimal Jasmine globals for TS without @types/jasmine

declare function describe(name: string, fn: () => void): void;
declare function xdescribe(name: string, fn: () => void): void;
declare function fdescribe(name: string, fn: () => void): void;

declare function it(name: string, fn: (done?: DoneFn) => void): void;
declare function xit(name: string, fn: (done?: DoneFn) => void): void;
declare function fit(name: string, fn: (done?: DoneFn) => void): void;

declare function beforeEach(fn: (done?: DoneFn) => void): void;
declare function afterEach(fn: (done?: DoneFn) => void): void;

declare function expect(actual: any): any;
declare function spyOn<T, K extends keyof T>(obj: T, methodName: K): any;

declare interface DoneFn {
  (): void;
  fail: (message?: string | Error) => void;
}
