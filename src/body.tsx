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
import { Projects } from "./Projects";
import { Unit } from "./Unit";

// const search = new URLSearchParams(window.location.search)

document.title = `Lawrence Bethlenfalvy CV`

export const Body = () => <main className='Body'>
  <header className="header">
    <h1>Lawrence Bethlenfalvy</h1>
    <address>London, UK</address>
    <address><Anchor to='www.lbfalvy.com'/></address>
    <address>lbfalvy@protonmail.com</address>
    <address>(+44) 7444 416038</address>
  </header>
  <Section>
    <p>
      I'm very enthusiastic about open source and have many projects on Github.
      I like the certainty of static typing so my language of choice is Typescript or Rust,
      but I find my way around many toolsets and like to learn new ones.
      I graduated recently.
    </p>
  </Section>
  <Section title="Projects" meta={<>
    <Unit style={{ marginRight: 5 }}>Github: <Anchor to="github.com/lbfalvy" />,</Unit>
    <Unit style={{ marginRight: 5 }}>Node packages: <Anchor to="www.npmjs.com/~lbfalvy" />,</Unit>
    <Unit>Rust crates: <Anchor to="crates.io/users/lbfalvy" /></Unit>
  </>}>
    <Projects>{[
      ["Orchid", 'lbfalvy/orchid', ["Rust"], <>
        An experimental interpreted pure functional programming language.
      </>],
      ["Bound", "lbfalvy/bound", ["Rust"], <>
        Generic container to return borrowing types like lock guards
      </>],
      ["Autocaddy", "lbfalvy/autocaddy", ["Linux", "Docker", "Bash"], <>
        Automatic TLS terminator and reverse proxy for prototyping
      </>],
      ["mini-events", "lbfalvy/mini-events", ["Typescript"], <>
        Convenient event interface, implementation and transformer library
      </>],
      ["react-await", "lbfalvy/react-await", ["Typescript", "React"], <>
        lazy-loading for components and data with improved ergonomics
      </>],
      ["react-context-menu", "lbfalvy/react-context-menu", ["Typescript", "React"], <>
        Custom context menu and dropdown with an elegant API
      </>]
    ]}</Projects>
  </Section>
  <Section title="Experience">
    <Timeline>{[[
      <Experience from="2022-12" to="2023-02" role="React Developer"
        employer={["Ruuby LTD.", "ruuby.com"]}
      />,
      <>
        <p>
          In a scrum team, added features and improved code quality of appointment manager mobile app
          and API server.
          Established functional design patterns to improve analysis and catch bugs.
        </p>
        <Taglist tags={[
          "Docker", "Rush.js", "AWS", "Node.js", "Typescript",
          "React.js", "React-native", "Express.js"
        ]} />
      </>
    ], [
      <Experience from="2022-04" to="2022-11" role="Wordpress Developer"
        employer={["University of Surrey Students' Union", 'ussu.co.uk']}
      />,
      <>
        <p>
          Collected business objectives, designed and implemented optimal content structure in
          public-facing knowledge base.
          Optimized Wordpress site for deployment on an underpowered VPS.
        </p>
        <Taglist tags={["PHP", "WordPress"]} />
      </>
    ], [
      <Experience from='2020-02' to='2020-09' role='Web developer'
        employer={['Research project at Eötvös Loránd University']}
      />,
      <>
        <p>
          Managed and developed interactive real-time PWA with user-defined content
          structure.
          Built proof-of-concepts, collected feedback and implemented rapidly evolving requirements
          through entire project lifecycle.
          Supported public launch with 1000 concurrent user spike without downtime on an EC2 t1-nano.
        </p>
        <Taglist tags={[
          'Docker', 'Node.js', 'Typescript', 'React.js', 'Fastify'
        ]} />
      </>
    ], [
      <Experience from='2018-10' to='2019-03' role='Web developer' employer={['Remiz LTD']} />,
      <>
        <p>
          Added features and fixed bugs in enterprise-scale codebase.
          Optimized queries to support large volumes of traffic and data.
        </p>
        <Taglist tags={[
          'C#', 'ASP.NET Core MVC', 'Entity Framework', 'Linq', 'Layered architecture'
        ]} />
      </>
    ], [
      <Experience from="2016-06" to="2016-08" role="Web developer" employer={['N-ware']} />,
      <>
        <p>
          Planned and implemented i18n for company website. Contributed to mathematical foundations for
          global naval navigation system.
        </p>
        <Taglist tags={['C#', 'MODX', 'PHP']} />
      </>
    ]]}</Timeline>
  </Section>
  <Section className="education" title='education' compact>
    <article>
      <header>
        <h3>BSc (Computer Science)</h3>
        <Institute title="University of Surrey" website="surrey.ac.uk" />
      </header>
      <main>
        <p>
          Practiced project management, studied java, Ruby on Rails, IoT,
          distributed and mainframe computing, verification.
          Created a programming language called Orchid.
        </p>
      </main>
    </article>
  </Section>
  <Section title='Skills' meta={<>
    <Taglist tags={[
      'SQL',
      'OOP', 'FP',
      'Python', 'Ruby', 'Rust', 
      "Rush.js", "AWS", "React-native", "Express.js",
      "PHP", "WordPress", "MODX",
      'C#', 'ASP.NET Core MVC', 'Entity Framework', 'Linq', 'Layered architecture'
    ]} />
  </>}>
      <Dictionary>{[
        [<Taglist inline tags={['Linux']} />, 'Daily driver since 2016'],
        [<Taglist inline tags={['Git', 'Docker', 'Typescript', 'React', 'Node.js', 'Fastify']} />,
          <>
            Stack of choice, several projects
          </>
        ]
      ]}</Dictionary>
  </Section>
  <Section className="this-cv">
    <p>
      This CV is written in React. The latest version is available online
      at <Anchor to={`www.lbfalvy.com/cv/index.html${location.search}`} />.
      The code is on github at <Anchor to='github.com/lbfalvy/cv' />.
      This version was printed at {Temporal.Now.plainDateISO().toString()}.
    </p>
  </Section>
</main>