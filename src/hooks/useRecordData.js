import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import moment from 'moment'

function useRecordData(recordData, padding) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Line Chart',
            },
        },
        scales: {
            y: {
                ticks: {
                    display: false,
                }
            },
            x: {
                ticks: {
                    color: "white",
                    font: {
                        size: 14
                    },
                    stepSize: 1,
                    beginAtZero: true
                }
                , grid: {
                    color: '#777777',
                }
            }
        },
        maintainAspectRatio: false,
        layout: {
            padding: padding
        }

    };
    const labels = recordData.labels.map(label => moment(label).local().format("MMM"));

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: recordData.data[1],
                borderColor: '#8FE9D0',

            },
            {
                label: 'Dataset 2',
                data: recordData.data[0],
                borderColor: '#FFCC21',
                backgroundColor: '#FFCC21',
            },
        ],
    };

    return {
        options,
        data
    }
}

export default useRecordData