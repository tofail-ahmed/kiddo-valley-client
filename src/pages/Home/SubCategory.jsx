import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Math from './Math';
import Physics from './Physics';
import Chemistry from './Chemistry';

const SubCategory = () => {
      return (
            <div className='text-center bg-slate-200 '>
                  <Tabs>
                        <TabList >
                              <Tab>Title 1</Tab>
                              <Tab>Title 2</Tab>
                              <Tab>Title 3</Tab>
                        </TabList>

                        <TabPanel>
                                <h3>Mathematics Toy</h3>
                              <Math></Math>
                        </TabPanel>
                        <TabPanel>
                                <h3>Physics Toy</h3>
                              <Physics></Physics>
                        </TabPanel>
                        <TabPanel>
                              <h3>Chemistr Toy</h3>
                              <Chemistry></Chemistry>
                        </TabPanel>
                  </Tabs>
            </div>
      );
};

export default SubCategory;