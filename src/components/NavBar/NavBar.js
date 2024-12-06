import React from 'react';
import './NavBar.css';
import logo from './../../assets/TestLogo.svg';
import overview from './../../assets/home_FILL0_wght300_GRAD0_opsz24.svg';
import patients from './../../assets/group_FILL0_wght300_GRAD0_opsz24.svg';
import schedule from './../../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import message from './../../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import transactions from './../../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import profile from './../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png';
import settings from './../../assets/settings_FILL0_wght300_GRAD0_opsz24.svg';
import more from './../../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='Tech.Care Logo' className='logo-image' />
            </div>
            <div className='navbar-links'>
                <div className='nav-link'>
                    <img src={overview} alt='Overview' className='nav-icon' />
                    <span>Overview</span>
                </div>
                <div className='nav-link active'>
                    <img src={patients} alt='Patients' className='nav-icon' />
                    <span>Patients</span>
                </div>
                <div className='nav-link'>
                    <img src={schedule} alt='Schedule' className='nav-icon' />
                    <span>Schedule</span>
                </div>
                <div className='nav-link'>
                    <img src={message} alt='Message' className='nav-icon' />
                    <span>Message</span>
                </div>
                <div className='nav-link'>
                    <img src={transactions} alt='Transactions' className='nav-icon' />
                    <span>Transactions</span>
                </div>
            </div>
            <div className='navbar-profile'>
                <img src={profile} alt='Profile' className='profile-image' />
                <div className='profile-info'>
                    <span className='profile-name'>Dr. Jose Simmons</span>
                    <span className='profile-role'>General Practitioner</span>
                </div>
                <div className='verticle-line' />
                <img src={settings} alt='Settings' className='settings-icon' />
                <img src={more} alt='More' className='verticle-more-icon' />
            </div>
        </div>
    );
};

export default NavBar;
