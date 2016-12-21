import React from 'react';
import {render} from 'react-dom';

//----------------------INPUT--------------------------------------------

/**
 * A single input field, derives its heading and search text from the field prop
 */
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showsSuggestions: false, inputValue: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({showsSuggestions: event.target.value.length > 0,
                        inputValue: event.target.value});
    }

    renderItems() {
        let inputValue = this.state.inputValue;
        return this.props.items.filter(function(item) {
          return item.includes(inputValue);
        }).map(function(item) {
            return(
                <tr id = "suggestion" key = {item} >
                    <td>
                        {item}
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <form>
                    {this.props.field}
                    <br/>
                    <input
                        type="text"
                        id={this.props.field}
                        placeholder= {"e.g. "+this.props.example}
                        onChange={this.handleChange}
                    />
                </form>

                <table id = "suggestions" className = "hiddenish">
                    <tbody>
                        {this.state.showsSuggestions ? this.renderItems() : null}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Input;