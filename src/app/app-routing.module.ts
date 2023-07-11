import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/views/contact/contact.component';
import { EvalComponent } from 'src/views/eval/eval.component';
import { WhoWeAreComponent } from 'src/views/who-we-are/who-we-are.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: WhoWeAreComponent },
  { path: 'eval', component: EvalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
