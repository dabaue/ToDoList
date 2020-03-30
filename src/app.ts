import { RouterConfiguration, Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-framework';

require('bootstrap/dist/css/bootstrap.min.css');


@autoinject
export class App {

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Routing';
    config.map([
      { route: '', name: 'app', moduleId: PLATFORM.moduleName("components/List"), title: 'app', nav: true },
      { route: 'edit', name: 'edit', moduleId: PLATFORM.moduleName("components/edit"), title: 'Edit', nav: true },
      { route: 'new', name: 'new', moduleId: PLATFORM.moduleName("components/new"), title: 'New', nav: true },
      { route: 'delete', name: 'delete', moduleId: PLATFORM.moduleName("components/delete"), title: 'delete', nav: true }
    ]);
  }
}