import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactWrapperModule } from './module/react-wrapper/react-wrapper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactWrapperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
