export type Service = {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  whoFor: string[]
  icon: string
  href: string
  accentColor: 'teal' | 'mint'
}

export const services: Service[] = [
  {
    id: 'sports-injuries',
    name: 'Sports Injuries',
    shortDescription:
      'Support for sprains, strains, running injuries, and return-to-training planning.',
    fullDescription:
      "Whether you're a weekend runner, a gym regular, or a field sport athlete, sports-related injuries can disrupt training and daily life. Assessment focuses on understanding the injury, what's contributing to it, and building a practical plan to return to the activities you enjoy.",
    whoFor: [
      'Runners with knee, hip, or ankle concerns',
      'Gym-goers with shoulder or lower back pain',
      'Field sport athletes returning from a strain or sprain',
      'Active people managing overuse or overload injuries',
    ],
    icon: 'sports',
    href: '/sports-injuries',
    accentColor: 'teal',
  },
  {
    id: 'back-neck-pain',
    name: 'Back & Neck Pain',
    shortDescription:
      'Assessment and hands-on support for back, neck, and posture-related discomfort.',
    fullDescription:
      'Back and neck pain is common and can have many contributing factors. Assessment looks at your movement, habits, and history to identify what may be relevant — and builds a practical plan to support improvement over time.',
    whoFor: [
      'People with persistent lower back pain',
      'Those experiencing neck stiffness or headaches',
      'Anyone with posture-related discomfort',
      'Workers managing physical demands on the spine',
    ],
    icon: 'back',
    href: '/back-neck-pain',
    accentColor: 'mint',
  },
  {
    id: 'posture-desk-pain',
    name: 'Posture & Desk Pain',
    shortDescription:
      'Help for office workers dealing with shoulder, neck, and upper back tension from desk work.',
    fullDescription:
      'Long hours at a desk can contribute to shoulder, neck, and upper back discomfort. Assessment examines posture, workstation setup, and movement habits to support a practical, sustainable management plan.',
    whoFor: [
      'Office workers with neck and shoulder tension',
      'Remote workers managing desk-related pain',
      'People spending extended time at computers',
      'Anyone with upper back stiffness from screen time',
    ],
    icon: 'desk',
    href: '/services',
    accentColor: 'teal',
  },
  {
    id: 'rehab-strength',
    name: 'Rehab & Strength Programs',
    shortDescription:
      'Progressive exercise-based programs to rebuild strength, function, and confidence.',
    fullDescription:
      'Exercise-based rehabilitation helps restore function, rebuild strength, and support long-term movement health. Programs are tailored to your current capacity and progress over time with clear, measurable goals.',
    whoFor: [
      'People recovering from injury or surgery',
      'Those rebuilding strength after extended rest',
      'Athletes working through structured return-to-sport',
      'Anyone wanting to improve movement capacity and resilience',
    ],
    icon: 'rehab',
    href: '/services',
    accentColor: 'mint',
  },
  {
    id: 'work-injuries',
    name: 'Work-Related Injuries',
    shortDescription:
      'Assessment and management of physical workplace injuries and overuse conditions.',
    fullDescription:
      'Physical work demands can lead to a range of musculoskeletal concerns. Assessment addresses the injury, contributing work tasks, and relevant factors to support a practical recovery and return-to-work plan.',
    whoFor: [
      'Workers with lifting or repetitive strain concerns',
      'People recovering from workplace injuries',
      'Those managing chronic overuse from job demands',
      'Workers preparing for a return to physical duties',
    ],
    icon: 'work',
    href: '/services',
    accentColor: 'teal',
  },
  {
    id: 'mobility',
    name: 'Mobility & Movement Assessments',
    shortDescription:
      'Understand your movement patterns and identify areas to work on.',
    fullDescription:
      'A movement assessment provides a clear picture of how you move, where limitations exist, and what could be improved. Useful for those wanting to move better, reduce injury risk, or understand their body more clearly before a return to exercise.',
    whoFor: [
      'People wanting to improve general movement quality',
      'Active individuals seeking injury prevention insight',
      'Those returning to exercise after a break',
      'Anyone curious about how they move and where to improve',
    ],
    icon: 'mobility',
    href: '/services',
    accentColor: 'mint',
  },
]
