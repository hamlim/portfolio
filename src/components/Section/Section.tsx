import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'
import * as styles from './Section.css'
import Heading from '../Heading'
import cx from 'classnames'

interface Props<T extends ElementType> {
  is?: T | string
  children?: ReactNode
  heading?: ReactNode
  className?: string
  headingIs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Section<T extends ElementType = 'section'>({
  is = 'section',
  children,
  heading,
  className = undefined,
  headingIs,
}: Props<T> & ComponentPropsWithoutRef<T>) {
  const Element = is

  return (
    <Element
      className={cx(styles.section, {
        [className]: className,
      })}
    >
      <div className={styles.heading}>
        {heading && (
          <Heading is={headingIs} fontSize={14}>
            {heading}
          </Heading>
        )}
      </div>
      {children}
    </Element>
  )
}
