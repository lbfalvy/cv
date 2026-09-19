import React from 'react';
import './Timespan.scss';

export const Timespan = ({ from, to, className }: {
  from?: string,
  to?: string,
  className?: string
}): React.ReactElement => <address className={['Timespan', className].filter(Boolean).join(' ')}>
    {from ? `${from} - ` : null}{to ?? 'current'}
  </address>