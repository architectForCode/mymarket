import React, { ReactElement } from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global-style";
import UserProvider from "../contexts/User";

const AppProvider: React.FC<{ contexts: any[] }> = ({ contexts, children }) =>
  contexts.reduce(
    (prev: React.FunctionComponent, context: React.FunctionComponent) =>
      React.createElement(context, {}, prev),
    children
  );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider contexts={[UserProvider]}>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
}
export default MyApp;
