import hyRequest from "../index"

export function getBannerList() {
  return hyRequest.get({ url: "/banner" })
}
