import { User } from "../interfaces/users.interface";

export interface IUsersState {
    users: User[];
}

export const usersInitialState: IUsersState = {
    users: [{
        first_name: '',
        last_name: '',
        avatar: '',
        id: 0,
        email: ''
    }],
};
