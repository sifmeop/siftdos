import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITheme {
  theme: string
}

const initialState: ITheme = {
  theme: 'dark'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    }
  }
})

export const themeReducer = themeSlice.reducer
export const { changeTheme } = themeSlice.actions
