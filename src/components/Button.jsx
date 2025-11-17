import React from 'react'

const styles = {
  base: 'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
  primary: 'bg-[#FF4A76] text-white hover:brightness-110 shadow-sm focus:ring-[#FF4A76]',
  secondary: 'bg-white text-[#0065A8] border border-[#0065A8] hover:bg-[#0065A8] hover:text-white focus:ring-[#0065A8]',
  lg: 'px-6 py-3 text-base',
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-4 py-2 text-sm'
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, as = 'button', href, ...props }) {
  const Comp = href ? 'a' : as
  const cls = `${styles.base} ${styles[variant]} ${styles[size]} ${className}`
  return (
    <Comp href={href} className={cls} {...props}>
      {children}
    </Comp>
  )
}
