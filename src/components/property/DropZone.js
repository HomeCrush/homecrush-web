import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { IconButton } from "@material-ui/core";

class DropZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
    };
  }

  


  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.props.onSaving({
      images: files[0]
    })
    this.setState({
      files: files,
      open: false,
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
      
    return (
    
        <div className="DropZone">
            <IconButton
            color="primary"
            onClick={this.handleOpen.bind(this)}
            aria-label="add property pictures"
            >
            <AddPhotoAlternateIcon  style={{ "color":"#44A1A0"}}/>
            </IconButton>
            <DropzoneDialog
            open={this.state.open}
            onSave={this.handleSave.bind(this)}
            acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
            showPreviews={true}
            maxFileSize={5000000}
            onClose={this.handleClose.bind(this)}
            />
        </div>
    );
  }
}

export default DropZone