const { styled } = require('frontity')

const SmallHexagon = ({ top, left, width, height }) => (
  <Hexagon width={width} height={height} top={top} left={left} />
)

const Hexagon = styled.div`
  z-index: 1;
  overflow: hidden;
  position: absolute;
  width: ${({ width }) => (width ? `${width}px` : '0')};
  height: ${({ height }) => (height ? `${height}px` : '0')};
  top: ${({ top }) => (top ? `${top}em` : '0')};
  left: ${({ left }) => (left ? `${left}em` : '0')};
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
  background-color: #ed4263;
  opacity: 54%;
`
export default SmallHexagon
