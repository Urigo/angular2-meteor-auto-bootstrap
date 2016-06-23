"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var angular2_meteor_1 = require('angular2-meteor');
function bootstrap(component, providers) {
    if (providers === void 0) { providers = null; }
    return angular2_meteor_1.MeteorApp.bootstrap(component, platform_browser_1.BROWSER_PROVIDERS, [platform_browser_dynamic_1.BROWSER_APP_COMPILER_PROVIDERS, angular2_meteor_1.METEOR_PROVIDERS], providers);
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
