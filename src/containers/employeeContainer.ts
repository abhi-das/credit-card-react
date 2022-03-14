import { connect } from 'react-redux';
import Employee from '../pages/employee';
import { RootState } from '../store/reducers';

export interface EmployeeOwnProps {
    pageTitle: string;
}
export const employeeMapStateToProps = (state: RootState) => ({
    profile: state.employeeUser.profile,
    loading: state.employeeUser.loading,
});

// Container component == Higher Order Component
const EmployeeContainer = connect(employeeMapStateToProps)(Employee);
export default EmployeeContainer;
