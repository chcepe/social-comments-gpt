import * as React from "react";

import Checkbox from "../../components/Checkbox";
import Loading from "../../components/Loading";
import { HASHTAG_OPTS, HASHTAG_OPT_DEFAULT } from "../../utils/options";
import { getStorageValue, setStorageValue } from "../../utils/storage";

const HashtagOptions = () => {
  const [selected, setSelected] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      const key = await getStorageValue("opt-hashtag-option");
      setLoading(false);
      setSelected(key);
    })();
  }, []);

  React.useEffect(() => {
    setStorageValue("opt-hashtag-option", selected);
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
