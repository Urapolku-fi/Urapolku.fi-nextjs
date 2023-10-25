import { classMerge as cm } from '@/lib/classMerge';
import classes from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'normal' | 'search' | 'rounded' | 'icon';
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
  const className = [];

  if (glow) className.push(classes.glow);
  if (outline) className.push(classes.outline);
  if (size == 'small') className.push(classes.small);
  if (size == 'medium') className.push(classes.medium);
  if (size == 'large') className.push(classes.large);
  if (variant == 'normal') className.push(classes.normal);
  if (variant == 'search') className.push(classes.search);
  if (variant == 'icon') className.push(classes.icon);
  if (variant == 'rounded') className.push(classes.rounded);
  if (dark) className.push(classes.dark);

  className.push(classes.button);

  return (
    <button className={cm(className, classNameProp)} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
