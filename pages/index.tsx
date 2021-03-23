import React from "react";
import Layout from "../components/Layout";
import { Text, VStack } from "@chakra-ui/react";

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <VStack marginTop="5rem">
          <Text as="h1" fontWeight="bold">Todo List App</Text>
          <Text align="center">
            An todo list app created using Next.js and NextAuth.js styled with chakra-ui and written in typescript
          </Text>
        </VStack>
      </Layout>
    );
  }
}
