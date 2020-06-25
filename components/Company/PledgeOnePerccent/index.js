import styles from './PledgeOnePercent.module.scss'

const PledgeOnePercent = ({heading, description, ctaLbl}) => (
  <section>
    <h2>{heading}</h2>
    <p>{description}</p>
    <a href="#">{ctaLbl}</a>
  </section>
)

export default PledgeOnePercent
