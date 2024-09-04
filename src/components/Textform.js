import React, { useState } from 'react';
import './Textform.css'; // Import custom CSS file

export default function Textform(props) {
    const placeholderText = "Enter text here";

    const handleSentenceClick = () => {
        let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c){ return c.toUpperCase() });
        setText(newText);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCapitalizedClick = () => {
        let newText = text.toLowerCase().replace(/\b\w/g, function(char) { return char.toUpperCase(); });
        setText(newText);
    }

    const handleaLtErNaTiNgClick = () => {
        let newText = text.split('').map((char, index) => 
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        ).join('');
        setText(newText);
    }

    const handleTitleClick = () => {
        let smallWords = /^(a|an|and|as|at|but|by|for|if|in|nor|of|on|or|so|the|to|up|yet)$/i;
        let newText = text.toLowerCase().replace(/\w\S*/g, function(word, index, title){
            if (index !== 0 && index !== title.length && word.match(smallWords)) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });
        setText(newText);
    }

    const handleInVeRsEClick = () => {
        let newText = text.split('').map(char => 
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        ).join('');
        setText(newText);
    }

    const handleDownloadClick = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myText.txt";
        document.body.appendChild(element);
        element.click();
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Clear the placeholder text when the text area is focused
    const handleOnFocus = () => {
        if (text === placeholderText) {
            setText("");
        }
    }

    const [text, setText] = useState(placeholderText);

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control "  value={text}  onChange={handleOnChange} onFocus={handleOnFocus}  rows="8" id="myBox"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleSentenceClick}>Sentence Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Upper Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Lower Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCapitalizedClick}>Capitalized Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleaLtErNaTiNgClick}>aLtErNaTiNg cAsE</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleTitleClick}>Title Case</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleInVeRsEClick}>InVeRsE CaSe</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleDownloadClick}>Download Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy to Clipboard</button>
            <button className='btn btn-primary mx-1 my-2 ' onClick={handleClearClick}>Clear</button>
        </div>
        <div className='container my-2'>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
