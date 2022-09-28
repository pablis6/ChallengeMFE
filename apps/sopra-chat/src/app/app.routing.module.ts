import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
  path: 'login',
  loadChildren: () => loadRemoteModule({
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    type: 'module',
    exposedModule: './Module'
  }).then(m => m.RemoteEntryModule)
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
