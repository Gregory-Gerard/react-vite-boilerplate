import React from 'react';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'text-sm' | 'text-md' | 'text-lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'text-md',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-blue-500 text-white' : 'bg-gray-200 text-body';

  return (
    <button
      type="button"
      className={`px-4 py-1 rounded-full ${mode} ${size}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
