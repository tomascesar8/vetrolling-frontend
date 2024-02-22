export const Title = ({ title, description }) => {
  return (
    <>
      <h2 className="title px-2">{title}</h2>
      {description? <p className="description px-2">{description}</p> : null}
    </>
  )
}