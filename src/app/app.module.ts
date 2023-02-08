import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NocheDiaComponent } from './components/noche-dia/noche-dia.component';
import { ContadorComponent } from './components/components/contador/contador.component';
import { DadoComponent } from './components/dado/dado/dado.component';

@NgModule({
  declarations: [
    AppComponent,
    NocheDiaComponent,
    ContadorComponent,
    DadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
