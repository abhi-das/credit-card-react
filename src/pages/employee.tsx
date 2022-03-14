import { Container, Row, Col } from 'react-bootstrap';
import {
    employeeMapStateToProps,
    EmployeeOwnProps,
} from '../containers/employeeContainer';

type employeeProps = ReturnType<typeof employeeMapStateToProps> &
    EmployeeOwnProps;

const Employee = (props: employeeProps) => {
    const { pageTitle, profile } = props;
    return (
        <Container className="mt-off-6 height-min-20">
            <Row>
                <Col>
                    <h2>{pageTitle}</h2>
                    {profile && <p>{profile.name}</p>}
                </Col>
            </Row>
        </Container>
    );
};

export default Employee;
