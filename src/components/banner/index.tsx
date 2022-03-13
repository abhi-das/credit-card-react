import { Carousel } from "react-bootstrap";

interface BannerOwnProps {
    customClasses?: string;
}
const Banner = (props: BannerOwnProps) => {
    const { customClasses } = props;
    const imgSrc = [
        './assets/images/boxed-water-a.jpg',
        './assets/images/boxed-water-b.jpg',
        './assets/images/boxed-water-c.jpg',
        './assets/images/boxed-water-d.jpg'
    ];
    return <>
        <div className={`${customClasses}`}>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src={imgSrc[0]} alt="water"
                    />
                    <Carousel.Caption>
                        <h3>Label for first slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src={imgSrc[1]} alt="air"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src={imgSrc[2]} alt="fire"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img className="d-block w-100" src={imgSrc[3]} alt="wind"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </>
}

export default Banner;