import { PureComponent } from 'react';

type Props = {
  startColor: string;
  endColor: string;
  idCSS: string;
  rotation: number;
};

export class GradientCircularProgressBar extends PureComponent<Props> {
  render() {
    const { startColor, endColor, idCSS, rotation } = this.props;

    const gradientTransform = `rotate(${rotation})`;

    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}
