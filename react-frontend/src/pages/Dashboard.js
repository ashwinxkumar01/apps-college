import React from 'react';
import '../css/Dashboard.css';

import Table from '../components/Table';
import Navigationbar from '../components/content/Navigationbar';
import NavBar from '../components/content/Navbar';

function Dashboard() {
    return (
        <div className="dashboard">
            <Navigationbar active="1"/>
            <NavBar />
            <div>
                <Table/>
            </div>
        </div>
    );
}

export default Dashboard;