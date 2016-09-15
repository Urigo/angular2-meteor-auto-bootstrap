'use strict';

import {
  ApplicationRef,
  NgModule,
  Type,
  Provider,
  Component,
  ComponentRef
} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {METEOR_PROVIDERS} from 'angular2-meteor';

@NgModule({
  imports: [BrowserModule]
})
export class AppModule { }

export function bootstrap(component: Type<any>,
    providers: Array<Provider> = []): Promise<ComponentRef<any>> {

  providers = providers || [];

  let args = {
    imports: [BrowserModule],
    providers: [METEOR_PROVIDERS, providers],
    declarations: [component],
    bootstrap: [component]
  };

  let annotations = [new NgModule(args)];
  Reflect.defineMetadata('annotations', annotations, AppModule);

  return new Promise((resolve) => {
    platformBrowserDynamic().bootstrapModule(AppModule).then(moduleRef => {
      let appRef = moduleRef.injector.get(ApplicationRef);
      resolve(appRef.components[0]);
    });
  });
}
