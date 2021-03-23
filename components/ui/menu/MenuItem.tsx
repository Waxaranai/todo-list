import React from "react";
import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";

export default function MenuItem({ children, isLast = false, to = "/", ...rest }) {
    const color = useColorModeValue("gray.900", "white");
    return (
        <Text
            mb={{ base: isLast ? 3 : 5, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 1 }}
            display="block"
            color={color}
            {...rest}
        >
            <Link href={to}>{children}</Link>
        </Text>
    );
};