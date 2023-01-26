import * as React from "react";

import Checkbox from "../../components/Checkbox";
import Loading from "../../components/Loading";
import useChromeStorage from "../../hooks/useChromeStorage";
import { HASHTAG_OPTS, HASHTAG_OPT_DEFAULT } from "../../utils/options";

const HashtagOptions = () => {
  const [selected, setSelected, { loading }] = useChromeStorage<string>(
    "opt-hashtag-option",
    HASHTAG_OPT_DEFAULT
  );

  if (loading) return <Loading />;

  return (
    <>
      <Checkbox
        inline
        options={HASHTAG_OPTS}
        selected={[selected || HASHTAG_OPT_DEFAULT]}
        onChange={(selected) => {
          setSelected(selected[selected.length - 1]);
        }}
      />
    </>
  );
};

export default HashtagOptions;
