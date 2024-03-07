import { useEffect } from "react";
import { useStore } from "../app/store";

function UserData() {
  const { fetchdata, data } = useStore();
  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {data.map((user) => (
        <>
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
          <li>{user.age}</li>
        </>
      ))}
    </div>
  );
}

export default UserData;
