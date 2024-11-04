import { useState } from "react";

import {
  list1,
  list2,
  list2No2,
  list2No2No3,
  list2No3,
  list2No3No2,
  list3,
} from "./assets/content/story1";

import BackgroundContainer from "./components/BackgroundContainer";
import CharacterContainer from "./components/CharacterContainer";
import TextBox from "./components/TextBox";
import ChooseBox from "./components/ChooseBox";

function App() {
  const [time, setTime] = useState(0);
  const [list, setList] = useState([...list1]);

  const listMap = {
    list1,
    list2,
    list2No2,
    list2No2No3,
    list2No3,
    list2No3No2,
    list3,
  };

  const current = list[time];

  const handleChoice = (choice) => {
    setList(switchList(choice.nextList));
    setTime(0);
  };

  const handleClick = () => {
    time < list.length - 1 && setTime(time + 1);
  };

  const newList = (item) => {
    if (item) {
      setList(switchList(item));
      setTime(0);
    }
  };

  const switchList = (listName) => listMap[listName] || null;

  return (
    <div>
      <BackgroundContainer background={current.background} />
      <CharacterContainer character={current.character} />
      <TextBox
        word={current.word}
        speaker={current.speaker}
        hide={current.hide}
        nextList={() => newList(current.nextList)}
        onClick={handleClick}
      />
      {current.choices && (
        <ChooseBox choices={current.choices} onChoose={handleChoice} />
      )}
    </div>
  );
}

export default App;
