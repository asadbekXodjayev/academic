export type CourseRecord = {
  name: string
  pending?: boolean
}

export type CourseCategory = {
  key: string
  courses: CourseRecord[]
}

export type Education = {
  institution: string
  location: string
  gpa: string
  csGpa: string
  courseCategories: CourseCategory[]
}

export const RESEARCH_INTEREST_KEYS = ['memorization', 'evaluation', 'tokenization', 'efficient'] as const

export const EDUCATION: Education = {
  institution: 'Webster University',
  location: 'Tashkent, Uzbekistan',
  gpa: '3.51 / 4.00',
  csGpa: '3.62 / 4.00',
  courseCategories: [
    {
      key: 'cs',
      courses: [
        { name: 'Data Structures I' },
        { name: 'Data Structures II' },
        { name: 'Principles of Programming Languages' },
        { name: 'Computer Languages' },
        { name: 'Computer Programming I' },
        { name: 'Computer Programming II' },
        { name: 'Operating Systems' },
        { name: 'Computer Architecture' },
        { name: 'Computer and Information Security' },
        { name: 'Network Principles' },
        { name: 'Social Engineering and Society' },
        { name: 'Systems Analysis and Design' },
        { name: 'IT Project Management' },
        { name: 'Database Concepts', pending: true },
        { name: 'Database Applications', pending: true },
      ],
    },
    {
      key: 'math',
      courses: [
        { name: 'Discrete Mathematics' },
        { name: 'Mathematics for Computer Science' },
        { name: 'College Algebra' },
        { name: 'Descriptive Statistics' },
        { name: 'Introduction to Statistics' },
        { name: 'Calculus I', pending: true },
      ],
    },
    {
      key: 'econ',
      courses: [
        { name: 'Survey of Economics' },
        { name: 'Basic Economic Modelling' },
        { name: 'Principles of Finance' },
        { name: 'Financial Accounting I' },
        { name: 'Managerial Accounting' },
        { name: 'Marketing' },
        { name: 'Intermediate Microeconomics', pending: true },
        { name: 'Intermediate Macroeconomics', pending: true },
        { name: 'Labor Economics', pending: true },
        { name: 'International Trade and Finance', pending: true },
      ],
    },
  ],
}
