import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericComponentsModule } from 'src/generic-components/generic-components.module';
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
  ],
  providers: [
    //Allows for custom icons for stepper
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
