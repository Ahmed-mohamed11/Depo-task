import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Clients() {
    const clients = [
        { id: 1, image: "https://i.ibb.co/0jwHq2N/1.png", title: "Client 1" },
        { id: 2, image: "https://i.ibb.co/0jwHq2N/1.png", title: "Client 2" },
        { id: 3, image: "https://i.ibb.co/0jwHq2N/1.png", title: "Client 3" },
        { id: 4, image: "https://i.ibb.co/0jwHq2N/1.png", title: "Client 4" },
        { id: 5, image: "https://i.ibb.co/0jwHq2N/1.png", title: "Client 5" },
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
                    className="img-fluid w-1/2 mx-auto rounded-full"
                    src={client.image}
                    alt={client.title}
                />
            </div>
        ));
    };


    return (
        <div className="slider-container my-20">
            <div className="text-center my-10">
                <h1 className="text-center text-4xl font-medium">عمــــــلاء تشرفنــــــا بالعمــــــل معهــــــم</h1>
                <p className="text-slate-800 text-lg my-2">
                    يرحب بروجكتو بكل عملائنا ونحن نفتخر بكوننا جزء منكم
                </p>
            </div>

            {/* Top Slider - Moves Left to Right */}
            <Slider {...sliderSettings}>{renderClients()}</Slider>

            {/* Bottom Slider - Moves Right to Left */}
            <Slider {...{ ...sliderSettings, rtl: true }} className="mt-8">
                {renderClients()}
            </Slider>
        </div>
    );
}

export default Clients;
