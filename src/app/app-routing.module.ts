import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestViewDosComponent } from 'src/views/test-view-dos/test-view-dos.component';
import { TestViewComponent } from 'src/views/test-view/test-view.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'test1', component: TestViewComponent },
  { path: 'test2', component: TestViewDosComponent },
  { path: '', component: TestViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
