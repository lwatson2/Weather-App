import React from 'react';
import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;

    this.setState({ searchQuery: inputValue });

    if (!inputValue) {
      return '';
    }
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    const value = this.state.searchQuery;
    this.props.submit(event, value);
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Search City"
            className="Input"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button className="myButton">Submit</button>
        </form>
      </div>
    );
  }
}
export default Search;
