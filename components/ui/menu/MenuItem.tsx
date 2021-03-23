import React from "react";
import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";

export default function MenuItem({ children, isLast = false, to = "/", ...rest }) {
    const color = useColorModeValue("black", "white");
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            {...rest}
            textColor={color}
        >
            <Link href={to}>{children}</Link>
        </Text>
    );
};