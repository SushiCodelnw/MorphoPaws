export default function CharacterContainer({ character }) {
  const { name, reaction, size } = character || {};
  const sizeStyle = {
    "800*1000": { height: "90vh", width: "72vh" },
    "1000*1000": { height: "90vh", width: "90vh" },
    "600*600": { height: "100vh", width: "100vh" },
  };
  return (
    <div
      className="character-container"
      style={{
        backgroundImage: `url("/src/assets/images/characters/${name}/${reaction}.png")`,
        ...sizeStyle[size],
      }}
    />
  );
}
