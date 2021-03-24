import React from "react";
import MenuItem from "../ui/menu/MenuItem";
import { Box, Button, ButtonGroup, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { signIn } from "next-auth/client";

export default function Header(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const navColor = useColorModeValue("transparent", "gray.900");
    const iconColor = useColorModeValue("black", "white");
    const themeIcon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;
    const [navShow, setNavOpen] = React.useState(false);
    const toggleMenu = () => setNavOpen(!navShow);
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={3}
            bg={navColor}
            color="white"
            {...props}
        >
            <Flex align="left">
                {/* For an Logo component */}
            </Flex>

            <Box display={{ base: "block", md: "none" }}>
                <ButtonGroup isAttached color={iconColor}>
                    <Button mr="-px" onClick={toggleColorMode}>
                        {themeIcon}
                    </Button>
                    <Button onClick={toggleMenu}>
                        {navShow ? <CloseIcon /> : <HamburgerIcon />}
                    </Button>
                </ButtonGroup>

            </Box>

            <Box
                display={{ base: navShow ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align="center"
                    justify={["center", "center", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[5, 5, 0, 0]}
                >
                    <Box display={{ base: "none", md: "block" }} >
                        <ButtonGroup>
                            <MenuItem to="/">
                                <Button fontWeight="normal">Home</Button>
                            </MenuItem>
                            <MenuItem to="/api/auth/signin" onClick={signIn}>
                                <Button fontWeight="normal">Sign In</Button>
                            </MenuItem>
                            <MenuItem isLast>
                                <Button onClick={toggleColorMode}>{themeIcon}</Button>
                            </MenuItem>
                        </ButtonGroup>
                    </Box>
                    <Box display={{ base: "block", md: "none" }} >
                        <MenuItem to="/">Home</MenuItem>
                        <MenuItem to="/api/auth/signin" onClick={(e) => { e.preventDefault(); signIn(); }} isLast>
                            Sign In
                        </MenuItem>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}
