// import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const ratingsData = {
  averageRating: 4.5,
  totalReviews: "50k",
  detailedRatings: [
    { stars: 5, count: 90 },
    { stars: 4, count: 60 },
    { stars: 3, count: 40 },
    { stars: 2, count: 30 },
    { stars: 1, count: 0 },
  ],
};

const customerFeedback = [
  {
    name: "Rachel Patel",
    date: "October 5, 2023",
    text: "Couldn't resist buying this watch after seeing it online, and I'm so glad I did. It's even more stunning in person, and the build quality is exceptional. Will definitely be purchasing from this brand again!",
    rating: 5,
  },
  {
    name: "Christopher Lee",
    date: "June 25, 2023",
    text: "Really impressed with the quality and style of this watch. It's exactly what I was looking for – versatile, durable, and looks great with any outfit. Docked half a star because the clasp is a bit tricky to open, but otherwise, it's perfect!",
    rating: 4.5,
  },
  {
    name: "Brian Chen",
    date: "April 15, 2022",
    text: "While this watch has its merits, such as its sleek design and comfortable wear, I found the strap to be somewhat flimsy, and the clasp occasionally difficult to secure. Despite these minor drawbacks, it does keep accurate time.",
    rating: 4,
  },
  {
    name: "Alex Johnson",
    date: "March 3, 2022",
    text: "Amazing value for the price. It does what it says and I have no complaints. The design is sleek, and the quality exceeded my expectations.",
    rating: 5,
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars).fill().map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-xl">★</span>
      ))}
      {halfStar && (
        <span className="text-yellow-400 text-xl">☆</span>
      )}
      {Array(emptyStars).fill().map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-xl">☆</span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const feedbackContainerRef = useRef(null);

  useEffect(() => {
    const container = feedbackContainerRef.current;
    const feedbackItems = container.children;

     const tl = gsap.timeline({ repeat: -1, paused: true });

    gsap.set(feedbackItems, { yPercent: 100 }); // Initial positioning off-screen

    tl.to(feedbackItems, {
      yPercent: -100,
      stagger: {
        amount: 1.5,
        each: 1.5,
        repeat: -1,
        ease: "none",
      },
      duration: 1.5,
      repeat: -1,
      ease: "power1.inOut",
    }).play();

    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.play();

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 h-screen">
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">Online Business</h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">We are here to help you grow Your Online Business</p>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Average Rating Section */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-center font-bold mb-5 mt-5">Customer reviews about us</h2>
            <p className="text-gray-500 mb-6 text-center">
              Customer reviews play a vital role in influencing purchasing decisions, providing real perspectives from actual users. Positive reviews can boost credibility and build trust.
            </p>
            <div className="text-center mb-6 mt-4 bg-[#f6eece] p-4 rounded-xl">
              <h3 className="text-5xl font-bold mr-2 text-[#FBBF24]">{ratingsData.averageRating}</h3>
              <div className="flex items-center justify-center">{renderStars(ratingsData.averageRating)}</div>
              <p className="text-gray-500">Based on {ratingsData.totalReviews} reviews</p>
            </div>
            <p className="text-gray-500 mb-6">{ratingsData.totalReviews} Reviews</p>
            <div className="mb-6 space-y-4">
              {ratingsData.detailedRatings.map((rating, index) => (
                <div key={index} className="flex items-center justify-center mb-4">
                  <span className="text-gray-700 text-base mr-2">{rating.stars}</span>
                  <span className="text-orange-400 text-lg pr-3">★</span>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mr-2">
                    <div className="bg-orange-400 h-full" style={{ width: `${rating.count}%` }}></div>
                  </div>
                  <span className="text-gray-700 text-base">{rating.count}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Feedback Section with GSAP Smooth Infinite Scroll */}
          <div className="w-full lg:w-1/2 overflow-hidden relative">
            <div ref={feedbackContainerRef} className="space-y-6 animate-scroll-feedback">
              {customerFeedback.concat(customerFeedback).map((feedback, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-white mr-4">
                    <span className="text-xl font-semibold">{feedback.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-md font-bold">{feedback.name}</h3>
                        <p className="text-gray-400 text-sm">{feedback.date}</p>
                      </div>
                      <div>{renderStars(feedback.rating)}</div>
                    </div>
                    <p className="text-gray-600">{feedback.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
