// "use client";

// import { store } from "@/utils/rdeux/store";
// import { Provider } from "react-redux";

// export function ReduxProvider({ children }: { children: React.ReactNode }) {
//   return <Provider store={store}>{children}</Provider>;
// }

"use client";

import { store } from "@/utils/rdeux/store";
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}