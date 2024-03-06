import { useState } from "react";
import { useStore } from "../app/store";

function PostData() {
  const [input, setInput] = useState("");
  const { postdata } = useStore();

  const handleSubmit = async () => {
    const response = await postdata(input);
    console.log(response);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PostData;
