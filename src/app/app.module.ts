import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GenericComponentsModule } from 'src/generic-components/generic-components.module';
import { HttpInterceptorService } from 'src/services/http-interceptor.service';
import { ViewsModule } from 'src/views/views.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatePipe } from 'src/pipes/translate.pipe';

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
    TranslatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
