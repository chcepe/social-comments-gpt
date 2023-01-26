import * as React from "react";

import Checkbox from "../../components/Checkbox";
import Loading from "../../components/Loading";
import {
  COMMENTS_STYLE_OPTS,
  COMMENTS_STYLE_OPT_DEFAULT,
} from "../../utils/options";
import { getStorageValue, setStorageValue } from "../../utils/storage";

const CommentStyleOptions = () => {
  const [selected, setSelected] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      const key = await getStorageValue<string>("opt-comment-style");
      setLoading(false);
      setSelected(key);
    })();
  }, []);

  React.useEffect(() => {
    setStorageValue("opt-comment-style", selected);
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
