import config from '../config';
import MS from '../index';
import de from './de';
import en from './en';

const LANGUAGES: { [key: string]: MS.Translation } = {
    en, de
};

export default function __t(language: string, key: string): string {
    const result = key.split('.').reduce((acc: string | MS.Translation | undefined, entry: string): string | MS.Translation | undefined => {
        if (acc === undefined) {
            return undefined;
        }

        if (typeof acc === 'string') {
            return acc;
        }

        return acc[entry];
    }, LANGUAGES[language] ?? LANGUAGES[config.language.fallback] ?? undefined);

    if (result === undefined && language === config.language.fallback) {
        return `%%%% key '${key}' not found!`;
    }
    else if (result === undefined) {
        return __t(config.language.fallback, key);
    }
    else if (typeof result !== 'string')
    {
        return `%%%% key '${key}' found, but is not a string!`;
    }

    return result;
};