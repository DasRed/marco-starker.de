import React from 'react';

type ConditionalProps = {
    when: boolean;
    children: React.ReactNode;
};

export default function Conditional({when, children}: ConditionalProps) {
    if (when === false) {
        return <></>;
    }

    return <>{children}</>
}