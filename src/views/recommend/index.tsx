import React, { memo } from "react"
import type { FC, ReactNode } from "react"

// cpts
import Carousel from "./c-cpts/carouse-cpt"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return (
    <>
      {/* 轮播图 */}
      <Carousel />
    </>
  )
}

export default memo(Recommend)
