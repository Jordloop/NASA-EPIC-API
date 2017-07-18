import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NasaEpicComponent } from './nasa-epic/nasa-epic.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NasaEpicComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
