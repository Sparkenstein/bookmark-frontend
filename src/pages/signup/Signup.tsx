import {
  Container,
  Card,
  Stack,
  Title,
  TextInput,
  Button,
  Divider,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <Container size="xs">
      <Card withBorder shadow="md" radius={"md"}>
        <Stack>
          <Title>Signup</Title>
          <TextInput label="Email" placeholder="Email" />
          <TextInput label="Password" placeholder="Password" />
          <TextInput label="Confirm Password" placeholder="Confirm Password" />
          <Button>Signup</Button>
          <Divider />
          <Button variant="outline" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};
