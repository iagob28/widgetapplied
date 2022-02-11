import { styled } from '@stitches/react'

export const Title = styled('h1', {
  fontFamily: 'Inter',
  textAlign: 'center',
  marginBottom: '5px',
  variants: {
    size: {
      small: { fontSize: '20px' },
      default: { fontSize: '24px' },
      large: { fontSize: '30px' },
    },
    color: {
      default: { color: '#2E384D' },
      blue: { color: '#5965E0' },
      white: { color: '#fff' },
    },
    weight: {
      default: { fontWeight: '500' },
      heavy: { fontWeight: '600' },
      light: { fontWeight: '400' },
    },

    align: {
      default: { textAlign: 'center' },
      left: { textAlign: 'start' },
    },
  },

  defaultVariants: {
    size: 'default',
    color: 'default',
    weight: 'default',
    align: 'default',
  },
})
