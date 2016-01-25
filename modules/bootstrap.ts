import {provide, Type, Provider, IterableDiffers} from 'angular2/core';
import {MongoCursorDifferFactory} from 'angular2-meteor/mongo_cursor_differ';
import {bootstrap as ng2Bootstrap} from 'angular2/bootstrap';
import {defaultIterableDiffers} from 'angular2/src/core/change_detection/change_detection';

function meteorProviders():Array {
    let providers = [];

    let factories = defaultIterableDiffers.factories;
    if (factories) {
        factories.push(new MongoCursorDifferFactory());
    }
    providers.push(provide(IterableDiffers, {
        useValue: new IterableDiffers(factories)
    }));

    return providers;
}

export const METEOR_PROVIDERS = meteorProviders();

export function bootstrap(appComponentType:any,
                          providers:Array<Type | Provider | any[]> = null) {
    ng2Bootstrap(appComponentType, [].concat(METEOR_PROVIDERS, providers || []));
}