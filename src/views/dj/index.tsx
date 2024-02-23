import React, { memo } from "react"
import type { FC, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const Dj: FC<IProps> = () => {
  return <div>Dj</div>
}

export default memo(Dj)
