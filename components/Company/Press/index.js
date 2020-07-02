import Link from 'next/link'
import styles from './Press.module.scss'
import SectionIntro from '../../SectionIntro'

const Press = ({data}) => {
  let {pressReleases} = data

  return (
    <SectionIntro
        heading={data.press__heading}
        description={data.press__description}
    >
      <div className={styles.container}>
        {pressReleases.map(pressRelease => (
          <div className={styles.row}>
            <p>{pressRelease.date}</p>
            <p>{pressRelease.title}</p>
            <p>
              <Link href={pressRelease.link}>
                <a>View</a>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </SectionIntro>
  )
}

export default Press
