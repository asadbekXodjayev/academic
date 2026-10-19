export type ResearchStat = {
  key: string
  value: string
}

export type Contribution = {
  id: string
  repo: string
  pr: number
  url: string
  merged: string
  descKey: string
}

export const MATHGEN = {
  repoUrl: 'https://github.com/asadbekXodjayev/math-v',
  // REF arm, mean over 5 seeds (research/PILOT_REPORT.md §5 in the math-v repo)
  stats: [
    { key: 'seen', value: '99.7%' },
    { key: 'unseen', value: '92.0%' },
    { key: 'block', value: '39.4%' },
    { key: 'longer', value: '0.3%' },
  ] satisfies ResearchStat[],
  findingKeys: ['leak', 'verifier', 'study'] as const,
  tech: ['PyTorch', 'Transformer from scratch', 'BPE', 'Pre-registration', 'Bootstrap CIs'],
}

export const CONTRIBUTIONS: Contribution[] = [
  {
    id: 'megatron-5445',
    repo: 'NVIDIA Megatron-LM',
    pr: 5445,
    url: 'https://github.com/NVIDIA/Megatron-LM/pull/5445',
    merged: '2026-07-10',
    descKey: 'research.oss_megatron',
  },
  {
    id: 'skillspector-166',
    repo: 'NVIDIA SkillSpector',
    pr: 166,
    url: 'https://github.com/NVIDIA/SkillSpector/pull/166',
    merged: '2026-06-23',
    descKey: 'research.oss_ss166',
  },
  {
    id: 'skillspector-167',
    repo: 'NVIDIA SkillSpector',
    pr: 167,
    url: 'https://github.com/NVIDIA/SkillSpector/pull/167',
    merged: '2026-06-27',
    descKey: 'research.oss_ss167',
  },
]
