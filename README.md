# angular2-meteor-auto-bootstrap

[![Greenkeeper badge](https://badges.greenkeeper.io/Urigo/angular2-meteor-auto-bootstrap.svg)](https://greenkeeper.io/)

Bootstrapper for the Angular2-Meteor apps.

Uses a class decorated with `NgModule` behind the scene with imported Angular 2 and Meteor modules to bootstrap a provided component dynamically.

> Please note that the recommended way for the bootstrapping since Angular 2 RC5 is to bootstrap an app module directly with imported `MeteorModule`.
> RC5 support is added currently for the compatibility with older versions mostly.

In order to use this package, first make sure to install all the required dependecies:
````
npm install @angular/common
npm install angular2-meteor
npm install angular2-meteor-auto-bootstrap
````

And then import the `bootstrap` from THIS package:
````js
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
````

And then bootstrap your main Angular 2 component as follows:
````js
@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [Transactions]
})
export class Main { }

bootstrap(Main);
````
