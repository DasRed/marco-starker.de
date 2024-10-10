import MS from './index';

export function creator(env: MS.ProcessEnv): MS.Config {
    return {
        language: {
            default:   env.MS_LANGUAGE_DEFAULT ?? 'en',
            fallback:  env.MS_LANGUAGE_FALLBACK ?? 'en',
            available: ['en', 'de'],
        },

        email: env.MS_EMAIL ?? 'marco.starker@gmx.net',
        mobile: env.MS_MOBILE ?? '+49 160 5543322',
        resume:   {
            de: env.MS_RESUME_DE ?? 'https://storage.rxresu.me/clxbgu1nm003mv6lwyhrcjjta/resumes/CV (deutsch) (lang).pdf',
            en: env.MS_RESUME_EN ?? 'https://storage.rxresu.me/clxbgu1nm003mv6lwyhrcjjta/resumes/CV (english) (long).pdf',
        },
        linkedIn: env.MS_LINKEDIN ?? 'https://www.linkedin.com/in/marco-starker-100090272/',
        github:   env.MS_GITHUB ?? 'https://github.com/DasRed',
    };
}

export default creator(process.env);
