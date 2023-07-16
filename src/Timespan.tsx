import { classList } from '@lbfalvy/react-utils';
import React from 'react';
import './Timespan.scss';

export const Timespan = ({ from, to, className }: {
  from: string,
  to?: string,
  className?: string
}): React.ReactElement => <address className={classList('Timespan', className)}>
  {from} - {to ?? 'current'}
</address>