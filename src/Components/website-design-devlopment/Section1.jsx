import React from 'react'
import { Row, Col } from 'react-bootstrap'


export default function Section1() {
    return (
        <>
            <Row className='flex justify-center items-center py-md-4 py-2'>

                <Col md={4} className='flex flex-col justify-center items-center relative -z-10'>
                    {/* Outer Blue Circle */}
                    <div className='bg-[#3b7fbf] rounded-full h-96 w-96 absolute flex justify-center items-center'>
                        {/* Inner White Circle */}
                        <div className='bg-white h-72 w-72 rounded-full flex flex-col justify-center items-center'>
                            <h2 className='sm:text-5xl text-2xl mt-sm-4 mt-2 font-semibold text-[#5E5E5E]'>Why </h2>
                            <p className='text-3xl font-medium text-[#5E5E5E] p-0 m-0'>
                                raz<span className='text-[#3b7fbf]'>O</span>byte
                            </p>
                        </div>
                    </div>

                </Col>

                <Col md={6} className='flex flex-col justify-center ' >
                    <h4 className='text-[#5E5E5E] font-semibold text-lg'>8+ Years of Global IT & Digital Expertise</h4>
                    <p className='para'>
                        With 8+ years of experience, Razobyte delivers trusted IT and digital solutions, including
                        website development, digital marketing, and mobile app services. We focus on helping
                        businesses grow through innovative and effective strategies.</p>
                    <div className='flex justify-between items-start mb-2'>
                        <div className=' text-[#5E5E5E] 
                            font-semibold hover:text-[#3b7fbf] border-r-[1px] pr-4'>
                            Why Us?
                        </div>
                        <div
                            className=' text-[#5E5E5E] 
                      font-semibold hover:text-[#3b7fbf] border-r-[1px] pr-4'  >
                            Proven Results
                        </div>
                        <div
                            className=' text-[#5E5E5E] 
                        font-semibold hover:text-[#3b7fbf] border-r-[1px] pr-4'>
                            Global Reach
                        </div>
                        <div className=' text-[#5E5E5E] 
                            font-semibold hover:text-[#3b7fbf]'>
                            Custom Solutions
                        </div>
                    </div>
                </Col>



            </Row>
        </>
    )
}
