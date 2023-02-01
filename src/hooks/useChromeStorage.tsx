import * as React from "react";

import { StorageKeys } from "../utils/config";

export default <T,>(key: StorageKeys, defaultValue: T) => {
  const [loading, setLoading] = React.useState(true);
  const [state, setState] = React.useState<T>(defaultValue);
  const isInitialized = React.useRef(false);

  React.useEffect(() => {
    chrome.storage["local"]
      .get(key)
      .then((res) => {
        if (key in res) {
          setState(res[key]);
        } else {
          setState(defaultValue);
        }
        setLoading(false);
      })
      .catch(() => {
        console.warn(`useChromeStorage get error: ${key}`);
        setState(defaultValue);
      })
      .finally(() => {
        isInitialized.current = true;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!isInitialized.current) return;
    chrome?.storage?.local?.set({ [key]: state }).catch(() => {
      console.warn(`useChromeStorage set error: ${key}`);
    });
  }, [key, state]);

  return [state, setState, { loading }] as const;
};
