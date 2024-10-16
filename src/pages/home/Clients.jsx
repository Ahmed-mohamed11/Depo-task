 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideImage from '../../images/gfx/tree-736885_640.jpg'
function Clients() {
    const clients = [
        { id: 1, image: SlideImage, title: "Client 1" },
        { id: 2, image: SlideImage, title: "Client 2" },
        { id: 3, image: SlideImage, title: "Client 3" },
        { id: 4, image: SlideImage, title: "Client 4" },
        { id: 5, image: SlideImage, title: "Client 5" },
    ];

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
    };

    const renderClients = () => {
        return clients.map((client) => (
            <div key={client.id}>
                <img
                    className=" w-1/2 h-1/2 mx-auto rounded-full"
                    src={client.image}
                    alt={client.title}
                />
            </div>
        ));
    };


    return (
        <div className="slider-container my-20">
            <div className="text-center my-10">
                <h1 className="text-center text-4xl font-bold"> Clients we have had the <br /> honor of working with      </h1>
                 
            </div>

             <Slider {...sliderSettings}>{renderClients()}</Slider>

             <Slider {...{ ...sliderSettings, rtl: true }} className="mt-8">
                {renderClients()}
            </Slider>
        </div>
    );
}

export default Clients;
