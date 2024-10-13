import React from 'react';

declare namespace MS {
    type Translation = {
        [key: string]: string | Translation;
    };

    type PageParameter = {
        params: {
            language: string;
        }
    };

    type ChildPageParameter = PageParameter & {
        children: React.ReactNode;
    };

    type ComponentParameter = {
        language: string
    };

    type ProcessEnv = NodeJS.ProcessEnv & {
        NODE_ENV: string;

        MS_ANALYTICS_URL: string;
        MS_ANALYTICS_ID: string;

        MS_LANGUAGE_DEFAULT?: string;
        MS_LANGUAGE_FALLBACK?: string;

        MS_RESUME_DE?: string;
        MS_RESUME_EN?: string;
        MS_LINKEDIN?: string;
        MS_GITHUB?: string;
        MS_EMAIL?: string;
        MS_MOBILE?: string;
        MS_EMAILJS_PUBLIC_KEY?: string;
        MS_EMAILJS_SERVICE_ID?: string;
        MS_EMAILJS_TEMPLATE_ID?: string;
    };

    type Config = {
        isProduction: boolean;

        analytics: {
            enabled: boolean;
            id: string;
            url: string;
        };

        language: {
            default: string;
            fallback: string;
            available: string[];
        };

        email: string;
        mobile: string;
        resume: { [key: string]: string; };
        linkedIn: string;
        github: string;
        emailJs: {
            publicKey: string;
            serviceId: string;
            templateId: string;
        }
    };
}
export default MS;