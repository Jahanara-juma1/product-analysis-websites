import React from 'react';
import { BarChart } from 'recharts';

import MyLineChart from '../MyLineChart/MyLineChart';
import SpecialChart from '../SpecialChart/SpecialChart';

const DashBoard = () => {
    return (
        <div>
            <h1 className='text-2xl font-medium'>MONTH WISE SELL</h1>
            <MyLineChart></MyLineChart>
            <h2 className='text-2xl font-medium'>Investment VS Revenue</h2>
            <SpecialChart></SpecialChart>
        </div>
    );
};

export default DashBoard;