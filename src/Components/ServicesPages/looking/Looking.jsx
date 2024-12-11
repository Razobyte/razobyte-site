import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import { Row,Col } from "react-bootstrap";

const CommonSection = ({ title, services, bgName,para }) => {
  const navigate = useNavigate();

  return (
    <Row className={`flex justify-center items-center py-12 w-screen overflow-hidden ${bgName}`}>
      <Col md={10} xs={10}>
        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-semibold text-gray-700 text-center mb-0">
          {title}
        </h3>
        <p  className="md:text-lg sm:text-base text-sm font-normal text-gray-700 text-center mb-8">{para}</p>


        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.link)}
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg
               p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
              />
              {/* Title */}
              <h3 className="text-sm sm:text-base font-medium text-blue-600 text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
          modules={[Autoplay,Navigation]}
            spaceBetween={16} // Adjusts spacing between slides
            slidesPerView={1}
            loop={true}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => navigate(service.link)}
                  className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
                  />
                  {/* Title */}
                  <h3 className="text-sm sm:text-base fw-medium text-[#3b7fbf] text-center">
                    {service.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Col>
    </Row>
  );
};

export default CommonSection;
