import React, {useState} from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/button/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: "Description"},
    {id: 2, title: 'JavaScript-2', body: "Description"},
    {id: 3, title: 'JavaScript-3', body: "Description"},
  ])

  const [title, setTitle] = useState('');

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }

  return (
    <div className="App">
      <form>
        <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Post name"/>
        <MyInput type="text" placeholder="Post description"/>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title='List posts 1'/>
    </div>
  );
}

export default App;
