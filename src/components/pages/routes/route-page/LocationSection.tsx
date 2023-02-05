export const LocationSection = ({location}) => {
  return (
    <section>
      <h2>Location</h2>
      <p>{location.lat}</p>
      <p>{location.lon}</p>
    </section>
  )
}