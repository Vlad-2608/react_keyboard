import React from 'react';

// interface State {
//   pressedKey: string;
// }

// export class App extends React.Component<{}, State> {
//   setState(_arg0: { pressedKey: string }) {
//     throw new Error('Method not implemented.');
//   }

//   state: Readonly<State> = {
//     pressedKey: 'Nothing was pressed yet',
//   };

//   handleKeyUp = (event: KeyboardEvent) => {
//     this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
//   };

//   componentDidMount(): void {
//     document.addEventListener('keyup', this.handleKeyUp);
//   }

//   componentWillUnmount(): void {
//     document.removeEventListener('keyup', this.handleKeyUp);
//   }

//   render(): React.ReactNode {
//     const { pressedKey } = this.state;

//     return (
//       <div className="App">
//         <p className="App__message">{pressedKey}</p>
//       </div>
//     );
//   }
// }

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
