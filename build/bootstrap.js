"use strict";
var core_1 = require('@angular/core');
var browser_common_1 = require('@angular/platform-browser/src/browser_common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var angular2_meteor_1 = require('angular2-meteor');
// Bootstrap with Meteor providers.
function bootstrap(component, providers) {
    if (providers === void 0) { providers = null; }
    return angular2_meteor_1.MeteorApp.bootstrap(component, browser_common_1.BROWSER_PROVIDERS, [platform_browser_dynamic_1.BROWSER_APP_DYNAMIC_PROVIDERS, angular2_meteor_1.METEOR_PROVIDERS], providers);
}
exports.bootstrap = bootstrap;
function MeteorApp(args) {
    if (args === void 0) { args = {}; }
    return function (cls) {
        bootstrap(cls, args.providers);
        return cls;
    };
}
exports.MeteorApp = MeteorApp;
function defineMetadata(cls, args) {
    if (args === void 0) { args = {}; }
    var annotations = Reflect.getMetadata('annotations', cls) || [];
    annotations.push(new core_1.Component(args));
    Reflect.defineMetadata('annotations', annotations, cls);
}
exports.defineMetadata = defineMetadata;
