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

import {MeteorModule} from 'angular2-meteor';

@NgModule({
  imports: [BrowserModule, MeteorModule]
})
export class AppModule { }

export function bootstrap(component: Type,
    providers: Array<Type | Provider | any[]> = []): Promise<ComponentRef<any>> {

  let args = {
    imports: [BrowserModule, MeteorModule],
    providers: providers,
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
