import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <
            
            {this.props.quotes.map(quote => <QuoteCard quote={quote} key={quote.id} remove={this.props.removeQuote} upvote={this.props.upvoteQuote} downvote={this.props.downvoteQuote} />)}
              
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { quotes: state.quotes };
}

//add arguments to connect as needed
export default connect()(Quotes);
