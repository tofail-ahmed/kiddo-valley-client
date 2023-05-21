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
                  <h2 className='font-bold text-4xl my-4 py-4'>Shop Toy By Category</h2>
                  <Tabs>
                        <TabList >
                              <Tab><h3 className='text-md font-bold'>Mathematics Toy</h3></Tab>
                              <Tab><h3 className='text-md font-bold'>Physics Toy</h3></Tab>
                              <Tab><h3 className='text-md font-bold'>Chemistr Toy</h3></Tab>
                              <Tab><h3 className='text-md font-bold'>Chemistry Toy</h3></Tab>
                        </TabList>

                        <TabPanel>

                              <Math></Math>
                        </TabPanel>
                        <TabPanel>

                              <Physics></Physics>
                        </TabPanel>
                        <TabPanel>

                              <Chemistry></Chemistry>
                        </TabPanel>
                        <TabPanel>

                              <Doctor></Doctor>
                        </TabPanel>
                  </Tabs>
            </div>
      );
};

export default SubCategory;