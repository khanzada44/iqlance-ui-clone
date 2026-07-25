export const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const getIconSize = (size: 'sm' | 'md' | 'lg' = 'md') => {
  const sizes = {
    sm: 20,
    md: 24,
    lg: 28,
  };
  return sizes[size];
};

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 1280;
};