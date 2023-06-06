import './index.css'

const TechnologyDetails = props => {
  const {technologyCard} = props
  const {title, description, imgUrl, className} = technologyCard

  return (
    <li className={`${className} card-item`}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <div className="img-palce">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyDetails
