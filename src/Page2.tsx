import { Temporal } from "@js-temporal/polyfill";
import Anchor from "./Anchor";
import "./Page2.scss";
import { Section, Spacer } from "./Section";
import { Taglist, bash, docker, fp, linux, network, react, rust, typescript } from "./Taglist";
import { Unit } from "./Unit";
import { useVariable } from "./useVariable";
import { focus } from "./Options";

export const Page2 = () => <main className="Page2" >
  <header className="header">
    <h1>Portfolio</h1>
    <aside>
      <Unit>Github: <Anchor to="github.com/lbfalvy" />,</Unit>
      <Unit>Node packages: <Anchor to="www.npmjs.com/~lbfalvy" />,</Unit>
      <Unit>Rust crates: <Anchor to="crates.io/users/lbfalvy" /></Unit>
    </aside>
  </header>
  <Section title="Orchid" meta={<>
    <Taglist tags={[rust]} />
    <Anchor to="git.lbfalvy.com/Orchid/orchid" />
  </>}>
    <p>My final year project at the University of Surrey was an interpreted functional programming language written in Rust. Implementing the language was a challenge in software architecture and project management, but it is one of the few projects where good design can be appreciated directly, since user experience <em>is</em> developer experience. In the years since it has been a testbed for my experiments into managing complexity in large Rust projects.</p>
  </Section>
  <Section title="Orchid LS" meta={<>
    <Taglist tags={[rust, typescript]} />
    <Anchor to="github.com/lbfalvy/orchid-ls" />
  </>}>
    <p>VSCode plugin for Orchid language support. Editor support is an essential piece of developer experience and Orchid has been designed from first principles to be easy to integrate so this was a both an essential piece to develop early on and really enjoyable to work on.</p>
  </Section>
  <Section title="Shopkeeper" meta={<>
    <Taglist inline tags={[rust, network]} />
    <Anchor to="github.com/lbfalvy/shopkeeper" />
  </>}>
    <p>Shopkeeper was my submission for a university assignment to define a UDP-based protocol in a group and implement it. It's a read-only file access protocol, which there are many of already on the market, but its key advantage is that it's entirely connectionless, therefore clients can employ clever techniques to achieve far better download speeds under unusual network conditions than TCP-based protocols such as HTTP 1/2 or FTP.</p>
  </Section>
  <Section title="Lemego" meta={<>
    <Taglist tags={[docker, linux, bash]} />
    <Anchor to="github.com/lbfalvy/lemego" />
  </>}>
    <p>Devops and server administration is an invaluable skill and an inescapable necessity for any company, but I'm not a company and I'd much prefer to put new projects online ASAP, so I set up this tiny Docker container with the Lego DNS certificate utility to manage my wildcard TLS certificate. It has been working with no hiccups on two servers for many years.</p>
  </Section>
  <Section title="Memorize, Substack" meta={<>
    <Taglist inline tags={[rust, fp]} />
    <div style={{ display: "inline flex", flexDirection: "column" }}>
      <Anchor to="github.com/lbfalvy/memorize" />
      <Anchor to="github.com/lbfalvy/substack" />
    </div>
  </>}>
    <p>Orchid needed a variety of primitives to solve specific well-defined recurring tasks. After these ones survived multiple changes in architecture, I started converting them into well tested and documented modules.</p>
    <p>Memorize is a powerful function cache for dynamic programming, while Substack is a simple datastructure to allow recursive algoirthms to query context using Rust's iterators.</p>
  </Section>
  <Section title="react-context-menu" meta={<>
    <Taglist tags={[typescript, react]} />
    <Anchor to="github.com/lbfalvy/react-context-menu" />
  </>}>
    <p>There are other custom context menus for React, but none that I've tried are both as flexible and robust as I needed them to be. This one allows the developer to define context menu actions for parts of the DOM, which are stacked on each other in the menu if the regions are nested. It lays out submenus such that no option is hidden outside the screen, and allows the developer to define menu options as full React components to innovate beyond the basic single-buton menu element.</p>
    <p>I used this component in a university project to create a HTML-based interpretation of classic MUD (Multi-User Dungeon) games, its primary use case is web-based pro tools and dashboards.</p>
  </Section>
  <Section title="website" meta={<>
    <Anchor to="www.lbfalvy.com" />
  </>}>
    <p>A simple but effective blog built on Astro. Articles are written in MDX and has both syntax-highlighting in popular languages with off-the-shelf plugins, and my own experimental language with a custom component. I write about Rust and language development every once in a while.</p>
  </Section>
  <Spacer />
  <Section className="this-cv">
    <p>This CV is written in React for hot reload and convenient structure. The latest version is available online at <Anchor to={`lbfalvy.github.io/cv/index.html${location.search}`} />. The code is on github at <Anchor to='github.com/lbfalvy/cv' />. This version was printed at {Temporal.Now.plainDateISO().toString()}.</p>
  </Section>
</main>