import { useState } from "react";

import Button from "./Button";
import Stack from "./Stack";
import TextArea from "./TextArea";

interface Props {
  onSubmit: (message: string) => void;
}

export default function PostForm({ onSubmit }: Props) {
  const [message, setMessage] = useState("");

  return (
    <Stack>
      <TextArea value={message} onChange={setMessage} />
      <Button
        label="Post"
        onClick={() => {
          onSubmit(message);
        }}
      />
    </Stack>
  );
}
