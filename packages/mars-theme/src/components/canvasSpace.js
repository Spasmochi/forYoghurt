import Particles from "react-particles-js";
import { styled } from "frontity";

const Container = styled.div`
  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function CanvasSpace() {
  return (
    <Container>
      <Particles
        params={{
          background: {
            color: {
              value: "#000",
            },
          },
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 1,
              random: true,
            },
            move: {
              direction: "right",
              speed: 0.05,
            },
            links: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </Container>
  );
}
