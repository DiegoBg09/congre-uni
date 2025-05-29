import { Container, styled } from '@mui/material'

const PREFIX = 'Schedule'

export const classes = {

}

export default styled(Container, {
  name: PREFIX
})(({ theme: { breakpoints, spacing } }) => ({
  padding: spacing(4)
}))
