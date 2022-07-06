import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideDateTimeAdapter } from '@ux-aspects-angular/date-time';
import { Theme, UxaThemeModule } from '@ux-aspects-angular/theming';
import { UxaLuxonDateTimeAdapter } from '@ux-aspects-core/date-time-luxon';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    UxaThemeModule.forRoot(Theme.MicroFocus),
  ],
  providers: [
    provideDateTimeAdapter(UxaLuxonDateTimeAdapter),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
