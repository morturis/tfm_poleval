import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GenericComponentsModule } from 'src/generic-components/generic-components.module';
import { TranslatePipe } from 'src/pipes/translate.pipe';
import { HttpInterceptorService } from 'src/services/http-interceptor.service';
import { ViewsModule } from 'src/views/views.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericComponentsModule,
    BrowserAnimationsModule,
    MatInputModule,
    ViewsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    //Allows for custom icons for stepper
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: LOCALE_ID },
    {
      provide: LOCALE_ID,
      useValue: navigator.language,
    },
    TranslatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
