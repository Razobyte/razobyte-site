import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import icon8 from '../../../../public/Image/performance-marketing (1).png'
import  icon7 from '../../../../public/Image/performance-marketing (2).png'
import  icon6 from '../../../../public/Image/performance-marketing (3).png'
import  icon5 from '../../../../public/Image/performance-marketing (4).png'
import  icon4 from '../../../../public/Image/performance-marketing (5).png'
import  icon3 from '../../../../public/Image/performance-marketing (6).png'
import  icon2 from '../../../../public/Image/performance-marketing (7).png'
import  icon1 from '../../../../public/Image/performance-marketing (8).png'

const ServiceCard = ({ icon, title, description, features, }) => (
  <div className="px-2 py-3 flex  items-center justify-center flex-col">
    <div className=" flex  items-center justify-center flex-col">
      <img src={icon} alt={title} className="w-12 h-12" />
      <h3 className="mb-1 mt-1 text-lg font-bold p-0 text-center ">{title}</h3>
    </div>
    <p className="flex-grow-1 text-center ">{description}</p>
    {features && (
      <div className="mt-">
        <span className="fw-bold">Key Features: </span>
        <span>{features}</span>
      </div>
    )}
  </div>
);

const ServicesSection = ({headingservices,servicesparagraph}) => {
  const services = [
    {
      icon: icon1,
      title: "PPC Management",
      description: "Maximize your ad spend with our expert pay-per-click management.",
      features: "Keyword research, ad copy creation, A/B testing, and analytics"
    },
    {
      icon:  icon2,
      title: "SEO Optimization",
      description: "Improve your organic search visibility and attract quality traffic.",
      features: "On-page SEO, backlink strategy, and technical SEO audits"
    },
    {
      icon:  icon3,
      title: "Social Media Advertising",
      description: "Engage your audience on platforms they love like Facebook, Instagram, Twitter, LinkedIn",
      features: "Targeted campaigns, creative assets, and performance tracking"
    },
    {
      icon: icon4,
      title: "Content Marketing",
      description: "Drive conversions with compelling and valuable content.",
      features: "Blog writing, infographics, and video marketing"
    },
    {
      icon: icon5,
      title: "Website Design and Development",
      description: "We create visually stunning, user-friendly websites that reflect your brand identity.",
      features: ""
    },
    {
      icon: icon6,
      title: "UI and UX Design",
      description: "Our intuitive interfaces enhance user engagement and satisfaction for an optimal experience.",
      features: ""
    },
    {
      icon:  icon7,
      title: "Mobile Design and Development",
      description: "We provide responsive Android and iOS solutions, ensuring seamless interactions on any device.",
      features: ""
    },
    {
      icon:  icon8,
      title: "Digital Marketing",
      description: "Boost your online presence with our strategic services, from SEO to social media marketing, designed to connect with your target audience and drive traffic to your website.",
      features: ""
    }
  ];

  return (
 
        <Row className="justify-content-center bg-[#EAF2FF] py-sm-5 py-2">
          <Col md={10} xs={10}>
            <div className="text-center mb-sm-5 mb-0">
              <h2 className="sm:text-5xl  text-2xl  mb-sm-2 mb-0 font-semibold text-[#5E5E5E]">{headingservices}</h2>
              <h3 className="text-[#3b7fbf] sm:text-xl text-lg">{servicesparagraph}</h3>
            </div> 
            <Row className="g-4 ">
              {services.map((service, index) => (
                <Col key={index} xs={12} md={6} lg={3}>
                  <div className={`h-100 rounded-2xl shadow  ${
                    index % 2 === 0 ? 'bg-[#3b7fbf] text-white' : 'bg-[#98AADD] text-white'
                  }`}>
                    <ServiceCard {...service} />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
   
  );
};

export default ServicesSection;