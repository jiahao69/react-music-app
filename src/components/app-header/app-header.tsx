import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { NavLink } from "react-router-dom"

import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style"
import headerTitles from "@/assets/data/header_titles.json"

import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  const calcItemShape = (item: any) => {
    if (item.type === "path") {
      return (
        <NavLink to={item.link}>
          <div> {item.title}</div>
          <div className="icon sprite_01"></div>
        </NavLink>
      )
    } else if (item.type === "link") {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="header-content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="title-item" key={item.title}>
                  {calcItemShape(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="my-input"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />

          <div className="creator-btn">创作者中心</div>
          <div className="login-btn">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
