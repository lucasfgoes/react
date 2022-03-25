import "./App.css";
import { Component } from "react";

class App extends Component {
  // class fields
  state = {
    name: "lucas",
    url: "http://www.google.com",
    counter: 0,
    content: null,
  };
  timeOutUpdate = null;

  // smp qnd o estado é trocado a função render é chamada novamente.

  handlePClick = () => {
    this.setState({ name: "lucas góes" });
  };

  handleTimeOut = () => {
    const { counter } = this.state;
    this.timeOutUpdate = setTimeout(() => {
      this.setState({
        content: [
          {
            id: 1,
            titulo: `Meu título ${counter + 1}`,
            paragrafo: "meu parágrafo",
          },
          {
            id: 2,
            titulo: `Meu título ${counter + 2}`,
            paragrafo: "meu parágrafo",
          },
        ],
        counter: counter + 1,
      });
    }, 5000);
  };

  // LifeCycle

  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }

  componentWillUnmount() {
    this.setState({});
    clearTimeout(this.timeOutUpdate);
  }

  render() {
    const { name, url, content } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p className="name" onClick={this.handlePClick}>
            {name}
          </p>

          {content ? (
            content.map((obj) => (
              <div key={obj.id}>
                <h1>{obj.titulo}</h1>
                <p>{obj.paragrafo}</p>
              </div>
            ))
          ) : (
            <div>
              <h2>Loading...</h2>
              <a
                className="App-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
