import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link'
import {useRef} from 'react';
// @ts-ignore
import shuffleLetters from 'shuffle-letters';
import config from '../config';
import MS from '../index';
import __t from '../translation';
import {useScrollspy} from '../useScrollspy';
import logo from './logo.png';

const LINKS = ['hero', 'about', 'services', 'skills', 'fun_facts', 'experience', 'contact'];

type NavigationProps = {
    open: boolean;
    setOpen: Function
} & MS.ComponentParameter;

export default function Navigation({language, open, setOpen}: NavigationProps) {
    const container = useRef(null);

    useScrollspy({
        ids:         LINKS,
        selectors:   LINKS.map((LINK) => `.nav-link > a[href="#${LINK}"]`),
        offset:      'topCenter',
        activeClass: 'active',
        onActivate:  (element: Element, LINK: string) => {
            const textElement = element.querySelector('.text') as HTMLElement & { shuffleLettersClear?: () => void };
            if (textElement === null) {
                return;
            }

            textElement.shuffleLettersClear?.();
            textElement.shuffleLettersClear = shuffleLetters(textElement, {
                iterations: 5,
                onComplete: () => textElement.innerText = __t(language, `navigation.${LINK}`)
            });
        }
    });

    useGSAP(() => {
        const element = container.current as HTMLElement | null;
        if (element === null) {
            return;
        }

        element.style.visibility = 'initial';
        gsap.from('.nav-link, .contact', {duration: 0.8, delay: 0.5, opacity: 0, scale: 0, stagger: 0.1});
        gsap.to(element, {'--height': '100%', duration: 1, ease: 'power1.inOut'});
    }, {scope: container});

    return (
        <nav id="navigation" ref={container} className={`navigation ${open ? 'opened' : ''}`} style={{visibility: 'hidden'}}>
            <Image src={logo} className="mb-4 d-xl-none" alt={__t(language, 'logo')}/><span>{__t(language, 'name.full')}</span>
            <ul>
                {LINKS.map((LINK, index) => (
                    <li key={LINK} className="nav-link">
                        <Link href={`#${LINK}`} className={index === 0 ? 'active' : ''} onClick={() => setOpen(false)}>
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