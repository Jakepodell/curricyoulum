import React from 'react';
import {render} from 'react-dom';
import Constants from '../constants/constants.jsx';

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
        this.state = {showsSuggestions: false, inputValue: "", selectedItems: [], highlightedIndex: -1, highlightedItemText: "", filteredSuggestions: []};
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
                        inputValue: event.target.value}, this.filterSuggestions);
    }

    handleSelectSuggestion(value) {
        this.selectSuggestion(value.target.innerHTML);
    }

    selectSuggestion(value) {
        this.setState({selectedItems: this.state.selectedItems.concat(value), highlightedIndex: -1});
    }

    handleKeyPress(event) {
        if(!this.state.showsSuggestions)return;
        switch(event.keyCode) {
            case Constants.keyCodes.ESC:
                this.setState({showsSuggestions: false});
                break;
            case Constants.keyCodes.UP:
                if(this.state.highlightedIndex >= -1)
                    this.setState({highlightedIndex: this.state.highlightedIndex - 1});
                break;
            case Constants.keyCodes.DOWN:
                if(this.state.highlightedIndex < this.state.filteredSuggestions.length - 1)
                    this.setState({highlightedIndex: this.state.highlightedIndex + 1});
                break;
            case Constants.keyCodes.ENTER:
                if(this.state.highlightedItem !== "") {
                    this.selectSuggestion(this.state.highlightedItemText);
                    break;
                }
            default:
                break;
        }
    }

    handleWindowClick(event) {
        if(event.target.id != this.props.field)
            this.setState({showsSuggestions: false});
    }

    filterSuggestions() {
        let inputValue = this.state.inputValue;
        this.setState({filteredSuggestions:
            this.props.suggestions.filter(function(item) {
                return item.toLowerCase().includes(inputValue.toLowerCase());
            })
        });
    }

    renderSuggestions() {
        return this.state.filteredSuggestions.map(function(item, index) {
            return(
                <tr id = "suggestion" key = {index} className={this.state.highlightedIndex == index ? "focused" : "unfocused"}
                    ref={(input) => {
                        if(this.state.highlightedIndex == index && this.state.showsSuggestions && input != null && this.state.highlightedItemText !== item) {
                            this.setState({highlightedItemText: item});
                        }
                    }}>
                    <td onClick={this.handleSelectSuggestion} onMouseMove={(e) => this.setState({highlightedIndex: index})} key={index}>
                        {item}
                    </td>
                </tr>
            );
        }.bind(this));
    }

    renderInternalBubbles() {
        if(this.props.internalBubbles) {
            return this.state.selectedItems.map((item, index) => {
                return (
                    <div id="bubble" key = {index}> {item} </div>
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