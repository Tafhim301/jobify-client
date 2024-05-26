import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllJobs from '../Categories/AllJobs/AllJobs';
import OnsiteJobs from '../Categories/OnsiteJobs/OnsiteJobs';
import RemoteJobs from '../Categories/RemoteJobs/RemoteJobs';
import PartTimeJobs from '../Categories/PartTimeJobs/PartTimeJobs';
import HybridJobs from '../Categories/HybridJobs/HybridJobs';

const CategoryTab = () => {
    return (
        <div className='my-10'>
            <h2 className="text-5xl font-bold text-center">Jobs By Category</h2>
            <Tabs>
                <TabList className="flex justify-between border-b pt-5">
                    <Tab>All Jobs</Tab>
                    <Tab>Remote</Tab>
                    <Tab>On Site</Tab>
                    <Tab>Part-Time</Tab>
                    <Tab>Hybrid</Tab>
                </TabList>

                <TabPanel>
                   <AllJobs></AllJobs>
                </TabPanel>
                <TabPanel>
                    <RemoteJobs></RemoteJobs>
                </TabPanel>
                <TabPanel>
                    <OnsiteJobs></OnsiteJobs>
                </TabPanel>
                <TabPanel>
                  <PartTimeJobs></PartTimeJobs>
                </TabPanel>
                <TabPanel>
                    <HybridJobs></HybridJobs>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default CategoryTab;