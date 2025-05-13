import Carousel from "react-bootstrap/Carousel";
import First from "../assets/First.png";
import Second from "../assets/Second.jpg";
import Third from "../assets/Third.jpg";
import Fourth from "../assets/Fourth.jpg";
import Fifth from "../assets/Fifth.jpg";

const CarouselComponent = () => {
  // Common style for all carousel images
  const imageStyle = {
    height: "450px",          // Reduced height
    objectFit: "cover",
  };

  // Common style for the Order Now button
  const buttonStyle = {
    backgroundColor: "rgba(37, 34, 34 , 0.6)",
    border: "4px solid white",
    width: "200px",           // Increased size
    height: "70px",
    color: "white",
    fontSize: "22px",         // Larger font
    fontWeight: "600",
    marginBottom: "80px",
    borderRadius: "10px",
  };

  return (
    <div className="carousel-container">
      <Carousel>
        {/* First Slide */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img-fluid"
            src={First}
            alt="First slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>MyGiFT HUT</h1>
            <button className="btn btn-outline-light px-4 py-2" style={buttonStyle}>
              Order Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img-fluid"
            src={Second}
            alt="Second slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>MyGiFT HUT</h1>
            <button className="btn btn-outline-light px-4 py-2" style={buttonStyle}>
              Order Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img-fluid"
            src={Third}
            alt="Third slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>MyGiFT HUT</h1>
            <button className="btn btn-outline-light px-4 py-2" style={buttonStyle}>
              Order Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Fourth Slide */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img-fluid"
            src={Fourth}
            alt="Fourth slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>MyGiFT HUT</h1>
            <button className="btn btn-outline-light px-4 py-2" style={buttonStyle}>
              Order Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Fifth Slide */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 img-fluid"
            src={Fifth}
            alt="Fifth slide"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>MyGiFT HUT</h1>
            <button className="btn btn-outline-light px-4 py-2" style={buttonStyle}>
              Order Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
