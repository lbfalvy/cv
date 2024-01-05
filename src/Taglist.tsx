import { classList } from "@lbfalvy/react-utils";
import React from "react";
import './Taglist.scss';
import { variable } from "@lbfalvy/mini-events";
import { useVariable } from "./useVariable";

/// External dependencies
export const rust_logo = "https://github.com/rust-lang/rust-artwork/blob/master/logo/rust-logo-512x512.png?raw=true";
export const aws_logo = "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg";
export const tux = "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg";
export const git_logo = "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg";
export const php_url = "https://www.php.net/images/logos/new-php-logo.svg";
export const wp_logo = "https://s.w.org/style/images/about/WordPress-logotype-wmark.png";
export const python_logo = "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg";
export const ruby_logo = "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg";

// Tags with external logos
export const rust = [rust_logo, "Rust"] as const;
export const aws = [aws_logo, "AWS"] as const;
export const linux = [tux, "Linux"] as const;
export const git = [git_logo, "Git"] as const;
export const php = [php_url, "PHP"] as const;
export const wordpress = [wp_logo, "WordPress"] as const;
export const python = [python_logo, "Python"] as const;
export const ruby = [ruby_logo, "Ruby"] as const;

// Tags with local SVG logos
export const java = ["./logos/java.svg", "Java"] as const;
export const docker = ["./logos/docker.svg", "Docker"] as const;
export const node = ["./logos/node-js.svg", "Node.js"] as const;
export const react = ["./logos/react.svg", "React.js"] as const;
export const react_native = [react[0], "React Native"] as const;
export const typescript = ["./logos/typescript.svg", "Typescript"] as const;
export const rush = ["./logos/rush.svg", "Rush.js"] as const;
export const fastify = ["./logos/fastify.svg", "Fastify"] as const;
export const express = "Express.js"
export const csharp = ["./logos/c-sharp.svg", "C#"] as const;
export const modx = ["./logos/modx.svg", "MODX"] as const;
export const sharepoint = ["./logos/sharepoint.svg", "SharePoint"] as const;
export const automate = ["./logos/automate.svg", "Power Automate"] as const;
export const bash = ["./logos/bash.svg", "Bash"] as const;

// Tags with no logos
export const aspnetcore = "ASP.NET Core MVC";
export const entity_framework = "Entity Framework";
export const linq = "Linq";
export const layered_arch = "Layered architecture";
export const sql = "SQL";
export const oop = "Object-oriented programming";
export const fp = "Functional programming";
export const network = "Network programming";

export type Tag = readonly [string, string] | string;

export const [setShowLogos, showLogos] = variable(true);

export function Taglist({ tags, inline }: {
  tags: Tag[]
  inline?: true
}): React.ReactElement {
  const logos = useVariable(showLogos)
  return <ul className={classList('Taglist', inline && 'inline')}>
    {tags.map((tag, i) => Array.isArray(tag)
      ? <li key={i} data-txt={tag[1]}>
        {logos ? <img src={tag[0]} alt={`${tag[1]} logo`} /> : null}
        <span>{tag[1]}</span>
      </li>
      : <li key={i}><span>{tag}</span></li>
    )}
  </ul>
}