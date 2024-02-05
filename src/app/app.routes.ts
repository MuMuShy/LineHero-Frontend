import { Routes,RouterModule  } from '@angular/router';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';

export const routes: Routes = [
  { path: 'character-selection', component: CharacterSelectionComponent },
];
export const AppRoutingModule = RouterModule.forRoot(routes);
