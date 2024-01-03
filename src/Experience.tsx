import { Institute } from "./Institute";
import { Timespan } from "./Timespan";
import './Experience.scss';
import { Event } from "./Timeline";

export const Experience = ({
  from, to,
  project,
  role,
  employer,
  website,
  children,
}: {
  from: string, to?: string
  project?: string
  role: string
  employer?: string, website?: string
  children: React.ReactNode
}) => <>
  <Event header={<span className="Experience">
    <Timespan from={from} to={to} />
    {project ? <span className='project'><span className="projname">{project}</span></span> : null}
    <span className='role'>{role}</span>
    {employer? <Institute title={employer} website={website} /> :null}
  </span>}>
    {children}
  </Event>
</>