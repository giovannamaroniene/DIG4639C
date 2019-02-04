import React, { Component } from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value:event.target.value});
      }

      handleSubmit(event){
        if (/[a-zA-Z]+/.test(this.state.value)) {
          this.setState({isValid:true})
        };

        event.preventDefault();
      }

      render() {
        if (!this.state.nameAvailable) {

        return (
          <form onSubmit={this.handleSubmit}>
            <lable>
              Name:
                <input typer="text" value={this.state.value} onChange={this.handleChange} />
            </lable>
            <input type="submit" value="submit" />
          </form>
        );
      } else {
        return (<div>Hello, good day. {this.state.value}</div>);
      }
      }
}

export default NameForm;
