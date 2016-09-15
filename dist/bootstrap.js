'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var angular2_meteor_1 = require('angular2-meteor');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function bootstrap(component, providers) {
    if (providers === void 0) { providers = []; }
    providers = providers || [];
    var args = {
        imports: [platform_browser_1.BrowserModule],
        providers: [angular2_meteor_1.METEOR_PROVIDERS, providers],
        declarations: [component],
        bootstrap: [component]
    };
    var annotations = [new core_1.NgModule(args)];
    Reflect.defineMetadata('annotations', annotations, AppModule);
    return new Promise(function (resolve) {
        platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule).then(function (moduleRef) {
            var appRef = moduleRef.injector.get(core_1.ApplicationRef);
            resolve(appRef.components[0]);
        });
    });
}
exports.bootstrap = bootstrap;
