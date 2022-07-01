import { configureStore } from "@reduxjs/toolkit";
import RandoSlice from "./RandoSlice";

export const store = configureStore({
  reducer: { rando: RandoSlice },
});
