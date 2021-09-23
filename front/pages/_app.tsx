import React, { ReactElement } from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global-style";

const AppProvider: React.FC<{ contexts: ReactElement[] }> = ({
  contexts,
  children,
}) =>
  contexts.reduce(
    (prev: ReactElement, context: ReactElement) =>
      React.createElement(context, { children: prev }),
    children
  );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
