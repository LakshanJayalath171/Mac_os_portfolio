import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, window_config } from "../../Constatnt/WINDOW_CONFIG.js";

const useWindowStore = create(
    immer((set) => ({
        windows: window_config,
        nextZIndex: INITIAL_Z_INDEX + 1,

        open_window: (windowKey, data = null) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.isOpen = true;
                win.zIndex = state.nextZIndex;
                win.data = data ?? win.data;
                state.nextZIndex++;
            }),

        close_window: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.isOpen = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            }),

        focus_window: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.zIndex = state.nextZIndex;
                state.nextZIndex++;
            }),
    }))
);

export default useWindowStore;