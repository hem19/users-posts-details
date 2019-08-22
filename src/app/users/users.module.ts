import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatOptionModule, 
        MatInputModule, MatListModule, MatDividerModule 
} from '@angular/material';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListService } from './users-list/users-list.service';
import { UserDetailsService } from './users-details/users-details.service';

@NgModule({
  declarations: [UsersListComponent, UsersDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    UsersRoutingModule
  ],
  providers: [
    UsersListService,
    UserDetailsService
  ]
})
export class UsersModule { }
