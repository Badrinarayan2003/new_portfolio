import { useState } from "react";
import Button from "./Button.js";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isVisible, setIsVisible] = useState(false)

    const handleChange = (evt) => {
        let newName = evt.target.name
        let newvalue = evt.target.value
        setFormData((pre) => {
            return { ...pre, [newName]: newvalue }
        })
    }

    const handleClick = (evt) => {
        evt.preventDefault();

        if (formData.name && formData.email && formData.message) {
            window.Email.send({
                SecureToken: "77a3e194-71dc-481a-990b-1f6eb7759b76",
                To: 'badrinarayan295@gmail.com',
                From: "badrinarayan295@gmail.com",
                Subject: "Client Enquiry",
                Body: `Name: ${formData.fullName} Email: ${formData.email} Subject: ${formData.message}`
            }).then(
                () => {
                    setIsVisible(true)
                }
            );

            setFormData({
                name: "",
                email: "",
                message: ""
            })

            setTimeout(() => {
                setIsVisible(false)
            }, 3000);
        } else {
            console.log("Please fill the detail");
        }
    }


    return (
        <div className="contact-section overflow-hidden">
            <div className="card contact-card" id="contact-container">
                <div className="row g-0">
                    <div className="col-md-5">
                        <h5 className="contact-heading fw-bold">Contact Me</h5>
                        <h2 className="fw-bold">Do you have any question?</h2>
                    </div>
                    <div className="col-md-7">
                        {isVisible ? (<p className="text-center fw-bold">Send Successfully</p>) : ""}
                        <div className="card-body contact-card-body" id="cotact-content-box" >
                            <div className="row g-2">
                                <div className="col-md">
                                    <div className="form-floating contact-input-box">
                                        <input type="text" className="form-control bg-transparent" id="floatingInputGrid" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required/>
                                        <label htmlFor="floatingInputGrid bg-transparent ">Full Name</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating contact-input-box">
                                        <input type="email" className="form-control bg-transparent" id="floatingInputGrid" placeholder="name@example.com" name="email" value={formData.email} onChange={handleChange} required/>
                                        <label htmlFor="floatingInputGrid bg-transparent ">Email</label>
                                    </div>
                                </div>
                                <div className="form-floating contact-input-box">
                                    <textarea className="form-control bg-transparent" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '150px' }} name="message" value={formData.message} onChange={handleChange} required></textarea>
                                    <label htmlFor="floatingTextarea2 bg-transparent">Message</label>
                                </div>
                            </div>
                            <div className="mt-3 d-grid" onClick={handleClick}><Button name="Send" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;