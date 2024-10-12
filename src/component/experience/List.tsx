import React from 'react';
import MS from '../../index';
import __t from '../../translation';

type ListProps = {
    trKeys: string[];
} & MS.ComponentParameter;

export default function List({language, trKeys}: ListProps) {
    return (
        <ul className="service-list">
            {trKeys.map((trKey) => (<li key={trKey}><i className="ph ph-caret-double-right"></i> {__t(language, trKey)}</li>))}
        </ul>
    );
}