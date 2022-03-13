import { ActionType } from "./action-type";


const loadRoles = () => ({
    type: ActionType.LOAD_ROLES
})

const loadRolesSuccess = () => ({
    type: ActionType.LOAD_ROLE_SUCCESS
})

const loadRolesFailure = () => ({
    type: ActionType.LOAD_ROLE_FAILURE
})

export { loadRoles, loadRolesFailure, loadRolesSuccess };