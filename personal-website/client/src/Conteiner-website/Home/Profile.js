import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>

            <div className='profile-parent'>
                <div className='profile-detail'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.instagram.com/laucha_vallejos/'>
                                <i className='fa fa-instagram'></i>
                            </a>

                            <a href='https://github.com/LautaroVallejos'>
                                <i className='fa fa-youtube-square'></i>
                            </a>

                            <a href='https://www.youtube.com/channel/UCl1-lh8FTeZU9guUINLwgTA'>
                                <i className='fa fa-github-square'></i>
                            </a>
                    
                            {/*Colocar el LinkedIn posteriormente*/}
                                {/* <a href='https://www.youtube.com/channel/UCl1-lh8FTeZU9guUINLwgTA'>
                                    <i className='fab fa-github'></i>
                                </a> */}
                        </div>

                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hola, es un placer tenerte justo aqui!, Soy <span className='highlighted-text'>Lautaro</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical
                                loop={Infinity}
                                steps= {[
                                    "Entusiasta del Desarrollo y la Tecnologia 👨‍💻", 
                                    1000,
                                    "Python Backend Developer Jr. 🖥️", 
                                    1000,
                                ]} 
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Una persona que nunca para de aprender a aprender.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Contactame {" "}
                        </button>
                        <a href='CV Lautaro Vallejos.pdf' download='CV Lautaro Vallejos.pdf'>
                            <button className='btn highlighted-btn'>Obtener CV</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}