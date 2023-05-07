import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  handleChange = evt => {
    evt.preventDefault();
    this.props.handleFeadbeack(evt.currentTarget.name);
     };

  render() {
    return (
      <>
        <form onClick={this.handleChange}>
          <button name="good" type="button" onClick={this.handleChange}>
            Good
          </button>
          <button name="neutral" type="submit" onClick={this.handleChange}>
            Neutral
          </button>
          <button name="bad" type="submit" onClick={this.handleChange}>
            Bad
          </button>
        </form>
      </>
    );
  }
}
