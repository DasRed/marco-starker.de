import React from 'react';
import MS from '../index';
import __t from '../translation';

export default function FunFact({language}: MS.ComponentParameter) {
    return (
        <>
            <span className="section-title-overlay-text">{__t(language, 'funFact.overlay')}</span>
            <div className="section-title text-capitalize">
                <h4>{__t(language, 'funFact.title1')}</h4>
                <h2>{__t(language, 'funFact.title2')}</h2>
            </div>
            <div className="row pb-60">
                <div className="col-sm-6 col-md-4 col-xl-3">
                    <div className="fun-fact">
                        <div className="numbers">
                            <span className="number-outline-one">88</span>
                            <span className="number-outline-two">88</span>
                            <span className="number-main">88</span>
                        </div>
                        <p>{__t(language, 'funFact.finishedProjects')}</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 offset-md-1 col-xl-3">
                    <div className="fun-fact">
                        <div className="numbers">
                            <span className="number-outline-one">75</span>
                            <span className="number-outline-two">75</span>
                            <span className="number-main">75</span>
                        </div>
                        <p>{__t(language, 'funFact.happyCustomers')}</p>
                    </div>
                </div>
            </div>
            <div className="row pb-60">
                <div className="col-sm-6 col-md-4 offset-md-2 offset-xl-5 col-xl-3">
                    <div className="fun-fact">
                        <div className="numbers">
                            <span className="number-outline-one">35k+</span>
                            <span className="number-outline-two">35k+</span>
                            <span className="number-main">35k+</span>
                        </div>
                        <p>{__t(language, 'funFact.workingHours')}</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 offset-md-1 col-xl-3">
                    <div className="fun-fact">
                        <div className="numbers">
                            <span className="number-outline-one">17k+</span>
                            <span className="number-outline-two">17k+</span>
                            <span className="number-main">17k+</span>
                        </div>
                        <p>{__t(language, 'funFact.coffeeCups')}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
