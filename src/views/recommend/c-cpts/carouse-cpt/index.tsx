import React, { memo, useEffect, useState, useRef } from "react"
import type { FC, ReactNode } from "react"
import type { CarouselRef } from "antd/lib/carousel"

import { Carousel } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

import { getBannerList } from "@/service/modules"
import { CarouseWrapper } from "./style"

interface IProps {
  children?: ReactNode
}

const CarouselCpt: FC<IProps> = () => {
  const carouselRef = useRef<CarouselRef>(null)
  const [banners, setBanners] = useState<any[]>([])
  const [blurbg, setBlurbg] = useState("")

  // 获取轮播图数据
  const _getBannerList = async () => {
    const { banners } = await getBannerList()
    setBanners(banners)
  }

  // 切换轮播图
  const handleChangeCarouse = (direction: string) => {
    direction === "next"
      ? carouselRef.current?.next()
      : carouselRef.current?.prev()
  }

  const handleBeforeChange = (current: number, next: number) => {
    const imageUrl = banners[next].imageUrl
    setBlurbg(`${imageUrl}?imageView&blur=40x20`)
  }

  useEffect(() => {
    _getBannerList()
  }, [])
  return (
    <CarouseWrapper $blurbg={blurbg}>
      <LeftOutlined
        className="change-arrow"
        style={{ marginRight: 42 }}
        onClick={() => handleChangeCarouse("prev")}
      />
      <Carousel
        className="carousel-content"
        ref={carouselRef}
        autoplay
        beforeChange={handleBeforeChange}
      >
        {banners.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.imageUrl} alt="" />
          </div>
        ))}
      </Carousel>
      <RightOutlined
        className="change-arrow"
        style={{ marginLeft: 42 }}
        onClick={() => handleChangeCarouse("next")}
      />
    </CarouseWrapper>
  )
}

export default memo(CarouselCpt)
