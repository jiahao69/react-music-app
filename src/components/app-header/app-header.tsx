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
  return (
    <HeaderWrapper>
      <div className="header-content ">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="title-item" key={item.title}>
                  {
                    <NavLink to={item.link}>
                      <div> {item.title}</div>
                      <div className="icon sprite_01"></div>
                    </NavLink>
                  }
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

          <div className="login-btn">登录</div>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
