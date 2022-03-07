import { createReducer, on } from '@ngrx/store';
import { getUsersAction, getUsersFailureAction, getUsersSuccessAction } from '../actions/users.action';
import { usersInitialState } from '../state/users.state';


export const usersReducer = createReducer(
    usersInitialState,
    on(getUsersAction, (state) => ({
        ...state,
    })),
    on(getUsersSuccessAction, (state, action) => ({
        ...state,
        users: action.users,
    })),
    on(getUsersFailureAction, (state, action) => ({
        ...state,
        users: action.error,
    })),
);
