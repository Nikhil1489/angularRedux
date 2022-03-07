import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { getUsersAction, getUsersFailureAction, getUsersSuccessAction } from '../actions/users.action';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {

    getUsers$ = createEffect(() =>
        this.actions$.pipe(ofType(getUsersAction),
            map((action: ReturnType<typeof getUsersAction>) => {
                return action;
            }),
            exhaustMap(() =>
                this.UsersService.getUsers()
                    .pipe(
                        map((users: any) => {
                            return getUsersSuccessAction({ users: users.data });
                        }),
                        catchError(error =>
                            of(getUsersFailureAction({ error }))
                        ),
                    ))
        )
    );

    constructor(
        private actions$: Actions,
        private UsersService: UsersService
    ) { }
}