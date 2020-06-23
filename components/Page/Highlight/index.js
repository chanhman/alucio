const Highlight = ({heading, description, media}) => (
  <section>
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
    <div>
      {media}
    </div>
  </section>
)

export default Highlight
