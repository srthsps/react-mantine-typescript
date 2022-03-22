import React, {FC} from "react"
import { Route, Redirect } from "react-router-dom"
// import Cookies from 'js-cookie'

// interface IMtypes {
//     component: any,
//     layout: FC,
//     isAuthProtected: Boolean,
//     exact?: any
// }
// const isAuthProtected = false
const Authmiddleware  = ({
  Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  
  console.log(Component)
  return (
  <Route
    {...rest}
    render={props => {
      // if (isAuthProtected ) {
      // console.log("authprotected false");
      //   return (
      //     <Redirect
      //       to={{ pathname: "/login", state: { from: props.location } }}
      //     />
      //   )
      // }
      console.log("authprotected true",props);
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
  )
}



export default Authmiddleware
