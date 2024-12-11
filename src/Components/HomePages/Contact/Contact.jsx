import { Row, Col, Form, FormGroup, FormControl, FormLabel, FormCheck, Button } from 'react-bootstrap'
import prtnr1 from '../../../../public/Image/prtn1 (4).png';
import prtnr2 from '../../../../public/Image/prtn1 (3).png';
import prtnr3 from '../../../../public/Image/prtn1 (2).png';
import prtnr4 from '../../../../public/Image/prtn1 (1).png';
import wp from '../../../../public/Image/whatsap.png';
import call from '../../../../public/Image/msg1 (2).png'
import { useRef, useState } from 'react'
export default function Contact() {
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

    const handleButtonClick = () => {
        setShow(true);
    };

    return (
        <Row style={{ backgroundColor: "#FFFF" }}
            className='px-0 justify-content-center  align-items-center gap-5 py-5'
        >

            <div>
                <h2 className=' hed2 text-center'>Let's Talk To Our Experts</h2>
                <p className='subheading-sections'>Take the first step towards success</p>
            </div>
            <Col md={5} >
                <div className='justify-content-center align-items-center'>

                    <Form className='Form p-4'
                    >
                        <div className='d-flex flex-col justify-center items-center'>
                            <h4 className='hed3 ' style={{ color: "#3b7fbf" }}>Request a Quote</h4>
                            <p className='para' style={{ color: "#3b7fbf" }}>Tell Us About Your Project!</p>
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
                        <div className='flex justify-center align-items-center cursor-pointer gap-3 pt-3'>

                            <div className="flex items-center justify-center">
                                <a href="https://api.whatsapp.com/send?phone=918448158188" target="_blank" rel="noopener noreferrer" className='text-decoration-none'>
                                    <div className="flex items-center justify-center p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
                                        <img src={wp} alt="WhatsApp" className="img-fluid w-6 mr-2" />
                                        <h5 className="m-0">Chat Now</h5>
                                    </div>
                                </a>
                            </div>

                            {/* <a href="sms:+918448158188">
                                <img src={msg} alt="" className='img-fluid w-10' />
                            </a> */}
                            <a href="tel:+918448158188">
                                <img src={call} alt="" className='img-fluid w-10' />
                            </a>

                        </div>
                        <div className='d-flex justify-content-center align-items-center pt-3'>
                        <Button type="submit" variant='outline-dark' className='btnsubmit md:w-64'>
    Submit
</Button>

                                </div>


                    </Form>
                </div>
            </Col>
            <Col md={5} className='d-md-flex'
            >
                <div className='d-flex  flex-column  justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src="/Image/163mbj 1.png" alt="" className='img-fluid' />
                    </div>
                    <div style={{
                        backgroundImage: "url('Image/Rectangle 211 (1).png')",
                        backgroundRepeat: "no-repeat", backgroundSize: "155px 105px", backgroundPosition: "center"
                    }}
                        className='pt-5'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={prtnr1} alt="" className='img-fluid w-50' />
                            <img src={prtnr4} alt="" className='img-fluid w-50' />
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={prtnr3} alt="" className='img-fluid w-50' />
                            <img src={prtnr2} alt="" className='img-fluid w-50' />
                        </div>
                    </div>

                </div>

            </Col>
            <Col md={5} className='d-none '>
                <div className='d-flex  flex-column  justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src="/Image/163mbj 1.png" alt="" className='img-fluid' />
                    </div>
                    <div className='d-flex flex-sm-row contactpartnerimage pt-5'>
                        <div>
                            <img src={prtnr4} alt="" className='img-fluid' />
                            <img src={prtnr1} alt="" className='img-fluid' />
                        </div>
                        <div>
                            <img src={prtnr3} alt="" className='img-fluid' />
                            <img src={prtnr2} alt="" className='img-fluid' />
                        </div>
                    </div>

                </div>
            </Col>
        </Row>
    );
}
