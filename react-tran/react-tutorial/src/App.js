import React from 'react';
import Form from './Form';
import { List } from './List';

class App extends React.Component {
  // stateの管理にはコンストラクタを使う
  // useStateを使う必要はない
  constructor(props) {
    super(props);
    this.state = { description: 'クリック前表示' }
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: 'list' })}>リスト</li>
            <li onClick={() => this.setState({ tab: 'form' })}>フォーム</li>
          </ul>
        </header>
        <hr />
        <div>
          {tab === 'list' ? <List /> : <Form />}
        </div >
      </div>
    )
  }

}

export default App;
