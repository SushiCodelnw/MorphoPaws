export default function BackgroundContainer({ background }) {
  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url("/src/assets/images/backgrounds/${background}.png")`,
      }}
    />
  );
}
