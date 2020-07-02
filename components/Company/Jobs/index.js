import Link from 'next/link'
import SectionIntro from '../../SectionIntro'
import styles from './Jobs.module.scss'

const Jobs = ({data}) => {
  let {jobOpenings} = data

  return (
    <SectionIntro
      heading={data.joinUs__heading}
      description={data.joinUs__description}
    >
      <div className={styles.container}>
        {jobOpenings.map(jobOpening => (
          <div className={styles.row}>
            <h3 className={styles.title}>{jobOpening.title}</h3>
            <Link href={jobOpening.link}>
              <a>View</a>
            </Link>
          </div>
        ))}
      </div>
    </SectionIntro>
  )
}

export default Jobs
