export type Recommendation = {
  id: string
  date: string
  dateTime: string
  excerpt: string
  recommenderName: string
  credentials: string
  role: string
  institution: string
  course: string
  semester: string
}

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'goje-2026',
    date: 'June 8, 2026',
    dateTime: '2026-06-08',
    excerpt:
      'Asadbek was a dedicated and hardworking student who demonstrated a solid understanding of networking concepts and strong analytical skills.',
    recommenderName: 'Dr. Nitin S. Goje',
    credentials: 'PhD, MCA, MSc, MBA',
    role: 'Professor and Program Lead, Computer Science',
    institution: 'Webster University, Tashkent',
    course: 'Network Principles',
    semester: 'Spring 2024',
  },
]
