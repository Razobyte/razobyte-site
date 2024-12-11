
import { Row, Col, Form, FormGroup, FormControl, FormLabel, FormCheck, Button } from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { HiOutlinePencil } from "react-icons/hi";
import { TiMail } from "react-icons/ti";
import { useRef,useState } from 'react';


import '../Banner/Banner.css'

export default function Banner() {
    
    const form = useRef();
    const [show, setShow] = useState(false);
    const [submittedForm, setSubmittedForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        plan: '',
        paymentCycle: '',
        customService: '',
        projectMessage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'plan' && value !== 'Others') {
            setFormData({
                ...formData,
                [name]: value,
                customService: '',  // Reset customService if a service other than 'Others' is selected
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleClose = () => {
        setShow(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            companyName: '',
            plan: '',
            paymentCycle: '',
            customService: '',
            projectMessage: ''
        });
    };

    const validateName = () => {
        return formData.name.trim() !== '';
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(formData.email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateName() || !validateEmail()) {
            return;
        }
        const serviceId = "service_50ae7vg";
        const templateId = "template_bj7dgiq";
        const userId = "bxMahwGTyTPYbhhHw";

        emailjs
            .send(serviceId, templateId, formData, userId)
            .then((response) => {
                Swal.fire({
                    title: "Thank you for reaching out.",
                    text: "We'll be in touch shortly regarding your inquiry.",
                    icon: "success"
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    companyName: '',
                    plan: '',
                    paymentCycle: '',
                    customService: '',
                    projectMessage: ''
                });
                setSubmittedForm(true);
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                Swal.fire({
                    title: "Try Again!",
                    text: "Error sending Mail!",
                    icon: "warning"
                });
            });
    };



    return (
        <>
            <Row className='banner d-sm-flex  d-none justify-content-center align-items-center
              mainrowdiv pt-5' style={{ backgroundImage: "linear-gradient(to right ,#3b7fbf9d,#3b7fbf21 ),url('Image/wave (14).svg')" }}>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <div className='contact-title'>
                        <div>
                            <p>Let’s build what
                                you dreamt of,
                                Together!
                                Drop us a call!</p>
                            <img src="Image/Group 1111 (1).png" alt="" className='img-fluid img-below' />
                        </div>



                    </div>
                </Col>
                <Col md={5} >
                    <div className='justify-content-center align-items-center'>
                        <Form className='Form p-4'
                        >
                            <div className='d-flex flex-col justify-center items-center'>
                                <h4 className='hed3 ' style={{ color: "#3b7fbf" }}>Request a Quote</h4>
                                <p className='para' style={{ color: "#3b7fbf" }}>Book a free session with Razobyte</p>
                            </div>
                            <FormGroup>
                                <FormControl
                                    type='text'
                                    placeholder=' Your Name*'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <FormControl
                                    type='email'
                                    placeholder=' Your Email*'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <FormControl
                                    type='number'
                                    placeholder='Your Phone Number*'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <FormControl
                                    type='text'
                                    placeholder='Company Name/Website (If Any)*'
                                    name='companyName'
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <div className="dropdown-container">
                                    <FormControl
                                        as='select'
                                        name='plan'
                                        value={formData.plan}
                                        onChange={handleChange}
                                        required
                                        className="form-select-with-icon"
                                    >
                                        <option value=''>Select Services</option>
                                        <option value='Basic'>Website Design & Development</option>
                                        <option value='Premium'>Digital Marketing (SEO, SMO & SEM)</option>
                                        <option value='Enterprise'>Mobile App Development (Android & IOS)</option>
                                        <option value='Others'>Others</option>
                                    </FormControl>
                                    <i className="dropdown-icon">&#x25BC;</i>
                                </div>

                                {formData.plan === 'Others' && (
                                    <FormGroup className='pt-3'>
                                        <FormControl
                                            type='text'
                                            name='customService'
                                            placeholder='Please specify your service'
                                            value={formData.customService}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormGroup>
                                )}
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <FormControl
                                    as='textarea'
                                    placeholder='Tell Us About Your Project/Message'
                                    name='projectMessage'
                                    value={formData.projectMessage}
                                    onChange={handleChange}
                                    rows={2}
                                    required
                                />
                            </FormGroup>
                            {/* <FormGroup controlId='formBasicCheckbox' className="d-flex  pt-3">
                            <FormCheck type="checkbox" label="Remember Me" className='form-check-main-page' />
                        </FormGroup> */}

                            {/* <p className='para text-center'>or</p> */}
                            <div className='d-flex justify-content-center align-items-center pt-3'>
                                <Button type="submit" variant='outline-dark' className='btnsubmit md:w-64'>
                                    Submit
                                </Button>

                            </div>


                        </Form>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex d-sm-none justify-content-center align-items-center py-5' style={{ backgroundColor: "#3b7fbf" }}>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <div className='contact-title2 text-light' >
                        <p>Let’s build what
                            you dreamt of,
                            Together!
                            Drop us a call!</p>
                    </div>
                </Col>
                <Col xs={12} >
                    <div className='justify-content-center align-items-center'>
                        <Form className='Form p-4'
                        >
                            <div className='d-flex flex-col justify-center items-center'>
                                <h4 className='hed3 ' style={{ color: "#3b7fbf" }}>Request a Quote</h4>
                                <p className='para' style={{ color: "#3b7fbf" }}>Book a free session with Razobyte</p>
                            </div>
                            <FormGroup>
                                <FormControl
                                    type='text'
                                    placeholder=' Your Name*'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <FormControl
                                    type='email'
                                    placeholder=' Your Email*'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <FormControl
                                    type='number'
                                    placeholder='Your Phone Number*'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <FormControl
                                    type='text'
                                    placeholder='Company Name/Website (If Any)*'
                                    name='companyName'
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <div className="dropdown-container">
                                    <FormControl
                                        as='select'
                                        name='plan'
                                        value={formData.plan}
                                        onChange={handleChange}
                                        required
                                        className="form-select-with-icon"
                                    >
                                        <option value=''>Select Services</option>
                                        <option value='Basic'>Website Design & Development</option>
                                        <option value='Premium'>Digital Marketing (SEO, SMO & SEM)</option>
                                        <option value='Enterprise'>Mobile App Development (Android & IOS)</option>
                                        <option value='Others'>Others</option>
                                    </FormControl>
                                    <i className="dropdown-icon">&#x25BC;</i>
                                </div>

                                {formData.plan === 'Others' && (
                                    <FormGroup className='pt-3'>
                                        <FormControl
                                            type='text'
                                            name='customService'
                                            placeholder='Please specify your service'
                                            value={formData.customService}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormGroup>
                                )}
                            </FormGroup>
                            <FormGroup className='pt-3'>
                                <FormControl
                                    as='textarea'
                                    placeholder='Tell Us About Your Project/Message'
                                    name='projectMessage'
                                    value={formData.projectMessage}
                                    onChange={handleChange}
                                    rows={2}
                                    required
                                />
                            </FormGroup>
                            {/* <FormGroup controlId='formBasicCheckbox' className="d-flex  pt-3">
                            <FormCheck type="checkbox" label="Remember Me" className='form-check-main-page' />
                        </FormGroup> */}

                            {/* <p className='para text-center'>or</p> */}
                            <div className='d-flex justify-content-center align-items-center pt-3'>
                                <Button type="submit" variant='outline-dark' className='btnsubmit md:w-64'>
                                    Submit
                                </Button>

                            </div>


                        </Form>
                    </div>
                </Col>
            </Row>


        </>
    )
}