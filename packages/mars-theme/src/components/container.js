import React from 'react'
import { styled } from 'frontity'

const Wrapper = styled.div`
  width: fit-content;
  height: auto;
`

const Container = props => <Wrapper>{props.children}</Wrapper>

export default Container
