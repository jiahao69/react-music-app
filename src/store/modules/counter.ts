import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 99
  },
  reducers: {
    increment(state) {
      state.count += 1
    }
  }
})

// 此处action会根据name和reducers自动生成type和payload
export const { increment } = counterSlice.actions

export default counterSlice.reducer
