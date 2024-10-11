import logo from '/public/logo.png';
import Image from 'next/image';
import config from '../config';
import MS from '../index';
import __t from '../translation';
import Link from 'next/link'

const LINKS = ['#hero', '#about', '#services', '#skills', '#fun_facts', '#experience', '#contact'];

type NavigationProps = {
    open: boolean;
    setOpen: Function
} & MS.ComponentParameter;

export default function Navigation({language, open, setOpen}: NavigationProps) {
    return (
        <nav id="navigation" className={`navigation ${open ? 'opened' : ''}`}>
            <Image src={logo} className="mb-4 d-xl-none" alt={__t(language, 'logo')} /><span>{__t(language, 'name.full')}</span>
            <ul>
                {LINKS.map((LINK, index) => (
                    <li key={LINK} className="nav-link">
                        <Link href={LINK} className={index === 0 ? 'active': ''} onClick={() => setOpen(false)}>
                            <span>0{index + 1}</span> <span className="text">{__t(language, `navigation.${LINK}`)}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="contact">
                <Link href={`mailto:${config.email}`}><i className="ph ph-at"></i> {config.email}</Link>
                <Link href={`tel:${config.mobile}`}><i className="ph ph-phone-call"></i> {config.mobile}</Link>
                <div className="d-flex flex-row gap-3">
                    <Link href={config.resume[language]} download={__t(language, 'resume.fileName')} title={__t(language, 'resume.download')}><i className="ph ph-download-simple"></i></Link>
                    <Link href={config.github} target="_blank"><i className="ph ph-github-logo"></i></Link>
                    <Link href={config.linkedIn} target="_blank"><i className={'ph ph-linkedin-logo'}></i></Link>
                </div>
            </div>
        </nav>
    );
}