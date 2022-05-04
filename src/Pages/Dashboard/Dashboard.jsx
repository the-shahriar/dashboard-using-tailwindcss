import React from 'react';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const Dashboard = () => {

    return (
        <> 
            <Header />
           <div className='flex flex-wrap'>
                <div className='lg:w-1/5 md:w-1/12'>
                    <Sidebar />
                </div>
                <div className='lg:w-4/5 md:w-11/12 w-full'>
                   <Table pageTitle={'Inventory'} />
                </div>
           </div>
            <div className='lg:hidden md:hidden block'>
                <BottomNavigation />
            </div>
        </>
    );
};

export default Dashboard;