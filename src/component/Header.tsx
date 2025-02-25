'use client';

import Language from './Language';
import logo from './logo.png';
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react';
import MS from '../index';
import __t from '../translation';

type HeaderProps = {
    open: boolean;
    setOpen: (state: boolean) => void;
} & MS.ComponentParameter;

export default function Header({language, open, setOpen}: HeaderProps) {
    const [shrink, setShrink] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const listener = () => {
            const scrollY = window.scrollY;
            if (scrollY < 80) {
                setShrink(false);
            }
            else if (scrollY - scroll > 0) {
                setShrink(true);
            }
            else if (scrollY - scroll <= 0) {
                setShrink(false);
            }
            setScroll(scrollY);
        };

        document.addEventListener('scroll', listener);
        return () => document.removeEventListener('scroll', listener);
    });

    return (
        <header className={`header ${shrink ? 'shrink' : ''}`}>
            <div className="container-fluid d-flex align-items-center justify-content-end">
                <Link href="." className="logo me-auto">
                    <Image src={logo} alt={__t(language, 'logo')}/>
                    <span>{__t(language, 'name.full')}</span>
                </Link>

                <div className="language mt-2 me-2 d-none d-sm-block">
                    <Language language={language} />
                </div>
                <button className="bg-transparent border-0 d-xl-none me-2" onClick={() => setOpen(!open)}>
                    <div className={`nav-icon ${open ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </header>
    );
}