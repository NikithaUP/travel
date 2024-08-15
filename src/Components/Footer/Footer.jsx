import React,{useEffect} from 'react'
import './footer.css'
import video from '../../Assets/video1.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" className="btn flex" type='submit'>
                            SEND <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className='icon'/>Travel.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim animi eveniet, ad ducimus est sapiente! Nulla, explicabo vero. Eligendi delectus perspiciatis cupiditate fugit, ab quia. Cupiditate enim repudiandae commodi.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <RiTwitterXFill className="icon"/>
                            <AiOutlineYoutube className="icon"/>
                            <FaInstagram className="icon" />
                            <FaTripadvisor className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Group one */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>
                        </div>
                        {/* group two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                RentCars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                MakeMyTrip
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                TripAdvisor
                            </li>
                        </div>

                        
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE</small>
                        <small>COPYRIGHTS RESERVED -TRAVEL@2022</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer