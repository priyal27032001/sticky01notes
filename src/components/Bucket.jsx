import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Bucket(props) {
  function handleClick() {
    props.onDeleteBucket(props.id);
  }
  return (
    <div className="bucketList">
       <p>{props.name}</p>
       <button  onClick={handleClick} class="DeleteBucket"><DeleteIcon></DeleteIcon></button>
    </div>
  );
}
export default Bucket;