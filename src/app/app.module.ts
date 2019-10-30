import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReacttiveFormComponent} from './reacttive-form/reacttive-form.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './user/user.component';
import {OwlMomentDateTimeModule} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time.module';
import {OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';

@NgModule({
  declarations: [
    AppComponent,
    ReacttiveFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlMomentDateTimeModule
  ],
  providers: [{provide: OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS, useValue: {useUtc: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
