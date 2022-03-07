import { createSelector, MemoizedSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";

const getRootState = (state: any) => state;

export const selectRootState: MemoizedSelector<
    unknown,
    IAppState
> = createSelector(
    getRootState,
    (rootState: any) => {
        return rootState;
    }
);
