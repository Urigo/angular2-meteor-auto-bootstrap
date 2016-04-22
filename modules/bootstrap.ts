import {Type, Provider, Component, ComponentRef} from 'angular2/core';
import {BROWSER_PROVIDERS} from 'angular2/src/platform/browser_common';
import {BROWSER_APP_PROVIDERS} from 'angular2/platform/browser';
import {MeteorApp as App, METEOR_PROVIDERS} from 'angular2-meteor';

// Bootstrap with Meteor providers.
export function bootstrap(component: any,
    providers: Array<Type | Provider | any[]> = null): Promise<ComponentRef> {
  return App.bootstrap(component, BROWSER_PROVIDERS,
    [BROWSER_APP_PROVIDERS, METEOR_PROVIDERS], providers);
}

export function MeteorApp(args: any={}) {
  return function(cls) {

    bootstrap(cls, args.providers);

    return cls;
  }
}

export function defineMetadata(cls: Type, args: any = {}) {
  let annotations = Reflect.getMetadata('annotations', cls) || [];

  annotations.push(new Component(args));

  Reflect.defineMetadata('annotations', annotations, cls);
}
