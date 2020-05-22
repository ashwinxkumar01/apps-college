import React from 'react';
import '../css/Dashboard.css';

import Table from '../components/Table';

function Dashboard() {
    return (
        <div className="dashboard">

            <span>
                <h1>My Dashboard</h1>
                <Table />
            </span>  
        </div>
    );
}

export default Dashboard;