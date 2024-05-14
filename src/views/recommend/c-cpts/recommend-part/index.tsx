import React, { memo } from "react"
import type { FC, ReactNode } from "react"

import { RecommendPartWrapper } from "./style"

interface IProps {
  children?: ReactNode
  title: string
  moreFn: () => void
}

const RecommendPart: FC<IProps> = ({ children, title, moreFn }) => {
  return (
    <RecommendPartWrapper>
      <div className="top-layout">
        <div className="part-left">
          <div className="part-left-icon sprite_02 "></div>
          <div className="part-title">{title}</div>
        </div>
        <div className="part-right">
          <div className="part-right-tetx" onClick={moreFn}>
            更多
          </div>
          <div className="part-right-icon sprite_02"></div>
        </div>
      </div>
      {children}
    </RecommendPartWrapper>
  )
}

export default memo(RecommendPart)
