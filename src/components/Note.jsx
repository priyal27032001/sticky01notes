import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleClickCopy() {
    navigator.clipboard.writeText(props.content);
    alert("Copied");
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon/></button>
      <button onClick={handleClickCopy}><ContentCopyIcon/></button>
    </div>
  );
}

export default Note;
