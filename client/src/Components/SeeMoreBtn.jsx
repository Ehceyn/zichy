import { Button } from "@material-ui/core";
import React from "react";

function SeeMoreBtn() {
  return (
    <div className="see-more-btn">
      <Button
        style={{
          fontWeight: 400,
          textTransform: "lowercase",
          fontSize: "1rem",
        }}
      >
        See more...
      </Button>
    </div>
  );
}

export default SeeMoreBtn;
