import React, { memo, Suspense } from "react"
import { Outlet } from "react-router-dom"
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
