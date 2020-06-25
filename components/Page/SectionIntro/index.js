import styles from './SectionIntro.module.scss'

const SectionIntro = ({heading, description}) => (
  <section>
    <h2>{heading}</h2>
    <p>{description}</p>
  </section>
)

export default SectionIntro;
