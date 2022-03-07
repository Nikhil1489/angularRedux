import { createSelector, MemoizedSelector } from '@ngrx/store';
import { User } from '../interfaces/users.interface';
import { selectRootState } from './core.selector';

const getUsers = (state: any): User[] => state.usersCore.users as User[];

export const selectUsers: MemoizedSelector<
    unknown,
    User[]
> = createSelector(selectRootState, getUsers);