import React from 'react';
import './PatientDetails.css';
import birthIcon from './../../assets/BirthIcon.svg';
import femaleIcon from './../../assets/FemaleIcon.svg';
import phoneIcon from './../../assets/PhoneIcon.svg';
import insuranceIcon from './../../assets/InsuranceIcon.svg';

const PatientDetails = ({ patient }) => {
    if (!patient) return <div>Loading...</div>;

    return (
        <div className='patient-details-container'>
            <div className='patient-photo'>
                <img src={patient.profile_picture} alt={`${patient.name}`} />
            </div>
            <div className='patient-name-details'>{patient.name}</div>
            <div className='patient-info-details'>
                <div className='detail-item'>
                    <img src={birthIcon} alt='birth-icon' />
                    <div>
                        <div className='description-header'>Date of Birth</div>
                        <div className='description-detail'>{patient.date_of_birth}</div>
                    </div>
                </div>
                <div className='detail-item'>
                    <img src={femaleIcon} alt='female-icon' />
                    <div>
                        <div className='description-header'>Gender</div>
                        <div className='description-detail'>{patient.gender}</div>
                    </div>
                </div>
                <div className='detail-item'>
                    <img src={phoneIcon} alt='phone-icon' />
                    <div>
                        <div className='description-header'>Contact Info</div>
                        <div className='description-detail'>{patient.phone_number}</div>
                    </div>
                </div>
                <div className='detail-item'>
                    <img src={phoneIcon} alt='phone-icon' />
                    <div>
                        <div className='description-header'>Emergency Contacts</div>
                        <div className='description-detail'>{patient.emergency_contact}</div>
                    </div>
                </div>
                <div className='detail-item'>
                    <img src={insuranceIcon} alt='insurance-icon' />
                    <div>
                        <div className='description-header'>Insurance Provider</div>
                        <div className='description-detail'>{patient.insurance_type}</div>
                    </div>
                </div>
            </div>
            <button className='show-info-btn'>Show All Information</button>
        </div>
    );
};

export default PatientDetails;
