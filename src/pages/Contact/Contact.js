import * as Yup from 'yup'
import React from 'react'
import './Contact.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { useFormik } from 'formik'

import SearchFilterAll from '../../component/SearchFilter/SearchFilterAll'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const validation = Yup.object({
    first_name: Yup.string().min(3).max(25).required("First name is required"),
    last_name: Yup.string().min(2).max(25).required("last name is required"),
    email: Yup.string().email().required("Email is required"),
    massage: Yup.string().min(10).max(500).required("massage is required")
})
const Contact = () => {


    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        massage: '',
    }

    // Formik form handling 
    const { values, handleChange, handleSubmit, touched, handleBlur, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: (event) => {
            console.log(event);
        }
    })
    const { first_name, last_name, email, massage } = values
    return (
        <>
        <SearchFilterAll />
        <div className="Contact">
            <div className="contact-home">
                <div className="contact-heading">
                    Get support with Roobi
                </div>
                <div className="home-ring">
                    <div className="ring-one">
                        <div className="lring1"></div>
                        <div className="lring2"></div>
                    </div>
                    <div className="home-cart">
                        <div className="home-heading">
                            Need help? We're online <br />  now so drop us a message
                        </div>
                        <button type='buttton' className='cont-btn'>OPEN CHAT</button>
                    </div>
                    <div className="ring-two">
                        <div className="rring1"></div>
                        <div className="rring2"></div>
                        <div className="rring3"></div>
                        <div className="rring4"></div>
                    </div>
                </div>
            </div>
            <div className="ContactPage-container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-lg-6 col-xl-5 contact-info">
                        <div className="info">
                            Got an enquiry you'd like 
                            to speak to us about?
                            <span>
                                Pop your details in the form and a member of our
                                team will get back to you shortly.
                            </span>
                        </div>
                        <div className="social">
                            <div className="social-head">
                                Let's be social
                            </div>
                            <div className="social-link">
                                <a href='/' className="link">
                                    <AiOutlineInstagram color='#525045' size={ 20 } />
                                    <span>Instagram</span>
                                </a>
                                <br />
                                <a href='/' className="link">
                                    <FaFacebook color='#525045' size={ 20 } />
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col  contact-form">
                        <form onSubmit={ handleSubmit }>
                            <div className="row">
                                <div className="col  ">
                                    <input type="text"
                                        className="input-control"
                                        placeholder="First name"
                                        name='first_name'
                                        value={ first_name }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                    />
                                    <div className="error">{ errors.first_name && touched.first_name ? errors.first_name : null }</div>
                                </div>
                                <div className="col">
                                    <input type="text" id='last_name'
                                        className="input-control"
                                        placeholder="Last name"
                                        name='last_name'
                                        value={ last_name }
                                        onChange={ handleChange }
                                        onBlur={ handleBlur }
                                    />
                                    <div className="error">{ errors.last_name && touched.last_name ? errors.last_name : null } </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <input type="email"
                                    className="input-control"
                                    placeholder="email"
                                    name='email'
                                    value={ email }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                />
                                <div className="error">{ errors.email && touched.email ? errors.email : null } </div>
                            </div>
                            <div className="input-control mt-4">
                                <textarea name="massage" id="msg"
                                    className='msg'
                                    maxLength={ 500 }
                                    placeholder='Massages'
                                    value={ massage }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                </textarea>
                                <div className="rem-text px-3">{ massage.length }/500</div>
                            </div>
                            <div className="error">{ errors.massage && touched.massage ? errors.massage : null } </div>
                            <button className='mt-4 send-btn' type='submit'>send away</button>
                        </form>
                    </div>
                </div>
                <div className="socil">
                </div>
            </div>
        </div>

        </>
    )
}

export default Contact