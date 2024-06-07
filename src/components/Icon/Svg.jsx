export const Svg = ({ children, className, size, fill}) => {
    return (
      <svg
        fill={fill}
        className={className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size ? size : '20'}
        height={size ? size : '20'}
        viewBox="0 0 30 30"
        
      >
        {children}
      </svg>
    );
  };