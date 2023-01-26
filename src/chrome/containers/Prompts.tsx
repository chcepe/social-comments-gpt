import * as React from "react";

import PrompsForm from "../../components/PromptsList/PrompsForm";
import Loading from "../../components/Loading";
import Section from "../../components/Section";
import { Domains } from "../../utils/constants";
import { getStorageValue } from "../../utils/storage";

interface Props {
  type: Domains;
}

const DomainLabel: Record<Domains, string> = {
  [Domains.LinkedIn]: "LinkedIn",
  [Domains.Instagram]: "Instagram",
};

const Prompts: React.FC<Props> = ({ type }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [values, setValues] = React.useState<string[]>();

  const handleChange = (value: string[]) => {};

  React.useEffect(() => {
    (async () => {
      const key = await getStorageValue<string[]>("opt-insta-prompts");
      setLoading(false);
      setValues(key);
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <Section title={`Prompts for ${DomainLabel[type]}`}>
      <PrompsForm onChange={handleChange} values={[]} />
    </Section>
  );
};

export default Prompts;
