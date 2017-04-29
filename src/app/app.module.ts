import { ServerSocket } from './server-socket.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProgressbarModule, ProgressbarConfig } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProgressbarModule
  ],
  providers: [
    ServerSocket,
    ProgressbarConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
