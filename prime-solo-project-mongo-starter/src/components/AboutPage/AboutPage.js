import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AboutPage extends Component{

  handleClick = () => {
    console.log('Webook button hit.');
    this.props.dispatch({ type: 'WEBHOOK' });
  };

  render() {
    return (
    <div>
      <div>
        <p>
          This about page is for anyone to read!
        </p> <br />
        <button onClick={this.handleClick}>Webhook Test</button>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return reduxState;
}

export default connect( mapStateToProps )( AboutPage );