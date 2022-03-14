import { EmployeeState } from '../../generated/api/employee';
import {
    loadProfile,
    loadProfileFailure,
    loadProfileSuccess,
} from '../actions';

export const initialEmployeeState: EmployeeState = {
    profile: {
        name: 'alex',
    },
    loading: false,
};

export type employeeActions = ReturnType<typeof loadProfile> &
    ReturnType<typeof loadProfileFailure> &
    ReturnType<typeof loadProfileSuccess>;

const employeeReducer = (
    state: any = initialEmployeeState,
    action: employeeActions
): EmployeeState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default employeeReducer;
