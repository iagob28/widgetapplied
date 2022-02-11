import { styled } from '@stitches/react'

export const Text = styled('p', {
  fontFamily: 'Inter',
  textAlign: 'center',
  display: 'flex',
  variants: {
    size: {
      small: { fontSize: '16px' },
      default: { fontSize: '18px' },
      large: { fontSize: '20px' },
    },
    weight: {
      default: { fontWeight: '500' },
      heavy: { fontWeight: '600' },
      light: { fontWeight: '400' },
    },
    position: {
      default: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
    },
    color: {
      white: { color: '#fff' },
      default: { color: '#666666' },
    },
  },

  defaultVariants: {
    size: 'default',
    weight: 'default',
    position: 'default',
    color: 'default',
  },
})
