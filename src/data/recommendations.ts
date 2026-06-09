export type Recommendation = {
  id: string
  date: string
  excerpt: string
  recommenderName: string
  credentials: string
  role: string
  institution: string
  address: string
  contact: string
  course: string
  semester: string
  pdfPath: string
}

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'goje-2026',
    date: 'June 8, 2026',
    excerpt:
      'I am pleased to recommend Mr. Asadbek Xodjayev for admission to your Master’s program. Asadbek was a dedicated and hardworking student who demonstrated a solid understanding of networking concepts and strong analytical skills. He consistently showed enthusiasm for learning, completed his coursework responsibly, and participated actively in class. Based on his academic performance and commitment to his studies, I am confident that he has the potential to succeed in graduate-level education.',
    recommenderName: 'Dr. Nitin S. Goje',
    credentials: 'PhD, MCA, MSc, MBA',
    role: 'Professor and Program Lead, Computer Science',
    institution: 'Webster University, Tashkent',
    address: '13 Navoi Alisher, Tashkent, Uzbekistan – 100011',
    contact: '+998 900513464 · nitingoje@webster.edu',
    course: 'Network Principles',
    semester: 'Spring 2024',
    pdfPath: '/docs/recommendation-goje-2026.pdf',
  },
]
