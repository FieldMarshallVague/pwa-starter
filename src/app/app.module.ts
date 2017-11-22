import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/* modules */
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { SettingsModule } from './settings';
import { StaticModule } from './static';
import { AppRoutingModule } from './app-routing.module';

/* components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GraphCanvasComponent } from './graph-canvas/graph-canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphCanvasComponent
  ],
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,
    
    // core & shared
    CoreModule,
    SharedModule,
    
    // features
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
