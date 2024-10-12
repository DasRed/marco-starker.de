'use client';
import { useEffect, useState } from "react";

// see https://stackoverflow.com/a/75570201

export default function ApexChart(props: any) {
    const [Chart, setChart] = useState<any>();
    const hasType = typeof props?.type !== 'undefined';

    useEffect(() => {
        import('react-apexcharts').then((mod) => {
            setChart(() => mod.default);
        });
    }, []);

    return hasType && Chart && <Chart {...props} />;
}