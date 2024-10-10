import React from 'react';
import MS from '../../index';
import __t from '../../translation';

type TextProps = {
    trKey: string;
} & MS.ComponentParameter;

export default function Text({language, trKey}: TextProps) {
    return <p>{__t(language, trKey)}</p>;
}