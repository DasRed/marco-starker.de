import logo from '/public/logo.png';
import Image from 'next/image'
import Link from 'next/link'
import MS from '../index';
import __t from '../translation';

export default function Header({language}: MS.ComponentParameter) {
    return (
        <header className="header">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <Link href="." className="logo">
                    <Image src={logo} alt={__t(language, 'logo')}/>
                    <span>{__t(language, 'name.full')}</span>
                </Link>

                <button className="bg-transparent border-0 d-xl-none">
                    <div className="nav-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </header>
    );
}