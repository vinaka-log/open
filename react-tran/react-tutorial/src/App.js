import { useState } from 'react';
import { List } from './List';

function App() {
  const [description, setDesctiption] = useState('クリック前の表示');

  const changeDscription = () => {
    setDesctiption("クリック後の表示です");
  }
  return (
    <div>
      {description}
      <List title="取扱言語一覧 " />
      <button onClick={() => changeDscription}>ボタン</button>
    </div>
  );
}

export default App;
