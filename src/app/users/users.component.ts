import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getUsersAction } from '../actions/users.action';
import { User } from '../interfaces/users.interface';
import { selectUsers } from '../selectors/users.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[] | undefined;
  private unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getUsersAction());
    this.store.pipe(takeUntil(this.unsubscribe),
      select(selectUsers)).subscribe((users: User[]) => {
        this.users = users;
      });
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
