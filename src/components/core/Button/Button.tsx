import classes from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'normal' | 'search' | 'rounded';
  glow?: boolean;
  outline?: boolean;
  size?: 'small' | 'medium' | 'large';
  dark?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * A customizable button component.
 *
 * ## Default values:
 * - variant: 'normal'
 * - glow: false
 * - outline: false
 * - size: 'medium'
 * - onClick: () => {}
 *
 */
function Button({
  children,
  variant = 'normal',
  glow = false,
  outline = false,
  size = 'medium',
  dark = false,
  className: classNameProp,
  onClick = () => {},
}: ButtonProps) {
  let className = classes.button;

  if (glow) className += ` ${classes.glow}`;
  if (outline) className += ` ${classes.outline}`;
  if (size == 'small') className += ` ${classes.small}`;
  if (size == 'medium') className += ` ${classes.medium}`;
  if (size == 'large') className += ` ${classes.large}`;
  if (variant == 'normal') className += ` ${classes.normal}`;
  if (variant == 'search') className += ` ${classes.search}`;
  if (variant == 'rounded') className += ` ${classes.rounded}`;
  if (dark) className += ` ${classes.dark}`;

  return (
    <button className={`${className} ${classNameProp}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
