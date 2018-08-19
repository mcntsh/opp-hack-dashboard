import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Label } from 'recharts';


const data = [
    {name: 'Jan', accountCount: 20},
    {name: 'Feb', accountCount: 36},
    {name: 'Mar', accountCount: 100},
    {name: 'Apr', accountCount: 178},
    {name: 'May', accountCount: 189},
    {name: 'Jun', accountCount: 239},
    {name: 'Jul', accountCount: 349},
    {name: 'Aug', accountCount: 349},
    {name: 'Sep', accountCount: 449},
    {name: 'Oct', accountCount: 500},
    {name: 'Nov', accountCount: 666},
    {name: 'Dec', accountCount: 778},

];

class SimpleLineChart extends Component {
    render () {
        return (
            <LineChart width={600} height={300} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 25}}>
                <XAxis dataKey="name">
                    <Label value="Youth accounts each month" offset={0} position="bottom" />
                </XAxis>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>


                <Line type="monotone" dataKey="accountCount" stroke="#82ca9d" />
            </LineChart>
        );
    }
}



const Dashboard = () => {
    return (
        <div id="container">
            <SimpleLineChart/>
        </div>
    );
};

export default Dashboard;