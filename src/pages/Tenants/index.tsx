import React from 'react'

interface TenantProps {

}

const Tenants: React.FC<TenantProps> = ({}) => {
    console.log("tenants page rendered");
        return (
            <div>
                Tenants
            </div>
        );
}

export default Tenants