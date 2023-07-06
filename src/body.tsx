import React from "react";
import './body.scss';
import Anchor from "./Anchor";
import { Temporal } from "@js-temporal/polyfill";
import { Taglist } from "./Taglist";
import { Dictionary } from "./Dictionary";
import { Section } from "./Section";
import { Timeline } from "./Timeline";
import { Timespan } from "./Timespan";
import { Institute } from "./Institute";
import { Experience } from "./Experience";

// const search = new URLSearchParams(window.location.search)

document.title = `Lawrence Bethlenfalvy CV`

export const Body = () => <main className='Body'>
    <header className="header">
        <h1>Lawrence Bethlenfalvy</h1>
        <address>lbfalvy@protonmail.com</address>
        <address>(+44) 7444 416 038</address>
        <address><Anchor to='www.lbfalvy.com'/></address>
        <aside>
            <dl>
                <span><dt>Residence</dt><dd>Guildford, UK</dd></span>
                <span><dt>Born</dt><dd>2001-04-19</dd></span>
                <span><dt>Nationality</dt><dd>Hungarian</dd></span>
            </dl>
        </aside>
    </header>
    <Section title="Experience">
        <Timeline>{[[
            <Experience from="2022-12" to="2023-02" role="React Developer"
                employer={["Ruuby LTD.", "ruuby.com"]}
            />,
            <>
                <p>
                    Added features and improved code quality in a mobile application and
                    the corresponding API server. Participated in planning and scrum ceremonies.
                </p>
                <Taglist tags={[
                    "Docker", "Rush.js", "AWS", "Node.js", "Typescript",
                    "React.js", "React-native", "Express.js"
                ]} />
            </>
        ], [
            <Experience from="2022-04" to="2022-11" role="Digital Experience"
                employer={["University of Surrey Students' Union", 'ussu.co.uk']}
            />,
            <>
                <p>
                    Cooperated with union staff to find and implement optimal content structure.
                    Optimized a Wordpress site for deployment on a microcontroller.
                </p>
                <Taglist tags={["PHP", "WordPress"]} />
            </>
        ], [
            <Experience from='2020-02' to='2020-09' role='Web developer'
                project='Árnyékegyetem' employer={['ELTE (freelance)']}
            />,
            <>
                <p>
                    Managed and developed a webapp from planning to release.
                    Contact with client throughout the development process.
                    Used modern web technologies to create an immersive experience.
                </p>
                <Taglist tags={['Docker', 'Node.js', 'Typescript', 'React.js', 'Fastify']} />
            </>
        ], [
            <Experience from='2018-10' to='2019-03' role='Web developer' employer={['Remiz KFT']} />,
            <>
                <p>
                    Added features to an enterprise-scale codebase, identified and fixed bugs.
                    Optimized queries to support large volumes of traffic and data.
                </p>
                <Taglist tags={['C#', 'ASP.NET Core MVC', 'Entity Framework']} />
            </>
        ]]}</Timeline>
    </Section>
    <Section className="education" title='Education'>
        <article>
            <header>
                <h3>BSc (Computer Science)</h3>
                <Timespan className="duration" from="2020" />
                <span className="overall">
                    Predicted first
                </span>
                <Institute title="University of Surrey" website="surrey.ac.uk" />
            </header>
            <main>
                <p>
                    Object-oriented programming, project planning and documentation techniques,
                    Created Orchid (<Anchor to="github.com/lbfalvy/orchid" />), a functional
                    programming language with an interpreter written in Rust.
                </p>
            </main>
        </article>
        <article>
            <header>
                <h3>Hungarian Matura</h3>
                <Timespan className="duration" from="2014" to="2020" />
                <span className="overall">
                    87% - AAB equivalent
                </span>
                <Institute title="Fazekas Mihály High School" website="fazekas.hu" />
            </header>
            <main>
                <p>
                    Studied advanced mathematical topics, basics of computer programming.
                    Graduated with 94% in mathematics at advanced level and 90% in IT at advanced level. 
                </p>
            </main>
        </article>
    </Section>
    <Section compact title='Languages'>
        <Dictionary>{[
            ['Hungarian', 'Native tongue'],
            ['English', 'Advanced / IELTS 8.0 / Europass C1 equivalent']
        ]}</Dictionary>
    </Section>
    <Section compact title='Skills'>
            <div>
                <Taglist tags={[
                    'Git', 'Docker', 'SQL',
                    'OOP', 'Functional',
                    'Python', 'Ruby', 'Rust'
                ]} />
            </div>
            <Dictionary>{[
                [<Taglist inline tags={['Linux']} />, 'Daily driver since 2016'],
                [<Taglist inline tags={['Typescript', 'React', 'Node']} />, <>
                    Stack of choice, several projects
                </>]
            ]}</Dictionary>
    </Section>
    <Section compact title='Open Source'>
        <p>
            I'm very enthusiastic about open source, solid foundation work and reusable code, and
            maintain a lot of NPM packages and a few Cargo crates.
        </p>
        <Dictionary>{[
            ['Github', <Anchor to='github.com/lbfalvy' />],
            ['NPM', <Anchor to='www.npmjs.com/~lbfalvy' />]
        ]}</Dictionary>
    </Section>
    <Section className="this-cv" title='This CV'>
        <p>
            This CV is written in React. The latest version is available online
            at <Anchor to={`www.lbfalvy.com/cv/index.html${location.search}`} />.
            The code is on my github at <Anchor to='github.com/lbfalvy/cv' />.
            This version was printed at {Temporal.Now.plainDateISO().toString()}.
        </p>
    </Section>
</main>