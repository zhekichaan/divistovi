const { createSlice } = require("@reduxjs/toolkit");

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isActive: false,
        isMenuActive: false,
        selectedImage: "#",
    },
    reducers: {
        openModal(state, action) {
            state.isActive = !state.isActive
            state.selectedImage = action.payload
        },
        openMenuModal(state, action) {
            state.isMenuActive = !state.isMenuActive
        }
    }
})

export const { openModal, openMenuModal } = rootSlice.actions
export const rootReducer = rootSlice.reducer