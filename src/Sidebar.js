import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core"; //IconButton clickable effect
import StoryIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import VertDotsIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
import db from "./firebase";
import { Unsubscribe } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //creating snapshot of database
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        //creating own object
        snapshot.docs.map((doc) => ({
          id: doc.id, //id inside firebase
          data: doc.data(), //
        }))
      )
    );

    //detach real time listener after it's done using it
    return () => {
      Unsubscribe();
    };
  }, []);

  // generating random number for avatar
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />{" "}
        {/*? for protecting us from undefined users from async await*/}
        <div className="sidebar__headerRight">
          <IconButton>
            <StoryIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <VertDotsIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
