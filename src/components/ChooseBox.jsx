export default function ChooseBox({ choices, onChoose }) {
  return (
    <div className="chooses-box">
      {choices.map((choice, index) => (
        <button
          key={index}
          className="-choose-button"
          onClick={() => onChoose(choice)}
        >
          {choice.word}
        </button>
      ))}
    </div>
  );
}
