import "@/styles/main.scss";

import { ReactElement, ReactNode } from "react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import MuiProvider from "./mui-provider";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps): ReactElement {
  return <MuiProvider>{children}</MuiProvider>;
}

export default Providers;
