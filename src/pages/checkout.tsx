import { Col, Container, Row } from 'react-bootstrap';
import CreditCard from '../components/creditCard';
import { CardTypes } from '../generated/api/creditCard';

interface CheckoutDefaultProps {
    cardTypes: CardTypes;
}

const Checkout = (props: CheckoutDefaultProps) => {
    const ccProps = {
        cardTypes: props.cardTypes,
    };

    return (
        <Container className="mt-off-6  height-min-20">
            <Row>
                <Col xs={5} className="m-auto mt-4">
                    <CreditCard {...ccProps} />
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
