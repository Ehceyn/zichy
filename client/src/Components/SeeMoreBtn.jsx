import { Button } from "@material-ui/core";
import React from "react";

function SeeMoreBtn(props) {
  return (
    <div className="see-more-btn" onClick={props.onSeeMore}>
      <Button
        style={{
          fontWeight: 400,
          textTransform: "lowercase",
          fontSize: "1rem",
        }}
      >
        {props.status}
      </Button>
    </div>
  );
}

export default SeeMoreBtn;
