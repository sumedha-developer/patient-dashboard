import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import Sidebar from './components/Sidebar/Sidebar';
import PatientDetails from './components/PatientDetails/PatientDetails';
import DiagnosisHistory from './components/DiagnosisHistory/DiagnosisHistory';
import DiagnosticList from './components/DiagnosticList/DiagnosticList';
import LabResults from './components/LabResults/LabResults';
import './index.css';

const App = () => {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const username = 'coalition';
    const password = 'skills-test';
    const encodedData = 'Basic ' + window.btoa(`${username}:${password}`);

    const fetchPatients = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': encodedData,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPatients(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching patients:', error);
        setIsLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const patient = patients[3];
  const diagnoses = patients[3]?.diagnostic_list;
  const labResults = patients[3]?.lab_results;
  const history = patients[3]?.diagnosis_history?.slice(0, 6).reverse();

  return (
    <div>
      <NavBar />
      <div>
        <Sidebar patients={patients} isLoading={isLoading} />
        <div>
          <DiagnosisHistory history={history} />
          <DiagnosticList diagnoses={diagnoses} />
        </div>
        <div>
          <PatientDetails patient={patient} />
          <LabResults results={labResults} />
        </div>
      </div>
    </div>
  );
};

export default App;