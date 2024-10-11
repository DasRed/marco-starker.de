import React from 'react';
import {useInView} from 'react-intersection-observer';
import MS from '../../index';
import __t from '../../translation';

type ProgressEntry = {
    trTitle: string;
    percent: number;
};

type ProgressProps = MS.ComponentParameter & {
    entries: ProgressEntry[];
};

export default function Progress({language, entries}: ProgressProps) {
    const {ref, inView} = useInView({
        threshold:   0,
        triggerOnce: true
    });

    return (
        <div className="d-flex flex-column gap-3" ref={ref}>
            {entries.map(({trTitle, percent}: ProgressEntry) => {
                return (
                    <div key={trTitle} className="skill">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>{__t(language, trTitle)}</span>
                            <span>{percent}%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar ninety" style={{width: inView ? percent + '%' : 0}}></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
