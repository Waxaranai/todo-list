import MenuItem from "../ui/menu/MenuItem";
import { useState } from "react";
import { useSession } from "next-auth/client";
import { Avatar, Box, Button, ButtonGroup, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Header(props) {
    const { toggleColorMode } = useColorMode();
    const color = useColorModeValue("gray.800", "white");
    const navColor = useColorModeValue("gray.200", "gray.900");
    const themeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
    const [navShow, setNavOpen] = useState(false);
    const [session] = useSession();
    const trimName = (name: string, maxLength = 12): string => {
        if (name.length >= maxLength) return `${name.slice(0, maxLength)}...`;
        return name;
    };
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
            <Flex align="left" textColor={color}>
                {!session && (<></>)}
                {session && (<>
                    {session.user.image && <>
                        <Avatar src={session.user.image} name={session.user.name} />
                    </>}
                    <Flex direction="column" ml={session.user.image ? 3 : 0}>
                        <Text as="small">Signed in as</Text>
                        <Text as="h1" fontWeight="bold">{trimName(session.user.name)}</Text>
                    </Flex>
                </>)}
            </Flex>

            <Box display={{ base: "block", md: "none" }}>
                <ButtonGroup isAttached color={color}>
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
                    direction={["column", "column", "row", "row"]}
                    pt={[5, 5, 0, 0]}
                >
                    <Box display={{ base: "none", md: "block" }} >
                        <ButtonGroup>
                            <MenuItem to="/">Home</MenuItem>
                            {!session && <MenuItem to="/api/auth/signin">
                                Sign In
                            </MenuItem>}
                            {session && <MenuItem to="/api/auth/signout">
                                Sign Out
                            </MenuItem>}
                            <MenuItem onClick={toggleColorMode} isLast>
                                {themeIcon}
                            </MenuItem>
                        </ButtonGroup>
                    </Box>
                    <Box textAlign="center" display={{ base: "block", md: "none" }} >
                        <MenuItem to="/">Home</MenuItem>
                        {!session && <MenuItem to="/api/auth/signin">
                            Sign In
                        </MenuItem>}
                        {session && <MenuItem to="/api/auth/signout">
                            Sign Out
                        </MenuItem>}
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}
