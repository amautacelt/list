import React from "react";

const Form = ({inputText, setInputText}) => {

    const inputChange = e => {
        setInputText(e.target.value)
    }

    return (
        <div className="input_container">
            <div className="input_button">
                <input type="text" value={inputText} onChange={inputChange} />
                <button>ADD</button>
            </div>
        </div>
    )
}

export default Form;