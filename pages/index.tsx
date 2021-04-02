import React from "react";
import Layout from "../components/Layout";
import TodoInput from "../components/ui/TodoInput";
import TodoItem from "../components/ui/TodoItem";
import { Text, Stack } from "@chakra-ui/react";
import { ITodoItem } from "../interfaces";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

interface HomeProps {
  items: ITodoItem[]
}
class Home extends React.Component<HomeProps> {
  render() {
    return (
      <Layout>
        <Stack textAlign={"center"} mt={5} mb={10} spacing={5}>
          <Text as={"h1"} fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>Todo List App</Text>
          <Text>
            A todo list app created using Next.js and NextAuth.js styled with chakra-ui and written in typescript
          </Text>
          <TodoInput />
        </Stack>
        <Stack mb={10} spacing={3.5}>
          {this.props.items &&
            (this.props.items.map(item =>
              (<TodoItem key={uuidv4()} item={item} />)
            ))
          }
        </Stack>
      </Layout>
    );
  }
}

export const mapState = (state: { todosReducer: { items: ITodoItem[] } }) => {
  const { items } = state.todosReducer;
  return { items };
}

export default connect(mapState)(Home);