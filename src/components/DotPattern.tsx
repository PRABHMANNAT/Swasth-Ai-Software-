import React, { useId } from 'react';

interface DotPatternProps {
  width?: number;
  height?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DotPattern = ({
  width = 20,
  height = 20,
  cx = 1,
  cy = 1,
  cr = 1,
  className = '',
  style,
}: DotPatternProps) => {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={className}
      style={style}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx={cx} cy={cy} r={cr} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
};

export default DotPattern;
