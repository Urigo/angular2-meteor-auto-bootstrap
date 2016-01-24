import 'reflect-metadata';
import {provide, Type, Provider, IterableDiffers} from 'angular2/core';
import {MongoCursorDifferFactory} from 'angular2-meteor/mongo_cursor_differ';
import {bootstrap as ng2Bootstrap} from 'angular2/bootstrap';

function meteorProviders():Array {
    let providers = [];

    providers.push(provide(IterableDiffers, {
        useValue: IterableDiffers.extend([new MongoCursorDifferFactory()])
    }));

    return providers;
}

export const METEOR_PROVIDERS = meteorProviders();

export function bootstrap(appComponentType:any,
                          providers:Array<Type | Provider | any[]> = null) {
    ng2Bootstrap(appComponentType, [].concat(METEOR_PROVIDERS, providers || []));
}