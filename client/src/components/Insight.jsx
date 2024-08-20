import React from 'react'
// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

export default function Insight() {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 5,
        maxColumns: 6,
      });
    return (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="info-cards">
                <div className="test" id="card">
                    <span className='card-title'>Test</span>
                    <span>Attempt test 5</span>
                    <span>total test 5</span>
                </div>
                <div className="score" id="card">
                    <span className='card-title'>Score</span>
                    <span>Secured Score 50</span>
                    <span>total Score 100</span>
                </div>
            </div>

            {/* <div className="information">
                <div style={{ width: '100%' }}>
                    <div style={{ height: 350, width: '100%' }}>
                        <DataGrid {...data} />
                    </div>
                </div>
            </div> */}
        </div>
    )
}
