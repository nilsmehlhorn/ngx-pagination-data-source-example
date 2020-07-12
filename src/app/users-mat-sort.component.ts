import {Component, OnInit, ViewChild} from '@angular/core'
import {UserQuery, UserService} from './user.service'
import {PaginationDataSource} from 'ngx-pagination-data-source'
import {User} from './user'
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'users-mat-sort',
  templateUrl: './users-mat-sort.component.html',
  styleUrls: [`./users-mat-sort.component.scss`]
})
export class UsersMatSortComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns = ['id', 'username', 'email', 'registration']

  data = new PaginationDataSource<User, UserQuery>(
      (request, query) => this.users.page(request, query),
      {property: 'username', order: 'asc'},
      {search: '', registration: undefined},
      2
  )

  constructor(private users: UserService) {
  }

  ngOnInit() {
    this.sort.sortChange.subscribe(
        (x) => this.data.sortBy({
          property: x.active,
          order: x.direction
        })
    )
  }
}
