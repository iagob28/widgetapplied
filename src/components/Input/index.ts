import { styled } from '@stitches/react'

export const Input = styled('input', {
  background: 'linear-gradient(to left, #5965E0, #4953B8)',
  border: 'none',
  borderRadius: '5px 0 0 5px',
  width: '340px',
  height: '80px',
  color: '#E0E3FF',
  padding: '0px 30px',
  fontSize: '20px',

  '&::placeholder': {
    color: '#E0E3FF',
  },

  '&:focus': {
    outline: '2px solid #4953B8',
  },
})
