import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Math from './Math';
import Physics from './Physics';
import Chemistry from './Chemistry';
import Doctor from './Doctor';

const SubCategory = () => {
      return (
            <div className='text-center bg-slate-200  md:w-1/2 '>
                  <Tabs>
                        <TabList >
                              <Tab>Title 1</Tab>
                              <Tab>Title 2</Tab>
                              <Tab>Title 3</Tab>
                              <Tab>Title 4</Tab>
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
                        <TabPanel>
                              <h3>Chemistr Toy</h3>
                              <Doctor></Doctor>
                        </TabPanel>
                  </Tabs>
            </div>
      );
};

export default SubCategory;