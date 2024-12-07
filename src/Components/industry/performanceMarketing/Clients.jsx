import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
// Using your existing image imports
import cli1 from '../../../../public/Image/cli-2 (3).png';
import cli2 from '../../../../public/Image/cli-2 (1).png';
import cli3 from '../../../../public/Image/cli-2 (2).png';
import cli4 from '../../../../public/Image/cli-2 (4).png';
import cli5 from '../../../../public/Image/cli-2 (5).png';
import cli6 from '../../../../public/Image/cli-2 (7).png';
import cli7 from '../../../../public/Image/cli-2 (8).png';
import cli8 from '../../../../public/Image/cli-2 (9).png';
import cli9 from '../../../../public/Image/cli-2 (10).png';
import cli10 from '../../../../public/Image/cli-2 (11).png';
import cli11 from '../../../../public/Image/cli-2 (12).png';

const ClientsSectionLandingPage = () => {
  return (
    <Row
      className="d-md-flex d-none justify-content-center align-items-center pt-5"
    >
      <div className="text-center ">
        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-[#5E5E5E] mb-2">Our Clients</h2>
        <p className="text-[#5E5E5E] font-medium md:text-lg text-sm  mb-0">
          From startups to Fortune 350 companies
        </p>
      </div>
      <Col md={10}>
        {/* Second Marquee - Left Direction */}
        <Marquee speed={10} direction="right" >
        {[cli1, cli2, cli3, cli4, cli5, cli6,cli7,cli8,cli9,cli10,cli11].map((img, index) => (
            <div 
              key={index} 
              className="mx-1"

              style={{
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
             
            >
              <img
                src={img}
                alt={index + 7}
                className='h-52'
              />
            </div>
          ))}
        </Marquee>
      </Col>
    </Row>
  );
};

export default ClientsSectionLandingPage;