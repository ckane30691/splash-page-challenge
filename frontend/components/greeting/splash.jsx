import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session/session_form';

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-body">
                <div className="splash-header">
                  <img className="piazza-logo"
                      alt="piazza logo"
                      src="https://s3.amazonaws.com/piazza-challenge/logo.png"/>
                </div>

                <div className="hero-img-container">
                  <img className="header-graphic"
                    alt="header-graphic"
                    src="https://s3.amazonaws.com/piazza-challenge/header_graphic.png" />
            			<img className="hero-img"
                    alt="hero image"
                    src="https://s3.amazonaws.com/piazza-challenge/hero_image_cropped.jpg"/>

                  <SessionForm />

                  <div className="hero-blurb">Companies Using Piazza Careers:</div>
            		</div>


                <div className="logos-container">
                  <div className="logo-card">
                    <img className="logos"
                      alt="logos"
                      src="https://s3.amazonaws.com/piazza-challenge/logos.png" />
                  </div>
                </div>

                <ul className="about-panel">
                  <li className='about-container'>
                    <h1 className='about-title'>Brand Awareness</h1>
                    <img className="about-logo"
                      alt="brand awareness logo"
                      src="https://s3.amazonaws.com/piazza-challenge/icon1.png" />

                    <p className='about-tagline'>
                      Enable students to relate to your brand and your mission.
                      Getting students familiar with your barnd early on helps
                      with forming positive brand associations.
                    </p>
                  </li>

                  <li className='about-container'>
                    <h1 className='about-title'>Relatability</h1>
                    <img className="about-logo"
                      alt="relatability logo"
                      src="https://s3.amazonaws.com/piazza-challenge/icon2.png" />

                    <p className='about-tagline'>
                      The best asset your company has in being able to relate
                      to students is your current employees career experiences.
                      We help you leverage these in a powerful way.
                    </p>
                  </li>

                  <li className='about-container'>
                    <h1 className='about-title'>Event RSVP</h1>
                    <img className="about-logo"
                      alt="event rsvp logo"
                      src="https://s3.amazonaws.com/piazza-challenge/icon3.png" />

                    <p className='about-tagline'>
                      Are students aware of your on campus events? We target your
                      messaging by school and class type to ensure the students
                      you care about are in the know.
                    </p>
                  </li>

                  <li className='about-container'>
                    <h1 className='about-title'>Interview Request</h1>
                    <img className="about-logo"
                      alt="interview request logo"
                      src="https://s3.amazonaws.com/piazza-challenge/icon4.png" />

                    <p className='about-tagline'>
                      We give students the opportunity to connect directly with you
                      to request more information, to ask questions, and ultimately
                      apply for a job. We keep things organized and simple.
                    </p>
                  </li>
                </ul>

                <ul className="in-depth-container">
                  <li className="in-depth-card">
                    <img className="in-depth-logo"
                      alt="brand awareness logo"
                      src="https://s3.amazonaws.com/piazza-challenge/iconbig1.png" />

                    <div className="title-desc">
                      <h1 className='in-depth-title'>Brand Awareness</h1>
                      <p className="in-depth-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>

                  <li className="in-depth-card">
                    <img className="in-depth-logo"
                      alt="relatability logo"
                      src="https://s3.amazonaws.com/piazza-challenge/iconbig2.png" />

                    <div className="title-desc">
                      <h1 className='in-depth-title'>Relatability</h1>
                      <p className="in-depth-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                  </div>
                  </li>

                  <li className="in-depth-card">
                    <img className="in-depth-logo"
                      alt="event rsvp logo"
                      src="https://s3.amazonaws.com/piazza-challenge/iconbig3.png" />

                    <div className="title-desc">
                      <h1 className='in-depth-title'>Event RSVP</h1>
                      <p className="in-depth-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className="in-depth-card">
                    <img className="in-depth-logo"
                      alt="interview request logo"
                      src="https://s3.amazonaws.com/piazza-challenge/iconbig4.png" />

                    <div className="title-desc">
                      <h1 className='in-depth-title'>Interview Request</h1>
                      <p className="in-depth-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </li>
                </ul>
            </div>
        );
    }
}

export default Splash;
