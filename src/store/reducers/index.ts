import { combineReducers } from 'redux';
import adminReducer from './admin-reducer';
import employeeReducer from './employee-reducer';

export const rootReducer = combineReducers({
    adminUser: adminReducer,
    employeeUser: employeeReducer
})

export type RootState = ReturnType<typeof rootReducer>;