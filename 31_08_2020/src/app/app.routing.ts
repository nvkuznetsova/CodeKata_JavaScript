import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XyzUserListComponent }  from './user-list/user-list.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: XyzUserListComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
