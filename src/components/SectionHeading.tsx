interface SectionHeadingProps {
  badge?: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
  headingSize?: 'lg' | 'xl'
}

export default function SectionHeading({
  badge,
  heading,
  subheading,
  align = 'center',
  headingSize = 'xl',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const headingClass =
    headingSize === 'xl'
      ? 'text-3xl sm:text-4xl font-bold text-physio-text leading-tight'
      : 'text-2xl sm:text-3xl font-bold text-physio-text leading-tight'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {badge && (
        <span className="inline-block text-physio-clay-dark text-sm font-semibold tracking-wide uppercase mb-3">
          {badge}
        </span>
      )}
      <h2 className={headingClass}>{heading}</h2>
      {subheading && (
        <p className="mt-4 text-lg text-physio-mid leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  )
}
