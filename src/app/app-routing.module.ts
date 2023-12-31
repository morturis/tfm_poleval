import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/views/contact/contact.component';
import { EditEvalComponent } from 'src/views/edit-eval/edit-eval.component';
import { EvalComponent } from 'src/views/eval/eval.component';
import { FillFormComponent } from 'src/views/fill-form/fill-form.component';
import { FormMakerComponent } from 'src/views/form-maker/form-maker.component';
import { LoginComponent } from 'src/views/login/login.component';
import { MainPageComponent } from 'src/views/main-page/main-page.component';
import { RegisterComponent } from 'src/views/register/register.component';
import { WhoWeAreComponent } from 'src/views/who-we-are/who-we-are.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: WhoWeAreComponent },
  { path: 'eval', component: EvalComponent },
  { path: 'eval/:code', component: EvalComponent },
  { path: 'edit-eval', component: EditEvalComponent },
  { path: 'form-maker', component: FormMakerComponent },
  { path: 'fill-form', component: FillFormComponent },
  { path: 'fill-form/:code', component: FillFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
