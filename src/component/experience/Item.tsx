import React from 'react';
import MS from '../../index';
import __t from '../../translation';
import Conditional from '../Conditional';

type DateItem = {
    month?: number;
    year: number;
};
type ItemProps = {
    from: DateItem;
    to: DateItem;
    title: string;
    company?: string;
    technologies?: string[];
    children: React.ReactNode;
} & MS.ComponentParameter;

export const TECHS = {
    AGILE_METHODOLOGIES:   'experience.tech.AgileMethodologies',
    ANDROID:               'experience.tech.Android',
    AWS:                   'experience.tech.AWS',
    BACKBONEJS:            'experience.tech.BackboneJS',
    BACKEND_DEVELOPMENT:   'experience.tech.BackendDevelopment',
    BINARYBANKFORMAT:      'experience.tech.BinaryBankFormat',
    CI_CD:                 'experience.tech.CI_CD',
    DEVELOPMENT:           'experience.tech.Development',
    DOCKER:                'experience.tech.Docker',
    DOCTRINE:              'experience.tech.Doctrine',
    ELOQUENT:              'experience.tech.Eloquent',
    FOURTH_DIMENSION:      'experience.tech.FourthDimension',
    FRONTEND_DEVELOPMENT:  'experience.tech.FrontendDevelopment',
    FULLSTACK_DEVELOPMENT: 'experience.tech.FullStackDevelopment',
    GIT:                   'experience.tech.GIT',
    GITFLOW:               'experience.tech.GitFlow',
    IOS:                   'experience.tech.iOS',
    JAVASCRIPT:            'experience.tech.JavaScript',
    KUBERNETES:            'experience.tech.Kubernetes',
    LARAVEL:               'experience.tech.Laravel',
    MAINTENANCE:           'experience.tech.Maintenance',
    MICROSERVICES:         'experience.tech.Microservices',
    MONGODB:               'experience.tech.MongoDB',
    MYSQL:                 'experience.tech.MySQL',
    NEXTJS:                'experience.tech.NextJs',
    NODEJS:                'experience.tech.NodeJs',
    OOP:                   'experience.tech.OOP',
    PERFORMANCE_ANALYSIS:  'experience.tech.PerformanceAnalysis',
    PHP:                   'experience.tech.PHP',
    POSTGRESQL:            'experience.tech.PostgreSQL',
    PROJECT_PLANNING:      'experience.tech.ProjectPlanning',
    REACTJS:               'experience.tech.ReactJs',
    REACT_NATIVE:          'experience.tech.ReactNative',
    REDIS:                 'experience.tech.Redis',
    REQUIREJS:             'experience.tech.RequireJS',
    SASS:                  'experience.tech.SASS',
    SCRUM:                 'experience.tech.Scrum',
    SLIM:                  'experience.tech.Slim',
    SOFTWARE_ARCHITECTURE: 'experience.tech.SoftwareArchitecture',
    SQL:                   'experience.tech.SQL',
    STRAPI:                'experience.tech.Strapi',
    SVELTE:                'experience.tech.Svelte',
    SYMFONY:               'experience.tech.Symfony',
    TECHNICAL_PLANNING:    'experience.tech.TechnicalPlanning',
    UNITTESTS:             'experience.tech.UnitTests',
    WEBDEVELOPMENT:        'experience.tech.WebDevelopment',
    WEBSERVICES:           'experience.tech.WebServices',
    WEBSOCKET:             'experience.tech.WebSocket',
};

export default function Item({from, to, title, company, technologies, language, children}: ItemProps) {
    let dateTime = [
        from.month ? String(from.month).padStart(2, '0') + '/' : '',
        from.year,
        ' - ',
        to.month ? String(to.month).padStart(2, '0') + '/' : '',
        to.year
    ];
    return (
        <div className="experience-item">
            <h5>
                ({dateTime})
            </h5>
            <h3>{__t(language, title)} <Conditional when={!!company}>{__t(language, 'experience.at')} {company}</Conditional></h3>

            {children}

            <Conditional when={technologies !== undefined && technologies.length > 0}>
                <p className="technologies">{technologies && technologies.map((technology) => __t(language, technology)).join(', ')}</p>
            </Conditional>
        </div>
    );
}