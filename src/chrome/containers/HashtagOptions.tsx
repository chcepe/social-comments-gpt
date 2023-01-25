import * as React from "react";

import Checkbox from "../../components/Checkbox";
import { HASHTAG_OPTIONS } from "../../utils/constants";

const HashtagOptions = () => {
  return (
    <Checkbox
      inline
      options={HASHTAG_OPTIONS}
      selected={[]}
      onChange={() => {}}
    />
  );
};

export default HashtagOptions;
