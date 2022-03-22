import React from 'react'

interface NonAuthLayoutProps {

}

const NonAuthLayout: React.FC<NonAuthLayoutProps> = (props) => {
  console.log("non auth layout is rendering");
    
        return (
            <React.Fragment>{props.children}</React.Fragment>
        );
}

export default NonAuthLayout