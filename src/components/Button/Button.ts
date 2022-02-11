import { styled } from '@stitches/react'

export const Button = styled('button', {
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  alignSelf: 'center',
  gap: '5px',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    size: {
      default: {
        width: '389px',
        height: '80px',
        fontSize: '20px',
      },
      small: {
        width: '174px',
        height: '50px',
        fontSize: '14px',
      },
      square: {
        width: '80px',
        height: '80px',
        fontSize: '24px',
        borderRadius: '0 5px 5px 0',
      },
    },
    color: {
      blue: {
        background: '#5965E0',
        '&:hover': { filter: 'brightness(0.8)' },
        color: 'White',
      },
      heavyBlue: {
        background: '#4953B8',
        '&:hover': { filter: 'brightness(0.8)' },
        color: 'White',
      },
      white: {
        background: '#fff',
        '&:hover': { background: '#E83F5B', color: '#fff' },
        color: '#666666',
      },
      red: {
        background: '#E83F5B',
        color: '#fff',
        '&:hover': { filter: 'brightness(0.8)' },
      },
      green: {
        background: '#4CD62B',
        color: '#fff',
        '&:hover': { filter: 'brightness(0.8)' },
      },
    },
    display: {
      none: { display: 'none' },
      show: { display: 'flex' },
    },
    borderStyle: {
      none: { border: 'none' },
      complete: { borderBottom: '2px solid #4CD62B' },
    },
  },

  defaultVariants: {
    size: 'default',
    color: 'blue',
    borderStyle: 'none',
  },
})
