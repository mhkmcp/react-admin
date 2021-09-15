import React from 'react'
import Chart from '../../components/chart/Chart';
import Feature from '../../components/feature/Feature';

import "./home.css";

import { userData } from "../../dummyData";

function Home() {
    return (
        <div className="home">
            <Feature />
            <Chart data={userData} title="User Analytics" dataKey="Active User" grid="true"/>
        </div>
    )
}

export default Home
