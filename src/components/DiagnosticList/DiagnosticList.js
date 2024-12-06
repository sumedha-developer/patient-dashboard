import React from 'react';
import './DiagnosticList.css';

const DiagnosticList = ({ diagnoses }) => {
    if (!diagnoses || diagnoses.length === 0) {
        return <div className='diagnostic-empty'>No diagnostic data available.</div>;
    }

    return (
        <div className='diagnostic-container'>
            <div className='diagnostic-title'>Diagnostic List</div>
            <div className='diagnostic-table'>
                <div className='table-header'>
                    <span className='table-header-name'>Problem/Diagnosis</span>
                    <span className='table-header-description'>Description</span>
                    <span className='table-header-status'>Status</span>
                </div>
                <div className='table-content'>
                    {diagnoses.map((diagnosis, index) => (
                        <div key={index} className='table-row'>
                            <span className='table-column-name'>{diagnosis.name}</span>
                            <span className='table-column-description'>{diagnosis.description}</span>
                            <span className='table-column-status'>{diagnosis.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiagnosticList;
