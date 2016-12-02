import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { IconListaTareasComponent } from './components/icon-lista-tareas/icon-lista-tareas.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ListaTareasComponent, IconListaTareasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

