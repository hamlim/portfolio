import { style } from '@vanilla-extract/css'
import { theme } from '../../theme/theme.css'

export const article = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.normal,
  paddingTop: theme.space[200],
  paddingBottom: theme.space[200],
})

export const caption = style({
  fontSize: 14,
})

export const header = style({
  position: 'absolute',
  top: 0,
  transform: ' translateY(-50%)',
  insetInlineStart: 10,

  // used for single line clamp
  // insetInline: 10,
})

export const heading = style({
  // used for single line clamp
  // display: 'inline-block',
  //  maxWidth: '100%',
  //  textOverflow: 'ellipsis',
  //  whiteSpace: 'nowrap',
  //  overflow: 'hidden',

  fontSize: '24px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '2',
  paddingInline: theme.space[200],
  backgroundColor: theme.colors.background,
})

export const description = style({
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: '3',

  paddingInline: theme.space[100],
})
