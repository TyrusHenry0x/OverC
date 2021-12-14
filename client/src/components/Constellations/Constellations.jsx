const Constellations = (constellations) => {
  return (
    <div className="background-image">
      <div className="Constellations">
        <h1>Constellations</h1>
        {constellations.constellations.map((constellation) => (
          <p key={constellation.id}>{constellation.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Constellations;