import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/users.interface';

enum UserActionTypes {
    GET_USERS = '[Users] Get Users',
    GET_USERS_SUCCESS = '[Users] Get Users Success',
    GET_USERS_FAILURE = '[Users] Get Users Failure',
}

export const getUsersAction = createAction(UserActionTypes.GET_USERS);

export const getUsersSuccessAction = createAction(
    UserActionTypes.GET_USERS_SUCCESS,
    props<{ users: User[] }>()
);

export const getUsersFailureAction = createAction(
    UserActionTypes.GET_USERS_FAILURE,
    props<{ error: any }>()
);