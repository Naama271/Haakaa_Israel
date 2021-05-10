import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Tabstipslib (){
  return (
    <div>
      <Tabs >
        <TabList>
          <Tab >הוראות שימוש</Tab>
          <Tab>הוראות טיפול במוצר</Tab>
          <Tab>טיפ מאיתנו</Tab>

        </TabList>
        <TabPanel>
        <h4>הוראות שימוש </h4>
        </TabPanel>
        <TabPanel>
        <h4>הוראות טיפול במוצר</h4>
        </TabPanel>
        <TabPanel>
        <h4>טיפ מאיתנו </h4>
        </TabPanel>

      </Tabs>
    </div>
  );

}

export default Tabstipslib;