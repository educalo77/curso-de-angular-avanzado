import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ConEstadoComponent } from "./con-estado/con-estado.component";
import { SinEstadoComponent } from "./sin-estado/sin-estado.component";
import { AlertaConfirmacionComponent } from './alerta-confirmacion/alerta-confirmacion.component';

@NgModule({
  declarations: [AppComponent, ConEstadoComponent, SinEstadoComponent, AlertaConfirmacionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
