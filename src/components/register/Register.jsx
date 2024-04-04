import React, { useContext, useEffect, useState } from 'react'
import './register.scss'
import feature1 from '../../assets/feature-1.png';
import feature2 from '../../assets/feature-2.png';
import feature3 from '../../assets/feature-3.png';
import feature4 from '../../assets/feature-4.png';
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');

    useEffect(() => {
        const originalTitle = document.title; //lưu tên góc của trang vào biến này
        document.title = 'Register';           //sau đó biến title thành cái mình muốn

        return () => {
            document.title = originalTitle;   //rồi sau đó khi component unmount ta dùng clean up function, set title lại như cũ
        };
    }, []);

    //bắt sự kiện nếu biến email không có gì thì alert 
    const handleStart = () => {
        if (email.trim() === '') {
            alert('Please enter your email address.');
            return;
        }

        navigate('/');
    };

    return (
        <>
            <div className='register'>
                <div className='top'>
                    <div className='wrapper'>
                        <button className='loginButton'>Sign In</button>
                    </div>
                </div>
                <div className='container'>
                    <h1>Unlimited movies, Tv shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <div className='input'>
                        <input type="email" placeholder='email adress' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className='registerButton' onClick={handleStart}>Get Started</button>
                    </div>

                </div>
            </div>
            <div className="features" style={{ backgroundColor: 'black', color: 'white' }} >
                <div className="row">
                    <div className="text-col">
                        <h2>Enjoy on your TV</h2>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="img-col">
                        <img src={feature1} alt='' />
                    </div>
                </div>

                <div className="row">
                    <div className="img-col">
                        <img src={feature2} alt="" />
                    </div>
                    <div className="text-col">
                        <h2>Download your shows to watch offline</h2>
                        <p>Save your favourites easily and always have something to watch.</p>
                    </div>

                </div>

                <div className="row">
                    <div className="text-col">
                        <h2>Watch everywhere</h2>
                        <p>Stream Unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="img-col">
                        <img src={feature3} alt='' />
                    </div>

                    <div className="row">
                        <div className="img-col">
                            <img src={feature4} alt='' />
                        </div>
                        <div className="text-col">
                            <h2>Create profiles for childrens</h2>
                            <p>Send children on adventures with their favourite characters in a space made just for them-free
                                with your membership.</p>
                        </div>

                    </div>
                </div>

                <div className="faq">
                    <h2>Frequently Asked Questions</h2>
                    <ul className="accordion">
                        <li>
                            <input type="radio" name="accordion" id="first" />
                            <label htmlFor="first">What is Netflix</label>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed, quas perferendis
                                    laudantium id quis sequi dolorum esse ducimus aspernatur harum tempora provident in odio
                                    beatae porro debitis excepturi ullam.</p>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="accordion" id="second" />
                            <label htmlFor="second">How much does Netflix cost?</label>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed, quas perferendis
                                    laudantium id quis sequi dolorum esse ducimus aspernatur harum tempora provident in odio
                                    beatae porro debitis excepturi ullam.</p>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="accordion" id="third" />
                            <label htmlFor="third">Where can i watch?</label>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed, quas perferendis
                                    laudantium id quis sequi dolorum esse ducimus aspernatur harum tempora provident in odio
                                    beatae porro debitis excepturi ullam.</p>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="accordion" id="fourth" />
                            <label htmlFor="fourth">How do i cancel?</label>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed, quas perferendis
                                    laudantium id quis sequi dolorum esse ducimus aspernatur harum tempora provident in odio
                                    beatae porro debitis excepturi ullam.</p>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="accordion" id="fifth" />
                            <label htmlFor="fifth">What can I watch on Netflix</label>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed, quas perferendis
                                    laudantium id quis sequi dolorum esse ducimus aspernatur harum tempora provident in odio
                                    beatae porro debitis excepturi ullam.</p>
                            </div>
                        </li>

                        <li>
                            <input type="radio" name="accordion" id="sixth" />
                            <label htmlFor="sixth">Is Netflix good for kids</label>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed, quas perferendis
                                    laudantium id quis sequi dolorum esse ducimus aspernatur harum tempora provident in odio
                                    beatae porro debitis excepturi ullam.</p>
                            </div>
                        </li>
                    </ul>
                </div>



            </div>
        </>
    )
}
