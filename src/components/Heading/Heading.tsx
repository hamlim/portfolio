import React from 'react';
import * as styles from './Heading.css';

interface Props<T extends React.ElementType> {
  is?: T | string;
  [rest: string]: unknown;
}

export default function Heading<T extends React.ElementType = 'h2'>({ is = 'h2', ...props }: Props<T> & React.ComponentPropsWithoutRef<T>) {
  const Element = is;

  return <Element className={styles.headingStyle} {...props} />;
}
