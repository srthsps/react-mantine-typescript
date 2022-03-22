import React from 'react'

interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = ({}) => {
    console.log("dashboard page rendered");
        return (
            <div className="page-content">
                Dashboard
            </div>
        );
}

export default Dashboard