import React from 'react';
import MS from '../index';
import __t from '../translation';

type SkillProps = MS.ComponentParameter & {
    children: React.ReactNode;
    id: string;
    trTitle: string;
    trSubTitle: string;
    number: number;
};

export default function Skill({language, children, id, number, trTitle, trSubTitle}: SkillProps) {
    return (
        <>
            <span className="section-title-overlay-text">{__t(language, 'skill.overlay')}</span>
            <div className={`row pb-120 ${id}-row`}>
                <div className={`col-lg-4 ${number === 2 ? 'col-md-5 offset-sm-1 offset-lg-2' : ''}`}>
                    <div className="section-title-sm">
                        <div className="top">
                            <h2>{__t(language, trTitle)}</h2>
                            <span>{__t(language, trSubTitle)}</span>
                        </div>
                        <span className="serial">{String(number).padStart(2, '0')}.-</span>
                    </div>
                </div>
                <div className={number === 2 ? 'col-md-6' : 'col-12 col-lg-8'}>
                    {children}
                </div>
            </div>
        </>
    );
}
