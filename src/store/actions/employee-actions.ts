import { ActionType } from "./action-type";

const loadProfile = () => ({
 type: ActionType.LOAD_PROFILES
})
const loadProfileSuccess = () => ({
 type: ActionType.LOAD_PROFILE_SUCCESS
})
const loadProfileFailure = () => ({
 type: ActionType.LOAD_PROFILE_FAILURE
})
export { loadProfile, loadProfileFailure, loadProfileSuccess };