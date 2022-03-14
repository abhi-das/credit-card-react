import { AdminState } from '../../generated/api/admin';
import { loadRoles, loadRolesFailure, loadRolesSuccess } from '../actions';

const initialAdminState: AdminState = {
    loading: false,
    roles: [
        {
            name: 'admin',
        },
        {
            name: 'super-admin',
        },
    ],
};

type adminActions = ReturnType<typeof loadRoles> &
    ReturnType<typeof loadRolesFailure> &
    ReturnType<typeof loadRolesSuccess>;

const adminReducer = (
    state: any = initialAdminState,
    action: adminActions
): AdminState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default adminReducer;
