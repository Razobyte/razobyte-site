import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import banner from '../../../../public/Image/performance-marketing-banner.png'
import Count from '../../HomePages/Count/Count';
import ScrollTrigger from 'react-scroll-trigger';
import { useLocation, useNavigate } from 'react-router';
import ServicesSection from './Section1';
import ecommerce from '../../../../public/Image/online-shopping.png'
import php5Image from '../../../../public/Image/php-else (5).png';
import image27 from '../../../../public/Image/Codi.png';
import wordpress from '../../../../public/Image/wp (1).png'
import image28 from '../../../../public/Image/php-else (2).png';
import image29 from '../../../../public/Image/php-else (1).png';
import image30 from '../../../../public/Image/php-else(7).png';
import image31 from '../../../../public/Image/lar-8 (11).jpg';
import image32 from '../../../../public/Image/html-css.png';
import image33 from '../../../../public/Image/lar-8 (8).png';
import image34 from '../../../../public/Image/shopify7.png';
import image35 from '../../../../public/Image/php-else (3).png';
import image36 from '../../../../public/Image/php-else (4).png';
import image37 from '../../../../public/Image/php-else(6).png';
import Check from '../../../../public/Image/check-mark_5290058 1.png'
import Contact from '../../HomePages/Contact/Contact';
import PerformanceMetrics from './Section2';
import shopify from '../../../../public/Image/shopify7.png';
import openkart from '../../../../public/Image/php-else (3).png';
import woCommerce from '../../../../public/Image/php-else (4).png';
import prestashop from '../../../../public/Image/php-else (2).png';
import img1 from '../../../../public/Image/case-icon (1).png';
import img2 from '../../../../public/Image/case-icon (2).png';
import img3 from '../../../../public/Image/case-icon (3).png';
import img4 from '../../../../public/Image/case-icon (4).png';
import Testominials from '../../HomePages/Testominals/Testomnials';
import ClientsSection from '../../HomePages/clients/Clients';
import CommonSection from '../../ServicesPages/looking/Looking';
import { GiCheckMark } from "react-icons/gi";
import TestimonialsSection from './TestominailsNew';
import ClientsSectionLandingPage from './Clients';
import LayoutFooter from './Footer';
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import Header from './header';
import Section1 from '../../website-design-devlopment/Section1';
import PerformanceMarketingStrategy from './Strategy';
import chanllengesfaced from '../../../../public/Image/Frame.png';
import mobilebanner from '../../../../public/Image/mobile banner profer.png';
import { MdQuestionMark } from "react-icons/md";
import qmarkimg from '../../../../public/Image/qus_.png'
import ImprovedZigzagLayout from './zigZag';
import img6 from '../../../../public/Image/outcomes.png';
import img7 from '../../../../public/Image/key-takeaways.png';
import Timeline from './TimeFrame';
import ModalExample from '../../Modal/Modal';
export default function ProductEnginner() {
  const location = useLocation();
  const isPerformanceMarketing = location.pathname === "/lp-two/performance-marketing";
  const isPerfromanceMarketingfirst = location.pathname === "/services/digital-marketing/performance-marketing";


  const navigate = useNavigate()

  const steps = [
    {
      icon: img4,
      title: "Company",
      subtitle: "Razobyte",
      className: "text-gray-700"
    },
    {
      icon: img3,
      title: "Industry",
      subtitle: "Healthcare",
      className: "text-gray-700"
    },
    {
      icon: img2,
      title: "Objective",
      subtitle: "Enhance patient <br/> acquisition &  <br/>engagement",
      className: "text-gray-700"
    },
    {
      icon: img1,
      title: "Timeframe",
      subtitle: "2023-2024",
      className: "text-gray-700"
    }
  ];

  const [clients, setClients] = useState(false)
  return (
    <>
      <ScrollTrigger onEnter={() => setClients(true)} onExit={() => setClients(false)} >
        <Row className='p-0 d-md-flex d-none'>
          <img src={banner} alt="banner" className='img-fluid p-0' />
        </Row>
        <Row className='p-0 d-md-none d-flex'>
          <img src={mobilebanner} alt="banner" className='img-fluid p-0 h-auto' />
        </Row>
        <Count clients={clients} />
        {/* <Section1 /> */}
        <PerformanceMarketingStrategy />
        <Row className='bg-[#EBF4FB] py-sm-5 py-3 flex flex-col justify-center items-center'>
          <div className='text-center'>
            <h2 className="sm:text-2xl text-base md:text-3xl md:font-extrabold font-semibold text-[#3b7fbf]">Transforming Businesses with Razobyte from Analysis to Results</h2>
            <p className="text-[#5E5E5E] sm:text-xl text-xs pb-md-0 pb-3">A Step-by-Step
              Approach to
              Achieving Real Measurable Success</p>
          </div>
          <div className="flex col-md-10 col-12 items-center justify-evenly">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mt-md-3 mt-0">
                {/* Step Content */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2">
                    <img src={step.icon} alt="step-icon" className='img-fluid md:w-auto md:h-auto w-10 h-10' />
                  </div>
                  <h4 className="font-semibold text-gray-700 md:text-lg sm:text-base text-sm mb-2">
                    {step.title}
                  </h4>
                  <p className="md:text-sm text-xs d-md-block d-none font-semibold text-[#5e5e5e]"
                    dangerouslySetInnerHTML={{ __html: step.subtitle }}>
                  </p>
                </div>
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="md:flex justify-center 
                  items-center text-blue-600 xl:text-4xl lg:text-3xl 
                  md:text-2xl sm:text-xl text-xm mx-md-5 mx-0">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </Row>
        <ImprovedZigzagLayout />
        <Timeline />
        <Row className='pb-5 d-md-flex d-none justify-center items-center pt-4'>
          <Col md={3} className='flex flex-col'>
            <div className="flex items-start space-x-2 relative">
              <div className="flex flex-col items-start absolute">
                <h2 className="sm:text-5xl text-2xl mt-sm-4 mt-2 font-semibold text-black ">
                  Why
                </h2>
                <p className="text-3xl font-medium text-[#5E5E5E] p-0 m-0">
                  raz<span className="text-[#3b7fbf]">O</span>byte
                </p>
              </div>
              <div className="relative left-24 top-3">
                <img
                  src={qmarkimg}
                  alt="qmark-img"
                  className="object-contain"
                />
              </div>
            </div>
          </Col>
          <Col md={6} className='flex flex-col justify-center' >
            <h4 className="text-xl md:text-2xl md:font-semibold font-medium text-[#3b7fbf] text-center">

              Over 8 Years of Global IT & Digital Expertise</h4>
            <p className='para'>
              With 8+ years of experience, Razobyte delivers trusted IT and digital solutions, including
              website development, digital marketing, and mobile app services. We focus on helping
              businesses grow through innovative and effective strategies.</p>
            <div className='flex justify-center items-center mb-2'>
              {/* <div className=' 
                                     font-semibold hover:text-[#3b7fbf] border-r-[1px] pr-4 text-[#3b7fbf]'>
                Why Us?
              </div> */}
              <div
                className=' 
                               font-semibold text-[#3b7fbf] border-r-[1px] pr-4 ps-4'  >
                Proven Results
              </div>
              <div
                className=' 
                                 font-semibold text-[#3b7fbf] border-r-[1px] ps-4 pr-4'>
                Global Reach
              </div>
              <div className=' 
                                     font-semibold text-[#3b7fbf] ps-4'>
                Custom Solutions
              </div>
            </div>
          </Col>
        </Row>
        <Row className='bg-[#3b7fbf] py-2 flex justify-center items-center'>
          <Col md={9} className='flex flex-md-row flex-column justify-between items-center'>
            <h4 className='sm:text-3xl text-xl font-semibold text-white mt-1'>Start Your Project Today!</h4>
            <ModalExample
              buttonLabel="REQUEST A QUOTE" headingform="REQUEST A QUOTE"
              subheadingForm="Let's Discuss Your Goals & Provide a Quote"
              className="btnmain md:bg-white 
               bg-black font-semibold md:text-[#3b7fbf] text-[#fff] sm:px-0 px-3" />
          </Col>
        </Row>
        <ServicesSection headingservices="Our Expertise" servicesparagraph="
        Capabilities Built for Success From Strategy to Execution"  className="bg-white" />
        <Contact />
        <TestimonialsSection />
        <ClientsSectionLandingPage />
        {/* <Row className='bg-[#3b7fbf] py-2 flex justify-center items-center'>
          <Col md={10} className='flex flex-md-row flex-column justify-between items-center'>
            <h4 className='sm:text-3xl font-semibold text-white mt-1'>Start Your Project Today!</h4>
            <button className='btnmain px-5 py-2 fw-semibold text-[#5e5e5e]'>
              REQUEST A QUOTE
            </button>
          </Col>
        </Row> */}
        <Row className='bg-[#292929] py-2 flex justify-center items-center'>
          <Col md={9} className='flex flex-md-row flex-column justify-between items-center'>
            <h4 className='sm:text-3xl font-semibold text-white mt-1'>Start Your Project Today!</h4>
            <ModalExample buttonLabel="REQUEST A QUOTE" headingform="REQUEST A QUOTE"
              subheadingForm="Let's Discuss Your Goals & Provide a Quote" 
              className="btnmain bg-white  font-semibold text-[#3b7fbf]  sm:px-0 px-5" />
          </Col>
        </Row>
        {isPerformanceMarketing && <LayoutFooter />}

      </ScrollTrigger>

    </>
  )
}