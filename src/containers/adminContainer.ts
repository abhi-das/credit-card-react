import { connect } from "react-redux";
import Admin from "../pages/admin";
import { RootState } from "../store/reducers";

export interface AdminOwnProps {
    pageTitle: string;
}

export const adminMapStateToProps = (state: RootState) => ({
    roles: state.adminUser.roles,
    loading: state.adminUser.loading
})

// Container component == Higher Order Component
const AdminContainer = connect(adminMapStateToProps)(Admin);
export default AdminContainer;