import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { ComponentMainComponent } from './app/component-main/component-main.component';
import {provideRouter} from '@angular/router';
import { routes } from './app/app-routing.module';
//platformBrowserDynamic().bootstrapModule(AppModule)
//  .catch(err => console.error(err));

//Ahora nuestra Main sera el ComponentMain que creamos, nuestra aplicacion arrancara apartir de este componente
bootstrapApplication(ComponentMainComponent,{
providers: [                    //Se establece el routing
    provideRouter(routes)
]
}).catch(err => console.error(err));

//Todo lo que es app.module,components se elimina ya que no lo utilzaremos
//solo dejaremos el routing