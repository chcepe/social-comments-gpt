import * as React from "react";
import Loading from "../../components/Loading";

import TagsInput from "../../components/TagInput/TagsInput";
import useChromeStorage from "../../hooks/useChromeStorage";

const ExcludedWords = () => {
  const [excludedWords, setExludedWords, { loading }] = useChromeStorage<
    string[]
  >("opt-excluded-words", []);

  if (loading) return <Loading />;

  return (
    <>
      <TagsInput
        placeholder="Enter a new word"
        tags={excludedWords || []}
        onChange={setExludedWords}
      />
    </>
  );
};

export default ExcludedWords;
