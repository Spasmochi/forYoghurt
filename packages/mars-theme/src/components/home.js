import React, { useState } from 'react'
import { styled } from 'frontity'
import VideoHexagon from './videoHexagon'

const Home = () => {
  const [hasHover, setHasHover] = useState(false)
  return (
    <>
      <VideoHexagon visible={hasHover} />

      <Wrapper>
        <h1>
          Tap into your lost{' '}
          <Span
            onMouseEnter={() => setHasHover(true)}
            onMouseLeave={() => setHasHover(false)}
          >
            {' '}
            building
          </Span>{' '}
          and{' '}
          <Span
            onMouseEnter={() => setHasHover(true)}
            onMouseLeave={() => setHasHover(false)}
          >
            infrastructure
          </Span>{' '}
          data
        </h1>
        <p>
          Willow empowers owners and operators of buildings and infrastructure
          to make proactive, data-led decisions in real time through the power
          of WillowTwin.
        </p>
        <div>
          <Button>REQUEST A DEMO</Button>
          <Outlined>CONTACT US</Outlined>
        </div>
        <Play>
          <img
            src='https://testingeverything752826403.files.wordpress.com/2020/11/play.png'
            width='40'
            height='40'
          />
          Watch Video
        </Play>
      </Wrapper>
    </>
  )
}

export default Home

const Wrapper = styled.div`
  z-index: 1;
  @media (min-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 13rem;
  }
  @media (min-width: 1280px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  max-width: 80rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    @media (min-width: 768px) {
      font-size: 64px;
    }
    font-size: 32px;
    color: white;
    text-align: center;
    max-width: 750px;
    margin-top: 0;
    margin-bottom: 36px;
  }
  p {
    @media (max-width: 768px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    color: #918c94;
    line-height: 28px;
    max-width: 636px;
    text-align: center;
    margin-bottom: 22px;
  }
`

const Button = styled.button`
  border-radius: 0;
  cursor: pointer;
  color: white;
  background-color: #6d3bf4;
  border: 1px solid #6d3bf4;
  outline: none;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-right: 20px;
`
const Outlined = styled(Button)`
  border: solid 1px white;
  background-color: transparent;
  margin-right: 0;
`
const Play = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 38px;
  color: white;
  img {
    margin-right: 17px;
  }
`
const Span = styled.span`
  border-bottom: 2px solid white;
  cursor: pointer;
  &:hover {
    color: #ed4263;
    border-bottom: 2px solid #ed4263;
  }
`
