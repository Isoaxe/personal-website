import React from 'react';
import './Track.css';


function Track(props) {

  function addTrack() {
    props.onAdd(props.track);
  }

  function removeTrack() {
    props.onRemove(props.track);
  }

  function renderAction() {
    if (props.isRemoval) {
      return <button className="Track-action" onClick={removeTrack}> -
      </button>
    } else {
      return <button className="Track-action" onClick={addTrack}> +
      </button>
    }
  }

  function renderPreview() {
    if (props.track.previewUrl) {
      return <a href={props.track.previewUrl} target="_blank" rel="noopener noreferrer"> | Preview</a>
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist + ' | ' + props.track.album} {renderPreview()}</p>
      </div>
      {renderAction()}
    </div>
  );
}


export default Track;
