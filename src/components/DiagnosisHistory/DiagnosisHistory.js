import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import './DiagnosisHistory.css';
import expand from './../../assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg';
import up from './../../assets/ArrowUp.svg';
import down from './../../assets/ArrowDown.svg';
import respiratory from './../../assets/respiratory rate.svg';
import temperature from './../../assets/temperature.svg';
import HeartBPM from './../../assets/HeartBPM.svg';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const DiagnosisHistory = ({ history }) => {
    if (!history || history.length === 0) {
        return <div>Loading diagnosis history...</div>;
    }

    const labels = history.map(item => `${item.month.slice(0, 3)}, ${item.year}`);
    const systolicData = history.map(item => item.blood_pressure.systolic.value);
    const diastolicData = history.map(item => item.blood_pressure.diastolic.value);

    const data = {
        labels,
        datasets: [
            {
                label: 'Systolic',
                data: systolicData,
                borderColor: '#E66FD2',
                pointBackgroundColor: '#E66FD2',
                pointBorderColor: '#FFFFFF',
                tension: 0.4,
                pointRadius: 7,
                pointHoverRadius: 8,
            },
            {
                label: 'Diastolic',
                data: diastolicData,
                borderColor: '#7E6CAB',
                pointBackgroundColor: '#8C6FE6',
                pointBorderColor: '#FFFFFF',
                tension: 0.4,
                pointRadius: 7,
                pointHoverRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
                labels: {
                    color: '#333',
                    font: {
                        size: 12,
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#072635',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                min: 60,
                max: 180,
                ticks: {
                    stepSize: 20,
                    color: '#072635',
                },
                grid: {
                    color: '#CBC8D4',
                },
            },
        },
    };

    const latest = history[history.length - 1];

    return (
        <div className='diagnosis-history'>
            <div className='title'>Diagnosis History</div>
            <div className='chart-container'>
                <div className='chart-area'>
                    <div className='chart-header'>
                        <div className='chart-title'>Blood Pressure</div>
                        <button className='expand-btn'>
                            <div className='text-expand'>Last 6 months</div>
                            <img src={expand} alt='Expand' className='icon-expand' />
                        </button>
                    </div>
                    <div className='chart'>
                        <Line data={data} options={options} />
                    </div>
                </div>
                <div className='stats-area'>
                    <div>
                        <div className='stat-label'><div className='systolic' />Systolic</div>
                        <div className='stat-value'>{latest.blood_pressure.systolic.value}</div>
                        <div className='stat-detail'>
                            <img src={up} alt='Up' className='icon-up' />
                            {latest.blood_pressure.systolic.levels}
                        </div>
                    </div>
                    <hr style={{ color: '#CBC8D4', margin: '16px 0' }} />
                    <div>
                        <div className='stat-label'><div className='diastolic' />Diastolic</div>
                        <div className='stat-value'>{latest.blood_pressure.diastolic.value}</div>
                        <div className='stat-detail'>
                            <img src={down} alt='Down' className='icon-down' />
                            {latest.blood_pressure.diastolic.levels}
                        </div>
                    </div>
                </div>
            </div>
            <div className='health-metrics'>
                <div className='metric-card respiratory'>
                    <img src={respiratory} alt='Respiratory Rate' className='icon-metrics' />
                    <div className='metric-title'>Respiratory Rate</div>
                    <div className='metric-data'>{latest.respiratory_rate.value} bpm</div>
                    <div className='metric-status'>{latest.respiratory_rate.levels}</div>
                </div>
                <div className='metric-card temperature'>
                    <img src={temperature} alt='Temperature' className='icon-metrics' />
                    <div className='metric-title'>Temperature</div>
                    <div className='metric-data'>{latest.temperature.value}°F</div>
                    <div className='metric-status'>{latest.temperature.levels}</div>
                </div>
                <div className='metric-card heart'>
                    <img src={HeartBPM} alt='Heart Rate' className='icon-metrics' />
                    <div className='metric-title'>Heart Rate</div>
                    <div className='metric-data'>{latest.heart_rate.value} bpm</div>
                    <div className='metric-status'>
                        <img src={down} alt='Down' className='icon-down' />
                        {latest.heart_rate.levels}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiagnosisHistory;