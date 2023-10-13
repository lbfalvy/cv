import { Temporal } from "@js-temporal/polyfill";
import Anchor from "./Anchor";
import "./Page2.scss";
import { Section, Spacer } from "./Section";
import { Taglist } from "./Taglist";
import { Unit } from "./Unit";

export const Page2 = () => <main className="Page2" >
  <header className="header">
    <h1>Portfolio</h1>
    <aside>
      <Unit style={{ marginRight: 5 }}>Github: <Anchor to="github.com/lbfalvy" />,</Unit>
      <Unit style={{ marginRight: 5 }}>Node packages: <Anchor to="www.npmjs.com/~lbfalvy" />,</Unit>
      <Unit>Rust crates: <Anchor to="crates.io/users/lbfalvy" /></Unit>
    </aside>
  </header>
  <Section title="Orchid" meta={<>
    <Taglist tags={["Rust"]} />
    <Anchor to="github.com/lbfalvy/orchid" />
  </>}>
    <p>
      My final year project at the University of Surrey was an interpreted functional programming language written in Rust. Implementing the language was a challenge in software architecture and project management, but it is one of the few projects where good design can be appreciated directly, since user experience <em>is</em> developer experience.
    </p>
  </Section>
  <Section title="Autocaddy" meta={<>
    <Taglist tags={["Linux", "Docker", "Bash"]} />
    <Anchor to="github.com/lbfalvy/autocaddy" />
  </>}>
    <p>
      Devops and server administration is an invaluable skill and an inescapable necessity for any company, but I'm not a company and I'd much prefer to put new projects online ASAP, so I set up this Docker container with the Caddy webserver to act as a zero-config HTTP gateway and TLS terminator for containers on my VPS. Each container gets its own subdomain based on its name.
    </p>
  </Section>
  <Section title="mini-events" meta={<>
    <Taglist tags={["Typescript"]} />
    <Anchor to="github.com/lbfalvy/mini-events" />
  </>}>
    <p>
      In Javascript events aren't objects in themselves, rather, they are identified by a name and an object. This is often a problem, as it makes transforming events as sequences impossible. mini-events is a thoroughly tested piece of core infrastructure used in many other projects I worked on which defines an event emitter as its own object and offers a range of tools to create, process and transform them. It was inspired by the iconic RxJS but aims to be much lighter in accordance with its role.
    </p>
  </Section>
  <Section title="react-await" meta={<>
    <Taglist tags={["Typescript", "React"]} />
    <Anchor to="github.com/lbfalvy/react-await" />
  </>}>
    <p>
      An alternative to React Suspense that manages loading state for you, so that you don't have to handle loading states within the parent of a component that uses asynchronous data. Just provide an async function for each asynchronous prop and specify the rest like normal. 
    </p>
    <p>
      This module uses advanced Typescript features to provide perfect types in all cases, changing the set of supported props dynamically to hide alternate forms of props which are already provided. Due to the asynchronous and document-based nature of the problem a manual test suite is provided.
    </p>
  </Section>
  <Section title="react-context-menu" meta={<>
    <Taglist tags={["Typescript", "React"]} />
    <Anchor to="github.com/lbfalvy/react-context-menu" />
  </>}>
    <p>
      There are other custom context menus for React, but none that I've tried are both as flexible and robust as I needed them to be. This one allows the developer to define context menu actions for parts of the DOM, which are stacked on each other in the menu if the regions are nested. It lays out submenus such that no option is hidden outside the screen, and allows the developer to define menu options as full React components to innovate beyond the basic single-buton menu element.
    </p>
    <p>
      I used this component in a university project to create a HTML-based interpretation of classic MUD (Multi-User Dungeon) games, its primary use case is web-based pro tools and dashboards.
    </p>
  </Section>
  <Section title="website" meta={<>
    <Anchor to="www.lbfalvy.com" />
  </>}>
    <p>
      I implemented a simple but versatile framework-agnostic SSG system on my blog using Puppeteer. All the articles are written in MDX, and they're all split into separate bundles to keep FMP low on each page. This was also my main use case for react-await.
    </p>
  </Section>
  <Spacer />
  <Section className="this-cv">
    <p>
      This CV is written in React. The latest version is available online at <Anchor to={`www.lbfalvy.com/cv/index.html${location.search}`} />. The code is on github at <Anchor to='github.com/lbfalvy/cv' />. This version was printed at {Temporal.Now.plainDateISO().toString()}.
    </p>
  </Section>
</main>