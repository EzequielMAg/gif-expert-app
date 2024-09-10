
export const GifItem = ({ title, url }) => {
  return (
        <div className="card">
            {/* <img src={  image.url } ></img> */}
            {/* <h2>{ image.title }</h2> */}
            <img src={  url } alt={ title }></img>
            <p>{ title }</p>
        </div>
  )
}
