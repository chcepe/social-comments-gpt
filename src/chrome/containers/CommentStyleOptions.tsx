import * as React from "react";

import Checkbox from "../../components/Checkbox";
import Loading from "../../components/Loading";
import {
  COMMENTS_STYLE_OPTS,
  COMMENTS_STYLE_OPT_DEFAULT,
  OPT_COMMENT_STYLE,
} from "../../utils/constants";

const CommentStyleOptions = () => {
  const [selected, setSelected] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    chrome.storage.sync.get([OPT_COMMENT_STYLE], (result) => {
      setLoading(false);
      if (result?.[OPT_COMMENT_STYLE]) setSelected(result[OPT_COMMENT_STYLE]);
    });
  }, []);

  React.useEffect(() => {
    chrome.storage.sync.set({ [OPT_COMMENT_STYLE]: selected }, () => {});
  }, [selected]);

  if (loading) return <Loading />;

  return (
    <>
      <Checkbox
        inline
        options={COMMENTS_STYLE_OPTS}
        selected={[selected || COMMENTS_STYLE_OPT_DEFAULT]}
        onChange={(selected) => {
          setSelected(selected[selected.length - 1]);
        }}
      />
    </>
  );
};

export default CommentStyleOptions;
