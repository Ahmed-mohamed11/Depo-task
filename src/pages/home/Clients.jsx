// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Clients() {

    const clientsImages = [
        {
            id: 1,
            image: "https://i.ibb.co/0jwHq2N/1.png",
            title: "Client 1",
        },
        {
            id: 2,
            image: "https://i.ibb.co/0jwHq2N/1.png",
            title: "Client 2",
        },
        {
            id: 3,
            image: "https://i.ibb.co/0jwHq2N/1.png",
            title: "Client 3",
        },
        {
            id: 4,
            image: "https://i.ibb.co/0jwHq2N/1.png",
            title: "Client 4",
        },
        {
            id: 5,
            image: "https://i.ibb.co/0jwHq2N/1.png",
            title: "Client 5",
        },


    ]
    // Settings for the top slider - moving left to right continuously
    const settingsTop = {
        dots: false,
        arrows: false, // Remove the navigation arrows
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000, // Adjust the speed to control how smooth it is
        autoplaySpeed: 0, // Ensures continuous scrolling with no delay
        cssEase: "linear",
        pauseOnHover: false, // Prevents pausing when hovered
    };

    // Settings for the bottom slider - moving right to left continuously (using rtl)
    const settingsBottom = {
        dots: false,
        arrows: false, // Remove the navigation arrows
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000, // Adjust the speed to control how smooth it is
        autoplaySpeed: 0, // Ensures continuous scrolling with no delay
        cssEase: "linear",
        rtl: true, // Right-to-left direction
        pauseOnHover: false, // Prevents pausing when hovered
    };

    return (
        <div className="slider-container my-20">
            <div className="text-center my-10">
                <h1 className="text-center text-4xl font-medium  ">عمــــــلاء تشرفنــــــا بالعمــــــل معهــــــم</h1>
                <p className="text-slate-800 text-lg my-2">يرحب بروجكتو بكل عملائنا ونحن نفتخر بكوننا جزء منكم  </p>
            </div>
            {/* Top Slider - Moves Left to Right */}
            <Slider {...settingsTop}>
                {Array.from({ length: 8 }).map((_, index) => (
                    clientsImages.map((client) => (
                        <div key={client.id}>
                            <img
                                className="img-fluid w-1/2 mx-auto rounded-full"
                                src={client.image}
                                alt={client.title}
                            />
                        </div>
                    ))
                ))}
            </Slider>

            {/* Bottom Slider - Moves Right to Left */}
            <Slider {...settingsBottom} className="mt-8">
                {Array.from({ length: 8 }).map((_, index) => (
                    clientsImages.map((client) => (
                        <div key={client.id}>
                            <img
                                className="img-fluid w-1/2 mx-auto rounded-full"
                                src={client.image}
                                alt={client.title}
                            />
                        </div>
                    ))
                ))}
            </Slider>
        </div>
    );
}

export default Clients;
