import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FC, memo, useState } from 'react';

interface tabProps {
  value: number;
  label: string;
}

interface LabTabsComponentProps {
  onTabSelected: (value: number) => void;
  tabs: tabProps[];
}

const LabTabsComponent: FC<LabTabsComponentProps> = ({
  onTabSelected,
  tabs,
}) => {
  const [value, setValue] = useState(1);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onTabSelected(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleTabChange}
        sx={{
          height: '100%',
          display: 'flex',
        }}
      >
        {tabs.map((tab) => (
          <Tab
            value={tab.value}
            label={tab.label}
            key={tab.value}
            sx={{
              color: 'white',
              flex: 1,
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              height: '80px',
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export const LabTabs = memo(LabTabsComponent);
