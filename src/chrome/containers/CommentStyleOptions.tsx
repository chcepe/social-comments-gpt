import * as React from "react";

import Checkbox from "../../components/Checkbox";
import { COMMENTS_STYLE_OPTIONS } from "../../utils/constants";

const CommentStyleOptions = () => {
  return (
    <Checkbox
      inline
      options={COMMENTS_STYLE_OPTIONS}
      selected={[]}
      onChange={() => {}}
    />
  );
};

export default CommentStyleOptions;
