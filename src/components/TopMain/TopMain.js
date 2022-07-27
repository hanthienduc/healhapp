import d01 from '../../assets/top-main/d01.jpg'
import { Line } from 'react-chartjs-2';

import './TopMain.css'
import recordData from '../../RecordData';
import useRecordData from '../../hooks/useRecordData';
import photoData from "../../photoData"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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
                <div className='progress'>
                    <span>{new Date(photoData[0].date).getMonth() + 1}/{new Date(photoData[0].date).getDate()}</span>
                    <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbar
                            strokeWidth={1}
                            value={photoData[0].achieverate}
                            text={`${photoData[0].achieverate}%`}
                            styles={buildStyles({
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 255, 255, ${photoData[0].achieverate / 100})`,
                                textColor: '#fff',
                                trailColor: 'none',
                            })}
                        />
                    </div>
                </div>

            </div>
            <div className="main-graph">
                <Line options={options} data={data} />;
            </div>
        </main>
    )
}

export default TopMain