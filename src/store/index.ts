import { configureStore } from "@reduxjs/toolkit"
import { useSelector, TypedUseSelectorHook } from "react-redux"

import counterReducer from "./modules/counter"

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// 从 store 本身推断出 `RootState`类型
type IRootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
