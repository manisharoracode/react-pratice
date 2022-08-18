
import Carousel from 'react-bootstrap/Carousel';
// import { Carousel } from 'react-bootstrap';

function CarouselItem(props) {
    return (
        <>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.bannerImage} alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </>
    )
}

export default CarouselItem