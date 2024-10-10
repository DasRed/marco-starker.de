import React from 'react';
import MS from '../../index';
import __t from '../../translation';

type CircleEntry = {
    trTitle: string;
    percent: number;
};

type CircleProps = MS.ComponentParameter & {
    entries: CircleEntry[];
};

export default function Circle({language, entries}: CircleProps) {
    return (
        <div className="row g-3">
            {entries.map(({trTitle, percent}: CircleEntry) => {
                return (
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex flex-column align-items-center mb-4">
                            <div className="chart-circle mb-4" data-level={percent}></div>
                            <div className="btn btn-outline-secondary px-5">{__t(language, trTitle)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
