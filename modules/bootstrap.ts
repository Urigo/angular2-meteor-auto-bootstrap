import {Type, Provider, Component, ComponentRef} from '@angular/core';
import {BROWSER_APP_PROVIDERS, BROWSER_PLATFORM_PROVIDERS} from '@angular/platform-browser';
import {BROWSER_APP_COMPILER_PROVIDERS} from '@angular/platform-browser-dynamic';
import {MeteorApp as App, METEOR_PROVIDERS} from 'angular2-meteor';

// Bootstrap with Meteor providers.
export function bootstrap(component: any,
    providers: Array<Type | Provider | any[]> = null): Promise<ComponentRef<any>> {
  return App.bootstrap(component, BROWSER_PLATFORM_PROVIDERS,
    [BROWSER_APP_PROVIDERS, BROWSER_APP_COMPILER_PROVIDERS, METEOR_PROVIDERS], providers);
}

export function MeteorApp(args: any = {}) {
  return function(cls) {

    bootstrap(cls, args.providers);

    return cls;
  }
}

export function defineMetadata(cls: Type, args: any = {}) {
  const annotations = Reflect.getMetadata('annotations', cls) || [];

  annotations.push(new Component(args));

  Reflect.defineMetadata('annotations', annotations, cls);
}
