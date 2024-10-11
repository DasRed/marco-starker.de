import MS from '../../index';
import __t from '../../translation';

type BackendProps = MS.ComponentParameter & {
    id: string;
    number: number;
    trTitle: string;
    trList: string[];
};

export default function Card({id, number, language, trTitle, trList}: BackendProps) {
//    <div className="swiper-slide overflow-visible p-3" data-content={id}>
    return (
            <div className="service-card">
                <div className="card-inner"></div>
                <div className="content">
                    <div className="number-circle">
                        <div className="waves-top-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h2>{String(number).padStart(2, '0')}</h2>
                        <div className="waves-bottom-sm">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <h4>{__t(language, trTitle)}</h4>
                    <ul className="service-list">
                        {trList.map((tr) => (<li key={tr}><i className="ph ph-caret-double-right"></i> {__t(language, tr)}</li>))}
                    </ul>
                </div>
            </div>
    );
}