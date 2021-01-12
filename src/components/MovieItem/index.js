import React, {useState} from "react";
import StyledMovieItem from "./StyledMovieItem";
import ToggleButton from "react-toggle-button";

const MovieItem = (props) => {
  const [like, setLike] = useState(1);

  return (
    <div className="col-xs-12 col-sm-4 col-md-3 center-xs middle-xs">
      <StyledMovieItem>
        <div className="cross-container" onClick={() => props.onDelete()}>
          <svg className="cross" xmlns="http://www.w3.org/2000/svg" height="329pt" viewBox="0 0 329.26933 329" width="329pt"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg></div>
        <div className="title">{props.item.title}</div>
        <div className="category">{props.item.category}</div>
        <div className="row middle-xs around-xs">
          <div className="col-xs-5 center-xs">
            <svg className="like more" xmlns=" http://www.w3.org/2000/svg" id="Bold" fill="blue" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m1.75 23h2.5c.965 0 1.75-.785 1.75-1.75v-11.5c0-.965-.785-1.75-1.75-1.75h-2.5c-.965 0-1.75.785-1.75 1.75v11.5c0 .965.785 1.75 1.75 1.75z"/><path d="m12.781.75c-1 0-1.5.5-1.5 3 0 2.376-2.301 4.288-3.781 5.273v12.388c1.601.741 4.806 1.839 9.781 1.839h1.6c1.95 0 3.61-1.4 3.94-3.32l1.12-6.5c.42-2.45-1.46-4.68-3.94-4.68h-4.72s.75-1.5.75-4c0-3-2.25-4-3.25-4z"/></svg>
            <div>{props.item.likes}</div>
          </div>
          <div className="col-xs-5 center-xs">
            <svg className="like less" xmlns="http://www.w3.org/2000/svg" id="Bold" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m22.25 1h-2.5c-.965 0-1.75.785-1.75 1.75v11.5c0 .965.785 1.75 1.75 1.75h2.5c.965 0 1.75-.785 1.75-1.75v-11.5c0-.965-.785-1.75-1.75-1.75z" /><path d="m5.119.75c-1.95 0-3.61 1.4-3.94 3.32l-1.12 6.5c-.42 2.45 1.46 4.68 3.94 4.68h4.72s-.75 1.5-.75 4c0 3 2.25 4 3.25 4s1.5-.5 1.5-3c0-2.376 2.301-4.288 3.781-5.273v-12.388c-1.601-.741-4.806-1.839-9.781-1.839z" /></svg>
            <div>{props.item.dislikes}</div>
          </div>
        </div>
        <div className="row center-xs">
          <ToggleButton
            inactiveLabel="dislike"
            activeLabel="like"
            value={like}
            onToggle={(status) => {
              setLike(!status)
              const action = status ? () => props.onDislike() : () => props.onLike();
              action();
            }} />
        </div>
      </StyledMovieItem>
    </div>
  );
};

export default MovieItem;