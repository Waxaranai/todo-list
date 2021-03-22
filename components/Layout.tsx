import { Container } from "@chakra-ui/layout";

export default function Layout({ children }) {
  return (
    <Container>
      <main>
        {children}
      </main>
    </Container>
  )
}