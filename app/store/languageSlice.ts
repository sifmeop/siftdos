import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ILanguage {
  language: string
}

const initialState: ILanguage = {
  language: 'en'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  }
})

export const languageReducer = languageSlice.reducer
export const { changeLanguage } = languageSlice.actions
