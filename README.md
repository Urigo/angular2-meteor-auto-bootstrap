# angular2-meteor-auto-bootstrap

Bootstrapper for the Angular2-Meteor apps.

Adds behind the scene required Angular 2 and Meteor modules for the Angular 2 dynamic module bootstrapping.

> Please note that the recommended way for the bootstrapping since Angular 2 RC5 is to bootstrap an app module directly importing `MeteorModule`.
> RC5 support is added for the compatibility with older versions mostly.

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

And then just init it like any other Angular 2 application, using the `bootstrap` function:
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
