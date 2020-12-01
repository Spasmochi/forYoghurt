const { styled } = require('frontity')
import SmallHexagon from './smallHexagon'

const VideoHexagon = ({ visible }) => {
  return (
    <Wrapper visible={visible}>
      <Section>
        <video id='video-file' autoplay='true' loop=''>
          <source
            src='http://hellosusan.io/assets/video.mp4'
            type='video/mp4'
          />
          <p>Your browser does not support the video tag.</p>
        </video>
      </Section>
      <SmallHexagon top={12} left={-10} width={57} height={65} />
      <SmallHexagon top={31} left={10} width={107} height={123} />
      <WhiteHexagon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='417'
          height='481.155'
          viewBox='0 0 417 481.155'
        >
          <path
            id='Fill_1'
            data-name='Fill 1'
            d='M208,0,0,120.011v240L208,480,416,360.011v-240Z'
            transform='translate(0.5 0.577)'
            fill='none'
            stroke='#f4f4f4'
            stroke-miterlimit='10'
            stroke-width='1'
          />
        </svg>
      </WhiteHexagon>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  display: ${({ visible }) => (visible === true ? 'block' : 'none')};
`

const Section = styled.div`
  display: block;
  z-index: 1;
  width: 495px;
  height: 540px;
  overflow: hidden;
  position: absolute;
  top: 115px;
  left: -12em;
  clip-path: polygon(
    50% 0%,
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  video {
    display: block;
    margin: 0 auto;
    width: auto;
    height: 100%;
  }
`

const WhiteHexagon = styled.div`
  position: absolute;
  z-index: 1;
  top: 11em;
  left: -14em;
`

export default VideoHexagon
