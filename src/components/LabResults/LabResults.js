import React from 'react';
import './LabResults.css';
import download from './../../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg';

const LabResults = ({ results }) => {
    if (!results || results.length === 0) {
        return <div className='lab-results-empty'>No lab results available.</div>;
    }

    return (
        <div className='lab-results-container'>
            <div className='lab-results-title'>Lab Results</div>
            <ul className='lab-results-list'>
                {results.map((result, index) => (
                    <li key={index} className='lab-result-item'>
                        <div className='lab-result-name'>{result}</div>
                        <img src={download} alt='Download' className='icon-download' />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LabResults;
