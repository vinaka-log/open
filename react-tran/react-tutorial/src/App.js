import React from 'react';
import { List } from './List';

class App extends React.Component {
  // stateの管理にはコンストラクタを使う
  // useStateを使う必要はない
  constructor(props) {
    super(props);
    this.state = { description: 'クリック前表示' }
  }

  changeDescription() {
    this.setState({
      description: 'クリック後の表示です。'
    })
  }

  render() {
    const { description } = this.state;
    return (
      <div>
        {description}
        < List title="取扱言語一覧" />
        <button onClick={() => this.changeDescription()}>ボタン</button>
      </div >
    )
  }

}

export default App;
