import React from 'react';
import css from './Sidebar.module.scss';
import SidebarNav from './SidebarNav/SidebarNav';

const Sidebar = () => {

    return (
        <aside className={css.Block}>
            <SidebarNav />
        </aside>
    );
};

export default Sidebar;