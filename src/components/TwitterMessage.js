import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ""
    };
  }

  handleContentChange = (event) => {
    if (this.state.content.length < this.props.maxChars) {
      this.setState({ content: event.target.value })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.props.maxChars - this.state.content.length}</strong>
        <input type="text"
               name="message"
               id="message"
               value={this.state.content}
               onChange={event => this.handleContentChange(event)}
        />
      </div>
    );
  }
}

export default TwitterMessage;
