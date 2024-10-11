'use client';

import emailjs from '@emailjs/browser';
import Link from 'next/link';
import {FormEvent} from 'react';
import config from '../config';
import MS from '../index';
import __t from '../translation';

emailjs.init(config.emailJs.publicKey);

async function sendEmail(language: string, event: FormEvent) {
    event.preventDefault();

    const elementForm   = event.currentTarget as HTMLFormElement;
    const elementSubmit = elementForm.querySelector('#submit-btn') as HTMLButtonElement;
    if (elementSubmit === null) {
        return;
    }

    elementSubmit.innerText = __t(language, 'contact.form.sending');
    try {
        await emailjs.sendForm(config.emailJs.serviceId, config.emailJs.templateId, elementForm);
        elementForm.reset();
        elementSubmit.innerText = __t(language, 'contact.form.success');
        setTimeout(() => elementSubmit.innerHTML = __t(language, 'contact.form.submit'), 3000);
    }
    catch (error) {
        console.log("FAILED...", error);
    }
}

export default function Contact({language}: MS.ComponentParameter) {
    return (
        <>
            <span className="section-title-overlay-text">{__t(language, 'contact.overlay')}</span>
            <div className="section-title text-capitalize">
                <h4>{__t(language, 'contact.title1')}</h4>
                <h2>{__t(language, 'contact.title2')}</h2>
            </div>
            <div className="row pb-120 contact-items">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                        <div className="contact-item">
                            <div className="icon-box">
                                <i className="ph ph-phone-call"></i>
                            </div>
                            <p><Link href={`tel:${config.mobile}`}>{config.mobile}</Link></p>
                        </div>
                    </div>
                    <div className="col-sm-7 col-xl-5 col-xxl-4">
                        <div className="contact-item">
                            <div className="icon-box">
                                <i className="ph ph-at"></i>
                            </div>
                            <p><Link href={`mailto:${config.email}`}>{config.email}</Link></p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 col-xxl-3">
                        <div className="contact-item">
                            <div className="icon-box">
                                <i className="ph ph-map-pin"></i>
                            </div>
                            <p>{__t(language, 'contact.location')}</p>
                        </div>
                    </div>
                    <div className="col-sm-5 col-xl-3 col-xxl-2 d-flex align-items-center">
                        <div className="d-flex gap-3 social-icons">
                            <Link href={config.github} target="_blank"><i className="ph ph-github-logo"></i></Link>
                            <Link href={config.linkedIn} target="_blank"><i className="ph ph-linkedin-logo"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <form id="contact-form" className="contact-form" onSubmit={(event: FormEvent) => sendEmail(language, event)}>
                <h4>{__t(language, 'contact.form.title')}</h4>
                <div className="row g-4 g-xl-5">
                    <div className="col-sm-6">
                        <label htmlFor="user_name">{__t(language, 'contact.form.nameLabel')}</label>
                        <input type="text" id="user_name" name="user_name" placeholder={__t(language, 'contact.form.namePlaceholder')} required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="user_email">{__t(language, 'contact.form.emailLabel')}</label>
                        <input type="email" id="user_email" name="user_email" placeholder={__t(language, 'contact.form.emailPlaceholder')} required/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="message">{__t(language, 'contact.form.messageLabel')}</label>
                        <textarea id="message" name="message" placeholder={__t(language, 'contact.form.messagePlaceholder')}></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" id="submit-btn" className="submit-btn position-relative">
                            <div className="waves-top-md">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {__t(language, 'contact.form.submit')}
                            <div className="waves-bottom-md">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}