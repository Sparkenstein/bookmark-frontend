import { Button, Card, Group, Stack, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Bookmark = {
  _id: string;
  name: string;
  link: string;
};

function App() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [name, setName] = useInputState("");
  const [link, setLink] = useInputState("");

  const navigate = useNavigate();
  const BE_URL = import.meta.env.VITE_BE_URL;

  useEffect(() => {
    fetch(`${BE_URL}/bookmarks`, {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBookmarks(data);
      });
  }, [BE_URL]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleAddBookmark = () => {
    fetch(`${BE_URL}/bookmarks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ name, link }),
    });
  };

  return (
    <div>
      <Group>
        {" "}
        <Button onClick={handleLogout}>Logout</Button>
        <Button>Add Bookmark</Button>
      </Group>
      <Card w="20%">
        <Stack>
          <TextInput
            label="Name"
            placeholder="Name"
            value={name}
            onChange={setName}
          />
          <TextInput
            label="Link"
            placeholder="Link"
            value={link}
            onChange={setLink}
          />
          <Button onClick={handleAddBookmark}>Add</Button>
        </Stack>
      </Card>
      {bookmarks.map((bookmark) => (
        <Card key={bookmark._id} withBorder w="20%">
          <a href={bookmark.link} target="_blank">
            {bookmark.name}
          </a>
        </Card>
      ))}
    </div>
  );
}

export default App;
