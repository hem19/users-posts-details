import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

import { UserDetailsService } from './users-details.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  userPosts: any[] = [];

  constructor(private _route: ActivatedRoute,
              private _userDetailsService: UserDetailsService) { }

  ngOnInit() {
    let selectedId = +(this._route.snapshot.params.id);

    this._userDetailsService.getUserDetails(selectedId).subscribe((data: Array<any>) => {
      this.userPosts = data;
    });
  }
}
