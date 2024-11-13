import {
  Button,
  Container,
  Stack,
  Title,
  TextInput,
  Card,
  Divider,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useInputState("");
  const [password, setPassword] = useInputState("");

  const BE_URL = import.meta.env.VITE_BE_URL;

  const navigate = useNavigate();
  const handleLogin = () => {
    fetch(`${BE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            localStorage.setItem("token", data.token);
            navigate("/");
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Container size="xs">
      <Card withBorder shadow="md" radius={"md"}>
        <Stack>
          <Title>Login</Title>
          <TextInput
            value={email}
            onChange={setEmail}
            label="Email"
            autoComplete="email"
            placeholder="Email"
          />
          <TextInput
            value={password}
            onChange={setPassword}
            label="Password"
            autoComplete="current-password"
            placeholder="Password"
          />
          <Button onClick={handleLogin}>Login</Button>
          <Divider />
          <Button variant="outline" onClick={() => navigate("/signup")}>
            Register
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};
