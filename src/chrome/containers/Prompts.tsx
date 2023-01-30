import * as React from "react";

import PrompsForm from "../../components/PromptsList/PrompsForm";
import Loading from "../../components/Loading";
import Section from "../../components/Section";
import { Domains } from "../../utils/constants";
import useChromeStorage from "../../hooks/useChromeStorage";
import { DEFAULT_CONFIG, StorageKeys } from "../../utils/config";

interface Props {
  type: Domains;
}

const ALL_PROMPTS: Record<Domains, [string, StorageKeys]> = {
  [Domains.LinkedIn]: ["LinkedIn", "opt-linkedin-prompts"],
  [Domains.Instagram]: ["Instagram", "opt-insta-prompts"],
  [Domains.Twitter]: ["Twitter", "opt-twitter-prompts"],
};

const Prompts: React.FC<Props> = ({ type }) => {
  const [label, key] = ALL_PROMPTS[type];
  const [prompts, setPrompts, { loading }] = useChromeStorage<string[]>(
    key,
    DEFAULT_CONFIG[key]
  );

  if (loading) return <Loading />;

  return (
    <Section
      title={`Prompts for ${label}`}
      desc="Random prompts that will be sent to OpenAI. {postContent} is replaced by content of the post."
    >
      <PrompsForm onChange={setPrompts} items={prompts} />
    </Section>
  );
};

export default Prompts;
