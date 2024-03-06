import { useEffect } from "react";
import { useStore } from "../app/store";


function UserData() {
 const { fetchdata, data } = useStore();
 useEffect(() => {
   fetchdata();
 }, []);
 return (
   <div>
     {data.map((user) => (
       <li key={user.id}>{user.firstName}</li>
     ))}
   </div>
 );
}


export default UserData;
