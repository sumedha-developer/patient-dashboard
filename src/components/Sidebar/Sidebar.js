import React from 'react';
import './Sidebar.css';
import search from './../../assets/search_FILL0_wght300_GRAD0_opsz24.svg';
import more from './../../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg';

const Sidebar = ({ patients, isLoading }) => {
    if (isLoading) {
        return (
            <div className='sidebar'>
                <div className='sidebar-header'>
                    Patients
                </div>
                <div className='loading'>Loading patients...</div>
            </div>
        );
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <div className='sidebar-header-text'>
                    Patients
                </div>
                <img src={search} alt='Search' className='icon-search' />
            </div>
            <div className='patient-list'>
                {patients.map((patient) => (
                    <div
                        key={patient.name}
                        className={`patient-item ${patient.name === 'Jessica Taylor' ? 'active' : ''}`}
                    >
                        <img
                            className='patient-img'
                            src={patient.profile_picture || 'https://fedskillstest.ct.digital/4.png'}
                            alt={patient.name}
                        />
                        <div className='patient-info'>
                            <div className='patient-name'>{patient.name}</div>
                            <div className='patient-details'>
                                {patient.gender}, {patient.age}
                            </div>
                        </div>
                        <button className='more-btn-sidebar'>
                            <img src={more} alt='More' className='icon-more-sidebar' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;