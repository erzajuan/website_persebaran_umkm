import React from 'react'
import MainNavbar from '../../components/navbar'

const HomePage = (props) => {
  const { loginCbHandler } = props;
  return (
    <>
      <MainNavbar loginCbHandler={loginCbHandler}></MainNavbar>
      <div>homepage</div>
    </>
  )
}

export default HomePage;