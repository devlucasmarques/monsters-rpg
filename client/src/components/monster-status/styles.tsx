import styled from 'styled-components';

interface ISide {
  side: 'left' | 'right';
}

interface IXP extends ISide {
  progress: number;
}

interface IBar extends ISide {
  progress: number;
  width: number;
  top: number;
  color: string;
}

const XP = styled.div<IXP>`
  width: 70px;
  height: 70px;
  margin-top: 20px;

  margin-left: ${(props) => (props.side === 'left' ? 0 : '100px')};

  svg {
    position: relative;
    width: 70px;
    height: 70px;
    z-index: 1;
    transform: rotate(270deg);

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: #111;
      stroke-width: 6;
      stroke-linecap: round;
      transform: translate(5px, 5px);
      z-index: 2;

      &:nth-child(2) {
        stroke-width: 4;
        stroke-dasharray: 190;
        transition: stroke-dashoffset 1s;
        stroke-dashoffset: calc(
          190 - (${(props) => props.progress} / 100 * 190)
        );
        stroke: #ddd;
        z-index: 3;
      }
    }
  }
`;

const Level = styled.div<ISide>`
  background-color: blue;
  color: white;
  position: absolute;
  width: 25px;
  z-index: 4;
  border-radius: 5px;
  padding: 4px;
  text-align: center;
  font-weight: 900;
  font-size: 10px;
  margin: -10px 0 0 ${(props) => (props.side === 'left' ? '25px' : '125px')};
`;

const Text = styled.div<ISide>`
  position: absolute;
  width: 100px;
  margin: -70px 0 0 ${(props) => (props.side === 'left' ? '70px' : '0px')};

  p {
    font-weight: 900;
    letter-spacing: 1px;
    color: white;
    text-shadow: #000 0px 0px 2px;
    text-align: ${(props) => props.side};
  }
`;

const HeadImg = styled.img<ISide>`
  position: absolute;
  transform: ${(props) => (props.side === 'left' ? 'scaleX(-1)' : 'scaleX(1)')};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: -65px 0 0 ${(props) => (props.side === 'left' ? '5px' : '105px')};
`;

const Bar = styled.div<IBar>`
  width: ${(props) => props.width}px;
  height: 10px;
  border-radius: 4px;
  position: absolute;
  background-color: ${(props) => props.color};
  display: flex;
  margin: ${(props) => props.top}px 0 0
    ${(props) => (props.side === 'left' ? '70px' : '0px')};
  justify-content: ${(props) =>
    props.side === 'left' ? 'flex-start' : 'flex-end'};

  div {
    transition: width 1s;
    width: ${(props) => props.progress}%;
    background-color: #000;
    border-radius: 4px;
    margin: 1px;
    height: 8px;
    opacity: 0.5;
    content: '';
    position: relative;
  }
`;

export { XP, Level, Text, HeadImg, Bar };
