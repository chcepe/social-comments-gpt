import * as React from "react";

import PrompsForm from "../../components/PromptsList/PrompsForm";
import Loading from "../../components/Loading";
import Section from "../../components/Section";
import { Domains } from "../../utils/constants";
import { getStorageValue } from "../../utils/storage";
import useChromeStorage from "../../hooks/useChromeStorage";

interface Props {
  type: Domains;
}

const DomainLabel: Record<Domains, string> = {
  [Domains.LinkedIn]: "LinkedIn",
  [Domains.Instagram]: "Instagram",
};

const Prompts: React.FC<Props> = ({ type }) => {
  const [prompts, setPrompts, { loading }] = useChromeStorage<string[]>(
    "opt-insta-prompts",
    []
  );

  const handleChange = (value: string[]) => {};

  if (loading) return <Loading />;

  return (
    <Section title={`Prompts for ${DomainLabel[type]}`}>
      <PrompsForm onChange={handleChange} values={[]} />
    </Section>
  );
};

export default Prompts;
