import './Page1.scss';
import Anchor from "./Anchor";
import { Taglist, aspnetcore, aws, csharp, docker, entity_framework, express, fastify, git, layered_arch, linq, linux, modx, node, php, automate, python, react, react_native, ruby, rush, rust, sharepoint, typescript, wordpress, sql, oop, fp, java, bash, elixir, wpf, tsql, powershell, azure_devops } from "./Taglist";
import { Dictionary } from "./Dictionary";
import { Section, Spacer } from "./Section";
import { Timeline } from "./Timeline";
import { Timespan } from "./Timespan";
import { Institute } from "./Institute";
import { Experience } from "./Experience";

export const Page1 = () => <main className='Page1'>
  <header className="header">
    <img className='pfp' src="https://eu2.contabostorage.com/b5fca1793241407290cf2335ba076411:assets/lbfalvy_com/cv-pic-square.jpg" width={100} />
    <h1>Lawrence Bethlenfalvy</h1>
    <address>Budapest, HU</address>
    <address><Anchor to='www.lbfalvy.com'/></address>
    <br/>
    <address>lbfalvy+cv@protonmail.com</address>
    <address>(+36) 70 701 0546</address>
  </header>
  <Section className='bio'>
    <div className='circlehack' />
    <p>I care deeply about developer experience. I observe how my teammates and I work and what factors help or hinder our flow, with special attention to how our toolchain serves us and how it could serve us better, and develop force-multiplying techniques and tools to improve our effectiveness. In accordance with this, my personal learning efforts focus on static analysis, testing, CI/CD, and a diverse range of programming languages and principles to apply to specific scenarios.</p>
  </Section>
  <Section className="education" compact>
    <article>
      <header>
        <h3>BSc (Computer Science)</h3>
        <Timespan to="2023" />
        <Institute title="University of Surrey" website="surrey.ac.uk" />
      </header>
      <main>
        <p>Studied a variety of languages, network programming, IoT, distributed computing, mainframes and enterprise cloud, verification. Participated in several group projects where I was responsible for the toolchain, infrastructure and CI. Created a programming language called Orchid.</p>
      </main>
    </article>
  </Section>
  <Section title="Experience">
    <Timeline>
      <Experience from="2024-04" role=".NET Developer" employer='Siemens Energy'>
        <p>Executed large scale refactoring on internal electric engineering design and manufacturing management software to accelerate development work. Developed a plug-in system with which independent teams closer to the stakeholder could deliver individual features</p>
        <Taglist tags={[csharp, wpf, tsql, powershell, azure_devops]} />
      </Experience>
      <Experience from="2022-12" to="2023-02" role="Full-stack React Developer" employer="Ruuby LTD." website="ruuby.com">
        <p>In a scrum team, developed mobile app for live data processing and associated API server. Established functional design patterns to improve static analysis and debugging experience.</p>
        <Taglist tags={[docker, node, typescript, react, rush, aws, react_native, express]} />
      </Experience>
      <Experience from="2022-04" to="2022-11" role="Wordpress Developer" employer="University of Surrey Students' Union" website='ussu.co.uk'>
        <p>Individually collected and enacted business objectives for optimal content structure in public-facing knowledge base. Optimized Wordpress site. Utilized low-code flows collaboratively to facilitate public communication from workgroups.</p>
        <Taglist tags={[php, wordpress, sharepoint, automate]} />
      </Experience>
      <Experience from='2020-02' to='2020-09' role='Full-stack Web Developer' employer='Research project at Eötvös Loránd University'>
        <p>Single-handedly developed interactive real-time PWA with user-defined content structure. Utilized PoC-s to align with rapidly evolving requirements through entire project lifecycle. Supported public launch spike under severe performance constraints.</p>
        <Taglist tags={[docker, node, typescript, react, fastify]} />
      </Experience>
      <Experience from='2018-10' to='2019-03' role='.NET Developer' employer='Remiz LTD'>
        <p>Completed enterprise webapp, Carefully optimized SQL for large volumes of traffic and data.</p>
        <Taglist tags={[csharp, aspnetcore, entity_framework, linq, layered_arch]} />
      </Experience>
      <Experience from="2016-06" to="2016-08" role="Web Developer Internship" employer='N-ware'>
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
          <>Stack of choice for practical purposes, several projects</>
        ],
        [<Taglist inline tags={[linux]} />, <>Daily driver since 2016</>],
        [<Taglist inline tags={[rust]} />, <>Preferred language for side projects since 2022</>],
      ]}</Dictionary>
  </Section>
  <Spacer />
</main>