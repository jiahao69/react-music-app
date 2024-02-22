import React, { memo, Suspense } from "react"
import { Outlet } from "react-router-dom"
import type { FC, ReactNode } from "react"

import NavBar from "./c-cpns/nav-bar"

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <Suspense>
        <NavBar />
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
