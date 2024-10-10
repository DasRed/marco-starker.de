import AboutMe from '../../component/AboutMe';
import Contact from '../../component/Contact';
import Experience from '../../component/Experience';
import Item, {TECHS} from '../../component/experience/Item';
import List from '../../component/experience/List';
import Text from '../../component/experience/Text';
import FunFact from '../../component/FunFact';
import Hero from '../../component/Hero';
import Section from '../../component/Section';
import Service from '../../component/Service';
import Card from '../../component/service/Card';
import Skill from '../../component/Skill';
import Circle from '../../component/skill/Circle';
import Progress from '../../component/skill/Progress';
import MS from '../../index';

export default function Home({params: {language}}: MS.PageParameter) {
    return (
        <>
            <Section id="hero" index={1} count={7} next="about" language={language}>
                <Hero language={language}/>
            </Section>

            <Section id="about" index={2} count={7} next="services" language={language}>
                <AboutMe language={language}/>
            </Section>

            <Section id="services" index={3} count={7} next="skills" language={language}>
                <Service language={language}>
                    <Card id="backend" number={1} trTitle="service.backend.title" language={language} trList={['service.backend.list1', 'service.backend.list2', 'service.backend.list3', 'service.backend.list4', 'service.backend.list5']}/>
                    <Card id="frontend" number={2} trTitle="service.frontend.title" language={language} trList={['service.frontend.list1', 'service.frontend.list2', 'service.frontend.list3', 'service.frontend.list4', 'service.frontend.list5']}/>
                    <Card id="devops" number={3} trTitle="service.devops.title" language={language} trList={['service.devops.list1', 'service.devops.list2', 'service.devops.list3', 'service.devops.list4', 'service.devops.list5']}/>
                    <Card id="architecture" number={4} trTitle="service.architecture.title" language={language} trList={['service.architecture.list1', 'service.architecture.list2', 'service.architecture.list3', 'service.architecture.list4', 'service.architecture.list5']}/>
                    <Card id="project" number={4} trTitle="service.project.title" language={language} trList={['service.project.list1', 'service.project.list2', 'service.project.list3', 'service.project.list4', 'service.project.list5']}/>
                </Service>
            </Section>

            <Section id="skills" index={4} count={7} next="fun_facts" language={language}>
                <Skill id="developer" number={1} trTitle="skill.developer.title" trSubTitle="skill.developer.subTitle" language={language}>
                    <Progress language={language} entries={[
                        {trTitle: 'skill.developer.fullStack', percent: 100},
                        {trTitle: 'skill.developer.backend', percent: 100},
                        {trTitle: 'skill.developer.frontend', percent: 90},
                        {trTitle: 'skill.developer.php', percent: 100},
                        {trTitle: 'skill.developer.nodeJs', percent: 100},
                        {trTitle: 'skill.developer.javaScript', percent: 100},
                        {trTitle: 'skill.developer.typeScript', percent: 60},
                        {trTitle: 'skill.developer.reactJs', percent: 40},
                    ]}/>
                </Skill>

                <Skill id="architecture" number={2} trTitle="skill.architecture.title" trSubTitle="skill.architecture.subTitle" language={language}>
                    <Progress language={language} entries={[
                        {trTitle: 'skill.architecture.microservices', percent: 100},
                        {trTitle: 'skill.architecture.CI_CD', percent: 100},
                        {trTitle: 'skill.architecture.AWS', percent: 80},
                        {trTitle: 'skill.architecture.webServices', percent: 100},
                        {trTitle: 'skill.architecture.docker', percent: 100},
                        {trTitle: 'skill.architecture.SQL_NoSQL', percent: 70},
                        {trTitle: 'skill.architecture.softwareArchitecture', percent: 100},
                        {trTitle: 'skill.architecture.terraform', percent: 20},
                    ]}/>
                </Skill>

                <Skill id="language" number={3} trTitle="skill.language.title" trSubTitle="skill.language.subTitle" language={language}>
                    <Circle language={language} entries={[
                        {trTitle: 'skill.language.german', percent: 100},
                        {trTitle: 'skill.language.english', percent: 80},
                    ]}/>
                </Skill>
            </Section>

            <Section id="fun_facts" index={5} count={7} next="experience" language={language}>
                <FunFact language={language}/>
            </Section>

            <Section id="experience" index={6} count={7} next="contact" language={language}>
                <Experience language={language}>
                    <Item from={{month: 9, year: 2019}} to={{month: 11, year: 2024}} title="experience.SeniorSoftwareDeveloper" company="Zeppelin / z-Lab GmbH" language={language} technologies={[
                        TECHS.TECHNICAL_PLANNING, TECHS.DEVELOPMENT, TECHS.MAINTENANCE, TECHS.NODEJS, TECHS.STRAPI,
                        TECHS.NEXTJS, TECHS.PHP, TECHS.LARAVEL, TECHS.SYMFONY, TECHS.SVELTE, TECHS.SASS, TECHS.AWS,
                        TECHS.KUBERNETES, TECHS.DOCKER, TECHS.PERFORMANCE_ANALYSIS, TECHS.SCRUM, TECHS.PROJECT_PLANNING,
                    ]}>
                        <List language={language} trKeys={[
                            'experience.zeppelin.list1',
                            'experience.zeppelin.list2',
                            'experience.zeppelin.list3',
                            'experience.zeppelin.list4',
                            'experience.zeppelin.list5',
                        ]}></List>
                    </Item>

                    <Item from={{month: 4, year: 2016}} to={{month: 8, year: 2019}} title="experience.SeniorSoftwareDeveloper" company="posterXXL" language={language} technologies={[
                        TECHS.TECHNICAL_PLANNING, TECHS.DEVELOPMENT, TECHS.MAINTENANCE, TECHS.JAVASCRIPT, TECHS.REQUIREJS,
                        TECHS.BACKBONEJS, TECHS.PHP, TECHS.SYMFONY, TECHS.SLIM, TECHS.DOCTRINE, TECHS.DOCTRINE, TECHS.ELOQUENT,
                        TECHS.REDIS, TECHS.MYSQL, TECHS.MONGODB, TECHS.SASS, TECHS.DOCKER, TECHS.AWS, TECHS.GIT, TECHS.PERFORMANCE_ANALYSIS,
                        TECHS.SCRUM, TECHS.PROJECT_PLANNING
                    ]}>
                        <List language={language} trKeys={[
                            'experience.posterxxl.list1',
                            'experience.posterxxl.list2',
                            'experience.posterxxl.list3',
                        ]}></List>
                    </Item>

                    <Item from={{month: 1, year: 2017}} to={{month: 6, year: 2018}} title="experience.FreelanceWork" language={language} technologies={[
                        TECHS.REACT_NATIVE, TECHS.REACTJS, TECHS.NODEJS, TECHS.WEBSOCKET, TECHS.SASS, TECHS.IOS, TECHS.ANDROID, TECHS.DOCKER, TECHS.BINARYBANKFORMAT
                    ]}>
                        <Text trKey="experience.freelancer2017" language={language}/>
                    </Item>

                    <Item from={{month: 7, year: 2015}} to={{month: 11, year: 2015}} title="experience.SeniorSoftwareDeveloper" company="myposter GmbH" language={language} technologies={[
                        TECHS.PHP, TECHS.NODEJS, TECHS.WEBDEVELOPMENT, TECHS.JAVASCRIPT, TECHS.SQL, TECHS.SCRUM, TECHS.WEBSERVICES, TECHS.AGILE_METHODOLOGIES, TECHS.MICROSERVICES,
                        TECHS.GITFLOW, TECHS.OOP, TECHS.SOFTWARE_ARCHITECTURE, TECHS.MYSQL, TECHS.FULLSTACK_DEVELOPMENT, TECHS.BACKEND_DEVELOPMENT, TECHS.CI_CD
                    ]}>
                        <Text trKey="experience.myposter" language={language}/>
                    </Item>

                    <Item from={{month: 4, year: 2015}} to={{month: 6, year: 2015}} title="experience.DeputyTeamManager" company="CHECK24" language={language} technologies={[
                        TECHS.PHP, TECHS.NODEJS, TECHS.WEBDEVELOPMENT, TECHS.JAVASCRIPT, TECHS.SQL, TECHS.SCRUM, TECHS.WEBSERVICES, TECHS.AGILE_METHODOLOGIES, TECHS.MICROSERVICES,
                        TECHS.GITFLOW, TECHS.OOP, TECHS.SOFTWARE_ARCHITECTURE, TECHS.MYSQL, TECHS.FULLSTACK_DEVELOPMENT, TECHS.BACKEND_DEVELOPMENT, TECHS.CI_CD
                    ]}>
                        <Text trKey="experience.check24" language={language}/>
                    </Item>

                    <Item from={{month: 5, year: 2013}} to={{month: 3, year: 2015}} title="experience.SeniorSoftwareDeveloper" company="Bryanston Services (D) GmbH" language={language} technologies={[
                        TECHS.SQL, TECHS.NODEJS, TECHS.SCRUM, TECHS.DEVELOPMENT, TECHS.WEBSERVICES, TECHS.AGILE_METHODOLOGIES, TECHS.MICROSERVICES, TECHS.GITFLOW,
                        TECHS.OOP, TECHS.SOFTWARE_ARCHITECTURE, TECHS.MYSQL, TECHS.FULLSTACK_DEVELOPMENT, TECHS.BACKEND_DEVELOPMENT, TECHS.CI_CD, TECHS.PHP,
                        TECHS.WEBDEVELOPMENT, TECHS.JAVASCRIPT, TECHS.UNITTESTS
                    ]}>
                        <List language={language} trKeys={[
                            'experience.bryanston.list1',
                            'experience.bryanston.list2',
                            'experience.bryanston.list3',
                        ]}></List>
                    </Item>

                    <Item from={{month: 5, year: 2011}} to={{month: 4, year: 2013}} title="experience.TechnicalLead" company="Travian Games" language={language} technologies={[
                        TECHS.PHP, TECHS.NODEJS, TECHS.SCRUM, TECHS.DEVELOPMENT, TECHS.SQL, TECHS.WEBSERVICES, TECHS.AGILE_METHODOLOGIES, TECHS.GITFLOW, TECHS.OOP,
                        TECHS.SOFTWARE_ARCHITECTURE, TECHS.MYSQL, TECHS.FULLSTACK_DEVELOPMENT, TECHS.BACKEND_DEVELOPMENT, TECHS.CI_CD, TECHS.WEBDEVELOPMENT,
                        TECHS.JAVASCRIPT, TECHS.UNITTESTS
                    ]}>
                        <Text trKey="experience.travian.lead" language={language}/>
                    </Item>

                    <Item from={{month: 9, year: 2009}} to={{month: 4, year: 2011}} title="experience.SeniorSoftwareDeveloper" company="Travian Games" language={language} technologies={[
                        TECHS.PHP, TECHS.NODEJS, TECHS.SCRUM, TECHS.DEVELOPMENT, TECHS.SQL, TECHS.WEBSERVICES, TECHS.AGILE_METHODOLOGIES, TECHS.GITFLOW, TECHS.OOP,
                        TECHS.SOFTWARE_ARCHITECTURE, TECHS.MYSQL, TECHS.FULLSTACK_DEVELOPMENT, TECHS.BACKEND_DEVELOPMENT, TECHS.CI_CD, TECHS.WEBDEVELOPMENT,
                        TECHS.JAVASCRIPT, TECHS.UNITTESTS
                    ]}>
                        <Text trKey="experience.travian.developer" language={language}/>
                    </Item>

                    <Item from={{month: 2, year: 2008}} to={{month: 7, year: 2009}} title="experience.HeadOfSoftwareDeveloper" company="sapodo SE" language={language} technologies={[
                        TECHS.PHP, TECHS.SQL, TECHS.FRONTEND_DEVELOPMENT, TECHS.WEBSERVICES, TECHS.OOP, TECHS.FULLSTACK_DEVELOPMENT, TECHS.BACKEND_DEVELOPMENT, TECHS.POSTGRESQL, TECHS.WEBDEVELOPMENT
                    ]}>
                        <Text trKey="experience.sapodo" language={language}/>
                    </Item>

                    <Item from={{month: 11, year: 2004}} to={{month: 1, year: 2008}} title="experience.SoftwareDeveloper" company="Stone Datensysteme / STONE Software Solutions GmbH" language={language} technologies={[
                        TECHS.SQL, TECHS.DEVELOPMENT, TECHS.FULLSTACK_DEVELOPMENT, TECHS.FOURTH_DIMENSION
                    ]}>
                        <Text trKey="experience.stone" language={language}/>
                    </Item>

                    <Item from={{year: 2004}} to={{year: 2006}} title="experience.FreelanceWork" company="Empire Universe" language={language}>
                        <Text trKey="experience.empireUniverse" language={language}/>
                    </Item>

                    <Item from={{month: 3, year: 2003}} to={{month: 8, year: 2003}} title="experience.SoftwareDeveloper" company="ISU GmbH" language={language}>
                        <Text trKey="experience.isu.developer" language={language}/>
                    </Item>

                    <Item from={{month: 11, year: 2002}} to={{month: 2, year: 2003}} title="experience.FreelanceWork" company="ISU GmbH" language={language}>
                        <Text trKey="experience.isu.freelancer" language={language}/>
                    </Item>

                    <Item from={{month: 4, year: 2000}} to={{month: 5, year: 2001}} title="experience.FreelanceWork" company="Andreas Hettich GmbH & Co. KG" language={language}>
                        <Text trKey="experience.hettich" language={language}/>
                    </Item>

                    <Item from={{month: 10, year: 1999}} to={{month: 3, year: 2000}} title="experience.WorkingStudent" company="Andreas Hettich GmbH & Co. KG" language={language}>
                        <Text trKey="experience.hettich" language={language}/>
                    </Item>
                </Experience>
            </Section>

            <Section id="contact" index={7} count={7} language={language}>
                <Contact language={language}/>
            </Section>
        </>
    );
}
