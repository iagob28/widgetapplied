import { styled } from '@stitches/react'

export const Button = styled('button', {
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  alignSelf: 'center',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    size: {
      default: {
        width: '389px',
        height: '80px',
      },
      small: {
        width: '174px',
        height: '50px',
      },
    },
    color: {
      blue: {
        background: '#5965E0',
        '&:hover': { filter: 'brightness(0.8)' },
        color: 'White',
      },
      white: {
        background: '#fff',
        '&:hover': { background: '#E83F5B', color: "#fff" },
        color: '#666666',
      }
    },
  },

  defaultVariants: {
    size: 'default',
    color: 'blue',
  },
})
