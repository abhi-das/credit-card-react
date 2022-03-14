import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../logo';

interface FooterOwnProps {
    customClasses?: string;
}

const Footer = (props: FooterOwnProps) => {
    const { customClasses } = props;
    return (
        <>
            <footer className={`footer ${customClasses}`}>
                <Container className="pt-5 border-bottom">
                    <Row>
                        <Col className="mb-3 text-center">
                            <Logo />
                        </Col>
                        <Col>
                            <div className="p-0 float-left mb-3">
                                <h5 className="mb-4 font-weight-bold text-uppercase">
                                    Solutions
                                </h5>
                                <ul className="list-group">
                                    <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                        <i className="bi bi-briefcase px-2"></i>
                                        <a href="../sales/sales-performance-market-pipeline.html">
                                            Sales
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="py-4 d-flex justify-content-center align-items-center">
                                <a className="mr-4" href="../privacy.html">
                                    Privacy & terms
                                </a>
                                <a href="../sitemap.xml">Sitemap</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
