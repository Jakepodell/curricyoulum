import React from 'react';
import {render} from 'react-dom';

//----------------------INPUT--------------------------------------------

/**
 * A single input field, derives its heading, search text, and suggestion items from the field prop.
 * Includes a dropdown of selectable suggestions.
 * selectable suggestions are displayed as bubbles, either in the same div as the tying or an external div
 *  this is determined from props
 *  in order to get the ability to place bubble in the input, the input is actually hidden within an
 *  external div that is masked to look like the input.
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showsSuggestions: false, inputValue: "", selectedItems: []};
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleSelectSuggestion = this.handleSelectSuggestion.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleWindowClick = this.handleWindowClick.bind(this);
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        window.addEventListener('click', this.handleWindowClick);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        window.removeEventListener('click', this.handleWindowClick);
    }

    handleInputFocus(event) {
        this.setState({showsSuggestions: event.target.value.length > 0});
    }

    handleInputTextChange(event) {
        this.setState({showsSuggestions: event.target.value.length > 0,
                        inputValue: event.target.value});
    }

    handleSelectSuggestion(value) {
        this.setState({inputValue: "",
                        selectedItems: this.state.selectedItems.concat(value.target.innerHTML)});
    }

    handleKeyPress(event) {
        if(event.keyCode == 27) //escape key
            this.setState({showsSuggestions: false});
    }

    handleWindowClick(event) {
        if(event.target.id != this.props.field)
            this.setState({showsSuggestions: false});
    }

    renderSuggestions() {
        let inputValue = this.state.inputValue;
        return this.props.suggestions.filter(function(item) {
          return item.toLowerCase().includes(inputValue.toLowerCase()); //see if there is a better way to do this using a regex
        }).map(function(item) {
            return(
                <tr id = "suggestion" key = {item} >
                    <td onClick={this.handleSelectSuggestion} key="fdf">
                        {item}
                    </td>
                </tr>
            );
        }.bind(this));
    }

    renderInternalBubbles() {
        if(this.props.internalBubbles) {
            return this.state.selectedItems.map((item) => {
                return (
                    <div id="bubble"> {item} </div>
                );
            });
        }
    }

    renderInput() {
        return (
            <div>
                <div id = "input-label">
                    {this.props.field}
                </div>
                <div id = "input-container">
                    {this.renderInternalBubbles()}
                    <div id = "input-sizer">
                        <input tabIndex = "0"
                            onFocus = {this.handleInputFocus}
                            type="text"
                            id={this.props.field}
                            value={this.state.inputValue}
                            onChange={this.handleInputTextChange}
                        />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id = "form-element">
                {this.renderInput()}
                <table id = "suggestions" className={this.state.showsSuggestions ? "visible" : "hidden"}>
                    <tbody>
                        {this.renderSuggestions()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Input;