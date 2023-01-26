import * as React from "react";

import PrompsForm from "../../components/PromptsList/PrompsForm";
import Loading from "../../components/Loading";
import Section from "../../components/Section";
import { Domains } from "../../utils/constants";
import useChromeStorage from "../../hooks/useChromeStorage";
import { StorageKeys } from "../../utils/config";
import { INSTAGRAM_PROMPTS, LINKED_IN_PROMPTS } from "../../utils/prompts";

interface Props {
  type: Domains;
}

const DomainLabel: Record<Domains, string> = {
  [Domains.LinkedIn]: "LinkedIn",
  [Domains.Instagram]: "Instagram",
};

const Prompts: React.FC<Props> = ({ type }) => {
  let storageKey: StorageKeys = "opt-insta-prompts";
  let defaultValue = INSTAGRAM_PROMPTS;
  if (type === Domains.LinkedIn) {
    storageKey = "opt-linkedin-prompts";
    defaultValue = LINKED_IN_PROMPTS;
  }

  const [prompts, setPrompts, { loading }] = useChromeStorage<string[]>(
    storageKey,
    defaultValue
  );

  if (loading) return <Loading />;

  return (
    <Section
      title={`Prompts for ${DomainLabel[type]}`}
      desc="Random prompts that will be sent to OpenAI. {postContent} is replaced by content of the post."
    >
      <PrompsForm onChange={setPrompts} items={prompts} />
    </Section>
  );
};

export default Prompts;
