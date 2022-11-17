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
    </header>
    <section className='personal'>
        <dl>
            <dt>Born</dt><dd>2001-04-19</dd>
            <dt>Nationality</dt><dd>Hungarian</dd>
            <dt>Residence</dt><dd>Guildford, Surrey County, UK</dd>
        </dl>
    </section>
    <Section title="Experience">
        <Timeline>{[[
            <Experience from='2017-07' to='2017-08' role='intern'
                employer={['N-Ware', 'n-ware.hu/en']}
            />,
            <>
                <p>
                    Solving problems with unfamiliar technologies, internationalising a MODX site
                </p>
            </>
        ], [
            <Experience from='2018-10' to='2019-03' role='Web developer' employer={['Remiz KFT']} />,
            <>
                <p>
                    Adding features to an enterprise-scale codebase, debugging,
                    using an ORM efficiently, refactoring
                </p>
                <Taglist tags={['C#', 'ASP.NET Core MVC', 'Entity Framework']} />
            </>
        ], [
            <Experience from='2020-02' to='2020-09' role='Web developer'
                project='Árnyékegyetem' employer={['ELTE (freelance)']}
            />,
            <>
                <p>
                    Managing and developing a webapp start to finish,
                    discussing features and progress with clients,
                    modern web technologies, time management
                </p>
                <Taglist tags={['Docker', 'Node.js', 'Typescript', 'React.js', 'Fastify']} />
            </>
        ], [
            <Experience from="2022-04" role="Digital Experience"
                employer={["University of Surrey Students' Union", 'ussu.co.uk']}
            />,
            <>
                <p>
                    Cooperating with union staff to identify and implement optimal content
                    structure. Optimizing a Wordpress site to run on an IoT device.
                </p>
            </>
        ]]}</Timeline>
    </Section>
    <Section compact className="education" title='Education'>
        <article>
            <header>
                <h3>BSc (Computer Science)</h3>
                <Timespan className="duration" from="2020" />
                <Institute title="University of Surrey" website="surrey.ac.uk" />
            </header>
            <main>
                <p>
                    Object-oriented programming, project planning and documentation techniques
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