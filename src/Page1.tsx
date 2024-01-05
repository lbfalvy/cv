import './Page1.scss';
import Anchor from "./Anchor";
import { Taglist, aspnetcore, aws, csharp, docker, entity_framework, express, fastify, git, layered_arch, linq, linux, modx, node, php, automate, python, react, react_native, ruby, rush, rust, sharepoint, typescript, wordpress, sql, oop, fp, java, bash, elixir } from "./Taglist";
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
    <p>I am effective independently but work well in a team and like to learn about alternative approaches. I also often take a support role, where diverse horizontal knowledge, research skills and effective communication allow me to understand the problem quickly and offer constructive input. I strive to ensure total clarity in requirements as well as code. I like learning new tools and do so quickly.</p>
  </Section>
  <Section className="education" compact>
    <article>
      <header>
        <h3>BSc (Computer Science)</h3>
        <Timespan to="2023" />
        <Institute title="University of Surrey" website="surrey.ac.uk" />
      </header>
      <main>
        <p>Studied java, Ruby on Rails, network programming, IoT, distributed computing with Elixir and mainframe computing with IBM Z-OS and OpenShift, verification. Participated in several group projects with dynamic teams. Created a programming language called Orchid.</p>
      </main>
    </article>
  </Section>
  <Section title="Experience">
    <Timeline>
      <Experience from="2022-12" to="2023-02" role="Full-stack React Developer" employer="Ruuby LTD." website="ruuby.com">
        <p>In a scrum team, added features and improved code quality of appointment manager mobile app and API server. Established functional design patterns to improve static analysis and identify lurking bugs.</p>
        <Taglist tags={[docker, node, typescript, react, rush, aws, react_native, express]} />
      </Experience>
      <Experience from="2022-04" to="2022-11" role="Wordpress Developer" employer="University of Surrey Students' Union" website='ussu.co.uk'>
        <p>Collected business objectives, designed and implemented optimal content structure in public-facing knowledge base. Optimized Wordpress site for deployment on an underpowered VPS. Maintained and created Power Automate flows to generate and publish reports from workgroup documents.</p>
        <Taglist tags={[php, wordpress, sharepoint, automate]} />
      </Experience>
      <Experience from='2020-02' to='2020-09' role='Full-stack Web developer' employer='Research project at Eötvös Loránd University'>
        <p>Managed and developed interactive real-time PWA with user-defined content structure. Built proof-of-concepts, collected feedback and implemented rapidly evolving requirements through entire project lifecycle. Supported public launch with 1000 concurrent user spike without friction on an EC2 t1-nano.</p>
        <Taglist tags={[docker, node, typescript, react, fastify]} />
      </Experience>
      <Experience from='2018-10' to='2019-03' role='.NET developer' employer='Remiz LTD'>
        <p>Added features and fixed bugs in enterprise-scale codebase. Optimized queries to support large volumes of traffic and data.</p>
        <Taglist tags={[csharp, aspnetcore, entity_framework, linq, layered_arch]} />
      </Experience>
      <Experience from="2016-06" to="2016-08" role="Web developer" employer='N-ware'>
        <p>Planned and implemented i18n for company website. Contributed to mathematical foundations for global nautical navigation system.</p>
        <Taglist tags={[csharp, modx, php]} />
      </Experience>
    </Timeline>
  </Section>
  <Section title='Skills' meta={<>
    <Taglist tags={[rust, java, python, csharp, ruby, elixir, bash, php, aws, sql, express, react_native, rush, aspnetcore, entity_framework, linq, layered_arch, oop, fp, modx, wordpress]} />
  </>}>
      <Dictionary>{[
        [
          <Taglist inline tags={[docker, node, typescript, react, git, fastify]} />,
          <>Stack of choice, several projects</>
        ],
        [<Taglist inline tags={[linux]} />, <>Daily driver since 2016</>]
      ]}</Dictionary>
  </Section>
  <Spacer />
</main>