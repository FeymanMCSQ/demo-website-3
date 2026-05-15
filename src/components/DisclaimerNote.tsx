interface DisclaimerNoteProps {
  variant?: 'subtle' | 'inline'
  className?: string
}

export default function DisclaimerNote({
  variant = 'subtle',
  className = '',
}: DisclaimerNoteProps) {
  if (variant === 'inline') {
    return (
      <p className={`text-sm text-physio-muted bg-physio-sand rounded-lg p-3 border border-physio-border ${className}`}>
        <strong className="font-medium text-physio-mid">Demo notice:</strong>{' '}
        This is a fictional concept website built for portfolio purposes. Do not
        submit private medical information through this form.
      </p>
    )
  }

  return (
    <p className={`text-xs text-physio-muted ${className}`}>
      This is a fictional concept website for portfolio purposes only. Not a
      real clinic. Not medical advice.
    </p>
  )
}
