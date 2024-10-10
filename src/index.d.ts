import React from 'react';

declare module MS {
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
        MS_LANGUAGE_DEFAULT?: string;
        MS_LANGUAGE_FALLBACK?: string;

        MS_RESUME_DE?: string;
        MS_RESUME_EN?: string;
        MS_LINKEDIN?: string;
        MS_GITHUB?: string;
        MS_EMAIL?: string;
        MS_MOBILE?: string;
    };

    type Config = {
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

    };
}
export default MS;