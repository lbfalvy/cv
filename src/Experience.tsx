import { Institute } from "./Institute";
import { Timespan } from "./Timespan";
import './Experience.scss';

export const Experience = ({
  from, to,
  project,
  role,
  employer
}: {
  from: string, to?: string
  project?: string
  role: string
  employer?: [string] | [string, string]
}) => <span className="Experience">
  <Timespan from={from} to={to} />
  {project ? <span className='project'><span className="projname">{project}</span></span> : null}
  <span className='role'>{role}</span>
  {employer? <Institute title={employer[0]} website={employer[1]} /> :null}
</span>