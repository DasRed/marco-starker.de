import React from 'react';
import {useInView} from "react-intersection-observer";
import MS from '../../index';
import __t from '../../translation';
import Conditional from '../Conditional';
import ApexChart from './ApexChart';

type CircleEntry = {
    trTitle: string;
    percent: number;
};

type CircleProps = MS.ComponentParameter & {
    entries: CircleEntry[];
};

function generateChartOptions(percent: number) {
    return {
        chart:       {
            sparkline:  {
                enabled: false,
            },
            animations: {
                enabled:          true,
                easing:           'easeinout',
                speed:            2000,
                animateGradually: {
                    enabled: true,
                    delay:   150,
                },
                dynamicAnimation: {
                    enabled: true,
                    speed:   350,
                },
            },
        },
        legend:      {
            show: false,
        },
        stroke:      {
            lineCap: 'butt',
        },
        colors:      ["#000000"],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    value: {
                        show: false,
                    },
                    name:  {
                        offsetY:  15,
                        fontSize: '44px',
                    },
                },
                hollow:     {
                    size: '80%',
                },
            },
        },
        labels:      [percent + '%'],
        grid:        {
            padding: {
                top:    -16,
                bottom: -20,
            },
        },

    };
}

export default function Circle({language, entries}: CircleProps) {
    const {ref, inView} = useInView({
        threshold:   0,
        rootMargin:  '10px',
        triggerOnce: true
    });

    return (
        <div className="row g-3" ref={ref}>
            {entries.map(({trTitle, percent}: CircleEntry) => {
                return (
                    <div key={trTitle} className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex flex-column align-items-center mb-4">
                            <div className="chart-circle mb-4">
                                <Conditional when={inView}>
                                    <ApexChart type="radialBar" series={[percent]} width={250} height={250} options={generateChartOptions(percent)}></ApexChart>
                                </Conditional>
                            </div>
                            <div className="btn btn-outline-secondary px-5">{__t(language, trTitle)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
