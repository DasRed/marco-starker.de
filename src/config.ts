import MS from './index';

export function creator(env: MS.ProcessEnv): MS.Config {
    return {
        language: {
            default:  env.MS_LANGUAGE_DEFAULT ?? 'en',
        },
    };
}

export default creator(process.env);
