import * as React from "react";

import Checkbox from "../../components/Checkbox";
import Loading from "../../components/Loading";
import {
  HASHTAG_OPTS,
  HASHTAG_OPT_DEFAULT,
  OPT_HASHTAGS,
} from "../../utils/constants";

const HashtagOptions = () => {
  const [selected, setSelected] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    chrome.storage.sync.get([OPT_HASHTAGS], (result) => {
      setLoading(false);
      if (result?.[OPT_HASHTAGS]) setSelected(result[OPT_HASHTAGS]);
    });
  }, []);

  React.useEffect(() => {
    chrome.storage.sync.set({ [OPT_HASHTAGS]: selected }, () => {});
  }, [selected]);

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
