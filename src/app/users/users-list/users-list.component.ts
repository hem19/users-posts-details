import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { UsersListService } from './users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  myControl = new FormControl();
  usersList: any[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private _usersListService: UsersListService,
    private _router: Router) { }

  ngOnInit() {
    console.log("users list ngOnInit");
    this._usersListService.getUsersList().subscribe((data: Array<any>) => {
      this.usersList = data;

      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith({ name: '' }),
          map(value => typeof value === 'string' ? this._filter(value) : this._filter(value.name))
        );
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.usersList.filter(user => user.name.toLowerCase().includes(filterValue));
  }

  private autoCompleteDisplay(user) {
    return user ? user.name : null;
  }

  private loadUserDetails(user) {
    this._router.navigate(["users-details", user.id]);
  }
}
