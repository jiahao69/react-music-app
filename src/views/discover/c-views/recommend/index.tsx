import React, { memo } from "react"
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Recommned: FC<IProps> = () => {
  return <div>Recommned</div>
}

export default memo(Recommned)
