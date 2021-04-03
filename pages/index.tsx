import React from "react";
import Layout from "../components/Layout";
import TodoInput from "../components/ui/TodoInput";
import TodoItem from "../components/ui/TodoItem";
import { Text, Stack, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { ITodoItem } from "../interfaces";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { DeleteIcon } from "@chakra-ui/icons";

interface HomeProps {
  items: ITodoItem[]
}
class Home extends React.Component<HomeProps> {
  render() {
    const completedItems = this.props.items.filter(item => item.completed);
    const uncompletedItems = this.props.items.filter(item => !item.completed);
    const noItemsText = (text: string) => this.props.items.length ? text : "You have no tasks, would you like to add one?";
    return (
      <Layout>
        <Stack textAlign={"center"} mt={5} mb={10} spacing={5}>
          <Text as={"h1"} fontSize={{ base: "md", md: "lg" }} fontWeight={"bold"}>Todo List App</Text>
          <Text>
            A todo list app created using Next.js and NextAuth.js styled with chakra-ui and written in typescript
          </Text>
          <TodoInput />
        </Stack>
        <Stack mb={10}>
          <Tabs isFitted variant={"enclosed"} colorScheme={"teal"}>
            <TabList>
              <Tab>All</Tab>
              <Tab>Completed</Tab>
              <Tab>Uncompleted</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack spacing={3.5}>
                  {this.props.items.length ? this.props.items.map(item =>
                    (<TodoItem key={uuidv4()} item={item} />)
                  ) : (
                    <Stack mt={20} textAlign={"center"}>
                      <Text>You have no tasks, would you like to add one?</Text>
                    </Stack>
                  )}
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack spacing={3.5}>
                  {completedItems.length ? completedItems.map(item =>
                    (<TodoItem key={uuidv4()} item={item} />)
                  ) : (
                    <Stack mt={20} textAlign={"center"}>
                      <Text>{noItemsText("You haven't completed any task!")}</Text>
                    </Stack>
                  )}
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack spacing={3.5}>
                  {uncompletedItems.length ? uncompletedItems.map(item =>
                    (<TodoItem key={uuidv4()} item={item} />)
                  ) : (
                    <Stack mt={20} textAlign={"center"}>
                      <Text>{noItemsText("Congratulations, all tasks have been completed!")}</Text>
                    </Stack>
                  )}
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>

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