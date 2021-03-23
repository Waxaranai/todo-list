import React from "react";
import MenuItem from "../ui/menu/MenuItem";
import { Box, Flex } from "@chakra-ui/react";
import { MenuOpenIcon, MenuCloseIcon } from "../ui/menu/MenuIcon";

interface HeaderState {
    isOpen: boolean;
}
export default class Header extends React.Component<{}, HeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    render() {
        const toggleMenu = () => this.setState({ isOpen: !this.state.isOpen });
        return (
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                mb={8}
                p={8}
                bg={["primary.500", "primary.500", "transparent", "transparent"]}
                color={["white", "white", "primary.700", "primary.700"]}
                {...this.props}
            >
                <Flex align="center">
                    {/* For an Logo component */}
                </Flex>

                <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                    {this.state.isOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
                </Box>

                <Box
                    display={{ base: this.state.isOpen ? "block" : "none", md: "block" }}
                    flexBasis={{ base: "100%", md: "auto" }}
                >
                    <Flex
                        align="center"
                        justify={["center", "space-between", "flex-end", "flex-end"]}
                        direction={["column", "row", "row", "row"]}
                        pt={[4, 4, 0, 0]}
                    >
                        <MenuItem to="/">Home</MenuItem>
                    </Flex>
                </Box>
            </Flex>
        );
    }
}
