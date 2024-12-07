import React, { useRef } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/navigation';
import blogsData from './BlogsData.json';
import '../Blog/Blog.css'
 // Assuming you have your custom styles in this file

const Blog = ({ title }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const navigate = useNavigate();

  // Access individual blog data
  const firstCardData = blogsData[0];
  const secondCardData = blogsData[1];
  const thirdCardData = blogsData[2];
  const fourthCardData = blogsData[3];
  const fifthCardData = blogsData[4];
  const sixthCardData = blogsData[5];

  return (
    <Row className='justify-content-center flex-col align-items-center py-4 bg-[#fff]'>
      <div className='text-center'>
        <h3 className='hed2'>{title}</h3>
        <p className='para'>Take a peek inside our expert’s minds</p>
      </div>
      <Col md={10} xs={10} className='position-relative'>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Card className='cardmain-blog2 w-100' onClick={() => navigate('/firstBlog')}>
              <img src={firstCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
              <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                <CardTitle>
                  <div className='allcardData'>
                    <h3 className='hed3 text-white'>{firstCardData.title}</h3>
                    <p className='text-white'>{firstCardData.content}</p>
                    <Button className='btm mt-2'>Read more</Button>
                  </div>
                </CardTitle>
              </CardBody>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className='cardmain-blog2 w-100' onClick={() => navigate('/secondBlog')}>
              <img src={secondCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
              <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                <CardTitle>
                  <div className='allcardData'>
                    <h3 className='hed3 text-white'>{secondCardData.title}</h3>
                    <p className='text-white'>{secondCardData.content}</p>
                    <Button className='btm mt-2'>Read more</Button>
                  </div>
                </CardTitle>
              </CardBody>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className='cardmain-blog2 w-100' onClick={() => navigate('/thirdBlog')}>
              <img src={thirdCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
              <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                <CardTitle>
                  <div className='allcardData'>
                    <h3 className='hed3 text-white'>{thirdCardData.title}</h3>
                    <p className='text-white'>{thirdCardData.content}</p>
                    <Button className='btm mt-2'>Read more</Button>
                  </div>
                </CardTitle>
              </CardBody>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className='cardmain-blog2 w-100' onClick={() => navigate('/fourthBlog')}>
              <img src={fourthCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
              <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                <CardTitle>
                  <div className='allcardData'>
                    <h3 className='hed3 text-white'>{fourthCardData.title}</h3>
                    <p className='text-white'>{fourthCardData.content}</p>
                    <Button className='btm mt-2'>Read more</Button>
                  </div>
                </CardTitle>
              </CardBody>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className='cardmain-blog2 w-100' onClick={() => navigate('/fifthBlog')}>
              <img src={fifthCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
              <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                <CardTitle>
                  <div className='allcardData'>
                    <h3 className='hed3 text-white'>{fifthCardData.title}</h3>
                    <p className='text-white'>{fifthCardData.content}</p>
                    <Button className='btm mt-2'>Read more</Button>
                  </div>
                </CardTitle>
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='cardmain-blog2 w-100' onClick={() => navigate('/sixthBlog')}>
              <img src={sixthCardData.image} variant='top' className='card-imgblogs2 img-fluid' style={{ minHeight: '250px', maxHeight: '250px' }} />
              <CardBody style={{ backgroundColor: '#3b7fbf' }}>
                <CardTitle>
                  <div className='allcardData'>
                    <h3 className='hed3 text-white'>{sixthCardData.title}</h3>
                    <p className='text-white'>{sixthCardData.content}</p>
                    <Button className='btm'>Read more</Button>
                  </div>
                </CardTitle>
              </CardBody>
            </Card>
          </SwiperSlide>
        </Swiper>
        {/* Custom Navigation Buttons */}
        <div ref={navigationPrevRef} className="custom-swiper-button-prev">
          <IoMdArrowDropleft size={30} />
        </div>
        <div ref={navigationNextRef} className="custom-swiper-button-next">
          <IoMdArrowDropright  size={30}/>
        </div>
      </Col>
    </Row>
  );
};

export default Blog;
