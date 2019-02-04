import React, { Component } from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          value: '',
          nameAvailable: '',
          isValid: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }

      handleChange(event) {
        this.setState({value:event.target.value});
      }

      handleSubmit(event){
        if (/[a-zA-Z]+/.test(this.state.value)) {
          this.setState({isValid:true});
          this.setState({nameAvailable:true});
        } else {
          this.setState({isValid:false});
        }

        event.preventDefault();
      }

      render() {
        if (!this.state.nameAvailable) {

        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Your name:
                <input typer="text" value={this.state.value} onChange={this.handleChange} />
                {(this.state.isValid)?(null):(<p style={{color:"red"}}>error</p>)}
            </label>
            <input type="submit" value="submit" />
          </form>
        );
      } else {
        return (<div>Hello, good day. {this.state.value}</div>);
      }
      }
}

export default NameForm;
