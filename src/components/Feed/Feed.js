import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import DateRangeIcon from "@material-ui/icons/DateRange";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import Post from "./Post/Post";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import firebase from "firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [postsLoading, setPostsLoading] = useState(true);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setPostsLoading(false);
      });
  }, []);
  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#71B5F9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={DateRangeIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={VerticalSplitIcon}
            title="Write Article"
            color="#F5967C"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {postsLoading && (
        <div className="feed__loading">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default Feed;
