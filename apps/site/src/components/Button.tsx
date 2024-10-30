import { styled } from 'styles/stitches.config'

export const Button = styled('button', {
  padding: '$5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  borderRadius: '$r4',
  transition: 'background-color 200ms ease-out',

  '& > svg': {
    transition: 'opacity 200ms ease-out',
    opacity: 0.6,
  },

  hover: {
    backgroundColor: '#fafafa33',

    '& > svg': {
      opacity: 1,
    },
  },
})
