const Button = ({ 
    variant = 'primary', 
    size = 'md',
    children, 
    className = '',
    href,
    ...props 
  }) => {
    const baseClasses = "font-bold font-display rounded-lg transition-colors inline-flex items-center justify-center"
    
    const variants = {
      primary: "bg-brand-300 hover:bg-brand-400 text-black transition-all",
      secondary: "border-2 border-zinc-200 bg-white/60 text-gray-800 hover:border-brand-400 hover:bg-brand-400 bg-transparent transition-all",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
      text: "text-brand-600 hover:text-brand-700 hover:bg-brand-50"
    }
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2 text-base", 
      lg: "px-8 py-4 text-lg"
    }
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
    
    if (href) {
      return (
        <a 
          href={href}
          className={classes}
          {...props}
        >
          {children}
        </a>
      )
    }
    
    return (
      <button 
        className={classes}
        {...props}
      >
        {children}
      </button>
    )
  }

export default Button