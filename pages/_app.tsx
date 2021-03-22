import React from "react";
import { Provider } from "next-auth/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { NextComponentType } from "next";

interface AppProps {
  Component: NextComponentType;
  pageProps: any;
}
class App extends React.Component<AppProps> {
  render() {
    return (
      <ChakraProvider theme={theme}>
        <Provider
          options={{
            clientMaxAge: 0,
            keepAlive: 0
          }}
          session={this.props.pageProps.session} >
          <this.props.Component {...this.props.pageProps} />
        </Provider>
      </ChakraProvider>
    );
  }
}

export default App;