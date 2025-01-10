import MS from './index';

export function creator(env: MS.ProcessEnv): MS.Config {
    return {
        isProduction: env.NODE_ENV === 'production',

        analytics: {
            enabled: env.NODE_ENV === 'production',
            id: env.MS_ANALYTICS_ID ?? '59677b8a-fb6a-4365-b81c-9a6b6914437a',
            url: env.MS_ANALYTICS_URL ?? 'https://umami.marco-starker.de/script.js',
        },

        language: {
            default:   env.MS_LANGUAGE_DEFAULT ?? 'en',
            fallback:  env.MS_LANGUAGE_FALLBACK ?? 'en',
            available: ['en', 'de'],
        },

        email:    env.MS_EMAIL ?? 'info@marco-starker.de',
        mobile:   env.MS_MOBILE ?? '+49 160 5543322',
        resume:   {
            de: env.MS_RESUME_DE ?? 'https://storage.rxresu.me/clxbgu1nm003mv6lwyhrcjjta/resumes/CV (deutsch) (lang).pdf',
            en: env.MS_RESUME_EN ?? 'https://storage.rxresu.me/clxbgu1nm003mv6lwyhrcjjta/resumes/CV (english) (long).pdf',
        },
        linkedIn: env.MS_LINKEDIN ?? 'https://www.linkedin.com/in/marco-starker-100090272/',
        github:   env.MS_GITHUB ?? 'https://github.com/DasRed',

        emailJs: {
            publicKey:  env.MS_EMAILJS_PUBLIC_KEY ?? 'na7RqYLsX4imRD9Ly',
            serviceId:  env.MS_EMAILJS_SERVICE_ID ?? 'service_8o4dyfp',
            templateId: env.MS_EMAILJS_TEMPLATE_ID ?? 'template_3zf8sbs',
        }
    };
}

export default creator(<MS.ProcessEnv>process.env);
