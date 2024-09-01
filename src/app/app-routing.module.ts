import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { FeladatComponent } from './feladat/feladat.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: "fooldal", component:FooldalComponent},
  {path: "rolunk", component:RolunkComponent},
  {path: "feladat", component:FeladatComponent},

  {path: "", redirectTo: "/fooldal", pathMatch: "full"},

  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
