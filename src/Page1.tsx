import './Page1.scss';
import Anchor from "./Anchor";
import { Taglist } from "./Taglist";
import { Dictionary } from "./Dictionary";
import { Section, Spacer } from "./Section";
import { Timeline } from "./Timeline";
import { Timespan } from "./Timespan";
import { Institute } from "./Institute";
import { Experience } from "./Experience";

export const Page1 = () => <main className='Page1'>
  <header className="header">
    <h1>Lawrence Bethlenfalvy</h1>
    <address>London, UK</address>
    <address><Anchor to='www.lbfalvy.com'/></address>
    <address>lbfalvy@protonmail.com</address>
    <address>(+44) 7444 416038</address>
  </header>
  <Section>
    <p>
      I'm active in open source and have several throrughly tested and documented projects on Github. I strive to ensure total clarity in requirements as well as code, so my language of choice is usually Typescript or Rust, statically typed and somewhat function-oriented languages. I know many languages and tools and I'm quick to learn new ones.
    </p>
  </Section>
  <Section className="education" compact>
    <article>
      <header>
        <h3>BSc (Computer Science)</h3>
        <Timespan to="2023" />
        <Institute title="University of Surrey" website="surrey.ac.uk" />
      </header>
      <main>
        <p>
          Studied java, Ruby on Rails, network programming, IoT, distributed computing with Elixir and mainframe computing with IBM Z-OS and OpenShift, verification. Participated in several group projects with dynamic teams. Created a programming language called Orchid.
        </p>
      </main>
    </article>
  </Section>
  <Section title="Experience">
    <Timeline>{[[
      <Experience from="2022-12" to="2023-02" role="Full-stack React Developer"
        employer={["Ruuby LTD.", "ruuby.com"]}
      />,
      <>
        <p>
          In a scrum team, added features and improved code quality of appointment manager mobile app and API server. Established functional design patterns to improve static analysis and identify lurking bugs.
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
          Collected business objectives, designed and implemented optimal content structure in public-facing knowledge base. Optimized Wordpress site for deployment on an underpowered VPS. Maintained and created Power Automate flows to generate and publish reports from workgroup documents.
        </p>
        <Taglist tags={["PHP", "WordPress", "SharePoint", "Power Automate"]} />
      </>
    ], [
      <Experience from='2020-02' to='2020-09' role='Full-stack Web developer'
        employer={['Research project at Eötvös Loránd University']}
      />,
      <>
        <p>
          Managed and developed interactive real-time PWA with user-defined content structure. Built proof-of-concepts, collected feedback and implemented rapidly evolving requirements through entire project lifecycle. Supported public launch with 1000 concurrent user spike without friction on an EC2 t1-nano.
        </p>
        <Taglist tags={[
          'Docker', 'Node.js', 'Typescript', 'React.js', 'Fastify'
        ]} />
      </>
    ], [
      <Experience from='2018-10' to='2019-03' role='.NET developer' employer={['Remiz LTD']} />,
      <>
        <p>
          Added features and fixed bugs in enterprise-scale codebase. Optimized queries to support large volumes of traffic and data.
        </p>
        <Taglist tags={[
          'C#', 'ASP.NET Core MVC', 'Entity Framework', 'Linq',
          'Layered architecture'
        ]} />
      </>
    ], [
      <Experience from="2016-06" to="2016-08" role="Web developer" employer={['N-ware']} />,
      <>
        <p>
          Planned and implemented i18n for company website. Contributed to mathematical foundations for global nautical navigation system.
        </p>
        <Taglist tags={['C#', 'MODX', 'PHP']} />
      </>
    ]]}</Timeline>
  </Section>
  <Section title='Skills' meta={<>
    <Taglist tags={[
      'SQL', 'OOP', 'FP', 'Python', 'Ruby', 'Rust',  "Rush.js", "AWS",
      "React Native", "Express", "PHP", "WordPress", "MODX", 'C#',
      'ASP.NET Core MVC', 'Entity Framework', 'Linq', 'Layered architecture'
    ]} />
  </>}>
      <Dictionary>{[
        [<Taglist inline tags={[
          'Git', 'Docker', 'Typescript', 'React', 'Node.js', 'Fastify'
        ]} />, <>
          Stack of choice, several projects
        </>],
        [<Taglist inline tags={['Linux']} />, <>Daily driver since 2016</>]
      ]}</Dictionary>
  </Section>
  <Spacer />
</main>