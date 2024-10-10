import React from 'react';
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
    return (
        <div className="d-flex flex-column gap-3">
            {entries.map(({trTitle, percent}: ProgressEntry) => {
                return (
                    <div className="skill">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>{__t(language, trTitle)}</span>
                            <span>{percent}%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar ninety" data-width={percent + '%'}></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
