import React from 'react';
import {render} from 'react-dom';

//----------------------INPUT--------------------------------------------

/**
 * A single input field, derives its heading, search text, and suggestion items from the field prop
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showsSuggestions: false, inputValue: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectSuggestions = this.handleSelectSuggestions.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleEscape);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEscape);
    }

    handleFocus(event) {
        this.setState({showsSuggestions: event.target.value.length > 0});
    }

    handleChange(event) {
        this.setState({showsSuggestions: event.target.value.length > 0,
                        inputValue: event.target.value});
    }

    handleSelectSuggestions(value) {
        this.setState({inputValue: value.target.innerHTML});
        this.setState({showsSuggestions: false});
    }

    handleKeyPress(event) {
        // handle a press of the escape key
        if(event.keyCode == 27) this.setState({showsSuggestions: false});
    }

    renderItems() {
        let inputValue = this.state.inputValue;
        return this.props.items.filter(function(item) {
          return item.toLowerCase().includes(inputValue.toLowerCase()); //see if there is a better way to do this using a regex
        }).map(function(item) {
            return(
                <tr id = "suggestion" key = {item} >
                    <td onClick={this.handleSelectSuggestions} key="fdf">
                        {item}
                    </td>
                </tr>
            );
        }.bind(this));
    }

    render() {
        return (
            <div>
                <form>
                    {this.props.field}
                    <br/>
                    <input tabIndex = "0" onFocus = {this.handleFocus}
                        type="text"
                        id={this.props.field}
                        placeholder= {"e.g. "+this.props.example}
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                </form>

                <table id = "suggestions" className={this.state.showsSuggestions ? "visible" : "hidden"}>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Input;