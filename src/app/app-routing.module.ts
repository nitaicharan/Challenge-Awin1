import { NgModule } from '@angular/core';
import { MainComponent } from './modules/main/main.component';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'prefix',
    loadChildren: () =>
      import(`./modules/main/main.module`).then((module) => module.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
