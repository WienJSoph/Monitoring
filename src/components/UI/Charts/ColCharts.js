import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { data } from '../../../mockData/Charts/TynyBar'


const ColCharts = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </ResponsiveContainer>
    )
};

export default ColCharts