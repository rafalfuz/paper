import React from "react";
import "./headline.scss";

const Headlines = () => {
  return (
    <div className="headline">
      <div className="rubric headline__rubric ">
        <h2 className="rubric__title">First headline!</h2>
        <p className="rubric__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          ipsa impedit soluta inventore quisquam molestiae quo cum officiis.
        </p>
      </div>

      <div className="rubric headline__rubric rubric--red">
        <h2 className="rubric__title">Second one!</h2>
        <p className="rubric__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          ipsa impedit soluta inventore quisquam molestiae quo cum officiis.
        </p>
      </div>

      <div className="rubric headline__rubric">
        <h2 className="rubric__title">Last headline!</h2>
        <p className="rubric__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          ipsa impedit soluta inventore quisquam molestiae quo cum officiis.
        </p>
      </div>
    </div>
  );
};

export default Headlines;
