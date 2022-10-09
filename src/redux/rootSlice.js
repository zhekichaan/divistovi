const { createSlice } = require("@reduxjs/toolkit");

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isActive: false,
        selectedImage: "#",
    },
    reducers: {
        openModal(state, action) {
            state.isActive = !state.isActive
            state.selectedImage = action.payload
        }
    }
})

export const { openModal } = rootSlice.actions
export const rootReducer = rootSlice.reducer