import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/banner';
import {
    adminMapStateToProps,
    AdminOwnProps,
} from '../containers/adminContainer';

type AdminProps = ReturnType<typeof adminMapStateToProps> & AdminOwnProps;

const Admin = (props: AdminProps) => {
    const { pageTitle, roles } = props;
    return (
        <Container className="height-min-20">
            <Row>
                <Banner customClasses="w-50 m-auto" />
            </Row>
            <Row>
                <Col>
                    <h2>{pageTitle}</h2>
                    {roles &&
                        roles.length &&
                        roles.map((role, idx) => <p key={idx}>{role.name}</p>)}
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;
