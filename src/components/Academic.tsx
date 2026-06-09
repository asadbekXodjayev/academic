import { motion, type Variants } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { EDUCATION, RESEARCH_INTEREST_KEYS } from '../data/academic'
import type { CourseRecord } from '../data/academic'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
}

const staggerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function CourseRow({ course }: { course: CourseRecord }) {
  return (
    <li className="cw-row">
      <span className="cw-row__name">{course.name}</span>
    </li>
  )
}

export default function Academic() {
  const { t } = useTranslation()
  const edu = EDUCATION

  return (
    <motion.section
      id="academic"
      className="section section--alt"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      aria-labelledby="academic-heading"
    >
      <div className="container">
        <div className="section__meta">
          <span className="section__label">{t('academic.section_label')}</span>
          <span className="section__index" aria-hidden="true">02</span>
        </div>
        <h2 id="academic-heading" className="section__heading">{t('academic.heading')}</h2>

        <div className="academic__layout">

          {/* Left column: Objective + Education card */}
          <div className="academic__left">

            <div className="academic__block">
              <h3 className="academic__block-label">{t('academic.objective_label')}</h3>
              <p className="academic__objective">{t('academic.objective')}</p>
            </div>

            <div className="academic__block">
              <h3 className="academic__block-label">{t('academic.education_label')}</h3>
              <div className="edu-card" aria-label={`${t('academic.edu_degree')} — ${t('academic.edu_majors_label')}`}>
                <div className="edu-card__header">
                  <div>
                    <p className="edu-card__institution">{edu.institution}</p>
                    <p className="edu-card__location">{edu.location}</p>
                  </div>
                  <div className="edu-card__right">
                    <p className="edu-card__degree">{t('academic.edu_degree')}</p>
                    <p className="edu-card__field">{t('academic.edu_major_cs')}</p>
                    <p className="edu-card__field">{t('academic.edu_major_econ')}</p>
                    <p className="edu-card__period">{t('academic.edu_period')}</p>
                  </div>
                </div>
                <dl className="edu-card__stats">
                  <div className="edu-card__stat">
                    <dt className="edu-card__stat-label">{t('academic.gpa')}</dt>
                    <dd className="edu-card__stat-value">{edu.gpa}</dd>
                  </div>
                  <div className="edu-card__stat">
                    <dt className="edu-card__stat-label">{t('academic.credits')}</dt>
                    <dd className="edu-card__stat-value">{edu.credits}</dd>
                  </div>
                  <div className="edu-card__stat">
                    <dt className="edu-card__stat-label">{t('academic.expected_grad')}</dt>
                    <dd className="edu-card__stat-value">{t('academic.edu_expected_grad_value')}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="academic__block">
              <h3 className="academic__block-label">{t('academic.research_label')}</h3>
              <motion.ul
                className="research-list"
                variants={staggerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5%' }}
                aria-label={t('academic.research_label')}
              >
                {RESEARCH_INTEREST_KEYS.map((key) => (
                  <motion.li key={key} className="research-item" variants={itemVariant}>
                    <span className="research-item__area">{t(`academic.ri_${key}`)}</span>
                    <span className="research-item__note">{t(`academic.ri_${key}_note`)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

          </div>

          {/* Right column: Coursework table */}
          <div className="academic__right">
            <h3 className="academic__block-label">{t('academic.relevant_courses')}</h3>
            <div className="coursework">
              {edu.courseCategories.map((cat) => (
                <div key={cat.key} className="cw-category">
                  <p className="cw-category__label">{t(`academic.cat_${cat.key}`)}</p>
                  <ul className="cw-list" aria-label={t(`academic.cat_${cat.key}`)}>
                    {cat.courses.map((c) => (
                      <CourseRow key={c.name} course={c} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}
