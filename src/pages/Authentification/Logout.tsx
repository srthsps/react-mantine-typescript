import React from 'react'

interface LogoutProps {

}

const Logout: React.FC<LogoutProps> = ({}) => {
    console.log("logout page rendered");
        return (
            <div>
                Logout
            </div>
        );
}

export default Logout