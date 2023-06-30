import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestViewDosComponent } from 'src/views/test-view-dos/test-view-dos.component';
import { TestViewComponent } from 'src/views/test-view/test-view.component';
import { AppComponent } from './app.component';
import { EvalComponent } from 'src/views/eval/eval.component';
import { WhoWeAreComponent } from 'src/views/who-we-are/who-we-are.component';
import { ContactComponent } from 'src/views/contact/contact.component';

const routes: Routes = [
  { path: 'test1', component: TestViewComponent },
  { path: 'test2', component: TestViewDosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: WhoWeAreComponent },
  { path: 'eval', component: EvalComponent },
  { path: '', component: TestViewComponent },
  { path: '', component: TestViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
