import { Component } from 'react';

class Feadbeack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { good, neutral, bad } = this.state;
    console.log(`good: ${good}, neutral: ${neutral}, bad: ${bad}`);
    console.log(...this.state);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  handleIncrement = () => {
       this.setState(prevstate => ({ state: prevstate.state + 1, }));
     
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Good</button>
          <button type="submit">Neutral</button>
          <button type="submit">Bad</button>
        </form>

        <p>Statistics</p>

        <p>Good {this.state.good}</p>
        <p>Neutral{this.state.neutral}</p>
        <p>Bad {this.state.bad}</p>
      </>
    );
  }
}

export default Feadbeack;
