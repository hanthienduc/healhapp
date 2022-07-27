import d01 from '../../assets/top-main/d01.jpg'
import { Line } from 'react-chartjs-2';

import './TopMain.css'
import recordData from '../../RecordData';
import useRecordData from '../../hooks/useRecordData';

function TopMain() {
    const { options, data } = useRecordData(recordData, {
        left: 50,
        right: 100,
        top: 20,
        bottom: 20
    })

    return (
        <main className="main">
            <div className="main-photo">
                <img src={d01} alt={'d01'} />
            </div>
            <div className="main-graph">
                <Line options={options} data={data} />;
            </div>
        </main>
    )
}

export default TopMain