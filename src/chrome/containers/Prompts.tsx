import * as React from "react";

import IcInstagram from "../../components/IcInstagram";
import IcLinkedIn from "../../components/IcLinkedIn";
import Tab, { TabItem } from "../../components/Tab";

const PROMPT_TABS: TabItem[] = [
  {
    title: "Instagram",
    comp: <>{/* todo: insta body */}</>,
    icon: <IcInstagram />,
  },
  {
    title: "LinkedIn",
    comp: <>{/* todo: linkedin body */}</>,
    icon: <IcLinkedIn />,
  },
];

const Prompts = () => <Tab tabs={PROMPT_TABS} />;

export default Prompts;
