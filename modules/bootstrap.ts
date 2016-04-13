import {provide, Type, Provider, IterableDiffers, Component} from 'angular2/core';
import {bootstrap as ng2Bootstrap} from 'angular2/platform/browser';
import {defaultIterableDiffers} from 'angular2/src/core/change_detection/change_detection';
import {METEOR_PROVIDERS} from 'angular2-meteor';
import {PromiseWrapper, PromiseCompleter} from 'angular2/src/facade/promise';

// Bootstrap with Meteor providers.
export function bootstrap(appComponentType: any,
                          providers: Array<Type | Provider | any[]> = null) {
  const completer: PromiseCompleter<any> = PromiseWrapper.completer();

  Meteor.startup(() => {
    ng2Bootstrap(appComponentType, [].concat(METEOR_PROVIDERS, providers || []))
      .then(() => completer.resolve());
  });

  return completer.promise;
}

export function MeteorApp(args: any={}) {
  return function(cls) {
    let annotations = Reflect.getMetadata('annotations', cls) || [];

    if (!args.selector) args.selector = 'app';

    // Create @Component.
    annotations.push(new Component(args));

    // Define metadata with added annotations.
    Reflect.defineMetadata('annotations', annotations, cls);

    bootstrap(cls, args.providers);

    return cls;
  }
}
