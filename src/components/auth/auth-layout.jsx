import React from "react"
import IconSvg from "../../icons/shoelogo.svg"

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-pink-400 lg:flex items-center justify-center">
        <img src={IconSvg} alt="logo" />
      </div>
      <div className="max-w-screen-sm mx-auto w-full px-8 lg:px-0 lg:w-1/2 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
