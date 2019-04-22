import React, { Component } from 'react';

//import PropTypes from "prop-types";

class InputFileReader extends Component {
  /*
   static propTypes = {
     as: PropTypes.oneOf(['binary', 'buffer', 'text', 'url'])
   }
   */
   static defaultProps = {
     as: 'text'
   }

   state = {
     labelText: "Choose a file..."
   }
      
  _handleChange = (e) => {
    const files = [];
    for (let i = 0; i < e.target.files.length; i++) {
      // Convert to Array.
      files.push(e.target.files[i]);
    }

    // Build Promise List, each promise resolved by FileReader.onload.
    Promise.all(files.map(file => new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onload = result => {
        // Resolve both the FileReader result and its original file.
        resolve([result, file]);
      };

      // Read the file with format based on this.props.as.
      switch ((this.props.as).toLowerCase()) {
        case 'binary':
          reader.readAsBinaryString(file);
          break;
        case 'buffer':
          reader.readAsArrayBuffer(file);
          break;
        case 'text':
          reader.readAsText(file);
          break;
        case 'url':
          reader.readAsDataURL(file);
          break;
        default:
          reader.readAsText(file);
      }
    })))
    .then(zippedResults => {

      // Run the callback after all files have been read.
      if (zippedResults && zippedResults[0] ){
        const file = zippedResults[0][1]
        this.setState({ labelText: file.name })
        this.props.onChange(zippedResults);
      } else {
        this.setState({ labelText: 'Choose a file...'});
        this.props.onChange(zippedResults);
      }

    });
  }

  render() {
    const { as } = this.props
        , { labelText } = this.state
    return (
      <div className="_react-file-reader-input">
        <input
          className="inputfile"
          type="file"
          id="file"
          name="file"
          as={as}
          onChange={this._handleChange}
        />
        <label htmlFor="file">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
           <span>{labelText}</span>
        </label>
       </div>
    );
  }
}

export default InputFileReader
