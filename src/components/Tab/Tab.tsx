import * as React from "react";

import * as Styled from "./Tab.styled";

export type TabItem = {
  title: string;
  comp: JSX.Element;
  icon?: JSX.Element;
};

interface Props {
  tabs: TabItem[];
  initialTab?: number;
}

const Tab: React.FC<Props> = ({ tabs, initialTab }) => {
  const [activeTab, setActiveTab] = React.useState(
    initialTab && initialTab > 0 ? initialTab : 0
  );

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Styled.Wrapper>
      <Styled.Tabs>
        {tabs.map((tab, i) => {
          const isActive = activeTab === i;

          return (
            <Styled.TabItem
              key={tab.title + i}
              onClick={() => handleTabChange(i)}
              active={isActive}
            >
              <div className="title">
                {tab?.icon && <Styled.TabIcon>{tab.icon}</Styled.TabIcon>}
                {tab.title}
              </div>
              {isActive && <div className="line" />}
            </Styled.TabItem>
          );
        })}
      </Styled.Tabs>
      <Styled.Body key={activeTab}>{tabs[activeTab].comp}</Styled.Body>
    </Styled.Wrapper>
  );
};

export default Tab;
