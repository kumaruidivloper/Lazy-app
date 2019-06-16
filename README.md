# LazyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## App Setup
Step1: ng new [app-name] --style=scss --routing
Step2: npm install bootstrap --save
Step3: 
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],

## Create Home Component
Step1: ng g c home --dryRun [show the test files structure]

## Creating the Lazy Module
Step1: ng generate module lazy --routing

## Creating lazy component
Step1: cd src/app/lazy
ng generate component sobre

## lazy-routing.module.ts [add code]
Step1: import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
