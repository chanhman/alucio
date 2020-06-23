const hero = ({heading, tagline, media, subheading, description}) => (
  <section>
    <div>
      <h1>{heading}</h1>
      <p>{tagline}</p>
    </div>
    <div>{media}</div>
    <div>
      <h2>{subheading}</h2>
      <p>{description}</p>
    </div>
  </section>
)

export default hero
