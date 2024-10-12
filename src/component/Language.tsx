import Link from 'next/link';
import MS from '../index';
import __t from '../translation';
import DE from './language/DE';
import EN from './language/EN';

export default function Language({language}: MS.ComponentParameter) {
    return (
        <Link href={`/${language === 'de' ? 'en' : 'de'}`}>
            <span className="flag">
                {
                    language === 'de'
                        ? <EN></EN>
                        : <DE></DE>
                }
            </span>
            <span className="text">{__t(language, `language.${language}`)}</span>
        </Link>
    );
}