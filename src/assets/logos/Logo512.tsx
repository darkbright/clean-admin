interface LogoProp {
  width?: number;
  color?: string;
  hasIcon?: boolean;
}

/**
 * React 로고
 * @param {LogoProp} LogoProp
 * @returns React Component(SVG)
 */

function Logo({ width = 280 }: LogoProp) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src="/logo512.png" width={width} />;
}

export default Logo;
