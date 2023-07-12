const HavaDurumu = ({ weather }) => {
  if (!weather) {
    return <p>Lokasyon erişimine izin vermeniz gerekiyor...</p>;
  }

  return (
    <>
      <h3>{weather?.name}</h3>
      <h4>{weather?.weather.map((data) => data.description).join(", ")}</h4>
      <p>{weather?.main.temp}</p>
      <p>{new Date(weather?.dt * 1000).toLocaleDateString()}</p>
    </>
  );
};

export default HavaDurumu;
