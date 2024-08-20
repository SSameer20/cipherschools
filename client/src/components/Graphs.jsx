import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

export default function () {
    return (
        <div className='graphs' style={{ width: "100%", height: "100%", display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={500}
                height={300}
            />
        </div>
    )
}
