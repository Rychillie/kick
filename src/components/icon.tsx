type IconName = 'chevron-down';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

export default function Icon({
  className,
  width = 15,
  height = 15,
  name,
  ariaLabel,
  ariaHidden = true,
  ...rest
}: IconProps) {
  switch (name) {
    case 'chevron-down':
      return (
        <svg
          className={className}
          height={height}
          width={width}
          aria-label={ariaLabel || 'Chevron Down Icon'}
          aria-hidden={ariaHidden}
          fill="none"
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          <path
            d="M1 2.5L4 5.5L7 2.5"
            stroke="#0F1826"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
