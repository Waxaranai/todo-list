import React from "react";
import Link from "next/link";
import { Button, Text, useColorModeValue } from "@chakra-ui/react";

export default function MenuItem({ children, isLast = false, fontWeight = "normal", to = "/", ...rest }) {
    const color = useColorModeValue("gray.800", "white");
    return (<>
        <Button
            display={{ base: "none", md: "block" }}
            mb={{ base: isLast ? 3 : 5, md: 0 }}
            fontWeight={fontWeight}
            color={color}
            {...rest}
        >
            <Link href={to}>{children}</Link>
        </Button>
        <Text
            display={{ base: "block", md: "none" }}
            mb={{ base: isLast ? 3 : 5, md: 0 }}
            fontWeight={fontWeight}
            color={color}
            {...rest}
        >
            <Link href={to}>{children}</Link>
        </Text>
    </>);
};