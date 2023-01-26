import * as React from "react";

import Checkbox from "../../components/Checkbox";
import Loading from "../../components/Loading";
import useChromeStorage from "../../hooks/useChromeStorage";
import { MODEL_OPTS, MODEL_OPT_DEFAULT } from "../../utils/options";

const ModelOptions = () => {
  const [selected, setSelected, { loading }] = useChromeStorage<string>(
    "opt-model-type",
    MODEL_OPT_DEFAULT
  );

  if (loading) return <Loading />;

  return (
    <>
      <Checkbox
        inline
        options={MODEL_OPTS}
        selected={[selected || MODEL_OPT_DEFAULT]}
        onChange={(selected) => {
          setSelected(selected[selected.length - 1]);
        }}
      />
    </>
  );
};

export default ModelOptions;
