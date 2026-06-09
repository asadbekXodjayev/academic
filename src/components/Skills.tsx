import { motion, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { SKILL_GROUPS } from '../data/content'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const tagVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Skills() {
  const { t } = useTranslation()

  return (
    <motion.section
      id="skills"
      className="section section--alt"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="section__meta">
          <span className="section__label">{t('skills.section_label')}</span>
          <span className="section__index" aria-hidden="true">03</span>
        </div>
        <h2 id="skills-heading" className="section__heading">{t('skills.heading')}</h2>

        <div className="skills__table" role="list">
          {SKILL_GROUPS.map((group) => (
            <div key={group.key} className="skills__group" role="listitem">
              <span className="skills__group-label">{t(`skills.${group.key}`)}</span>
              <motion.ul
                className="skills__tags"
                variants={groupVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5%' }}
                aria-label={t(`skills.${group.key}`)}
              >
                {group.skills.map((skill) => (
                  <motion.li key={skill.name} className="skill-tag" variants={tagVariant}>
                    {skill.name}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
