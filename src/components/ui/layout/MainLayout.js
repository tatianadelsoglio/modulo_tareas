import { SafeArea } from 'antd-mobile';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <div style={{backgrond:"red"}}>
                <SafeArea position='top'/>
            </div>
            <div>
                <h1>PRUEBA DE SAFEAREA</h1>
            </div>
            <div style={{backgrond:"red"}}>
                <SafeArea position='bottom'/>
            </div>
        </div>
    );
};

export default MainLayout;