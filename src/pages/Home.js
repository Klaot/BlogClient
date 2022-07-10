import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {

    const [postList, setPostList] = useState([]);
    const history = useNavigate()

    useEffect(()=> {
      axios.get("http://localhost:3001/posts").then((response) => {
          setPostList(response.data); 
      })},[])

  return (
    <div>
        {postList.map((item) => {
        return (
          <div key={item.id} className="posts" onClick={() => history(`/post/${item.id}`)}>
            <div className="title"><h1>{item.title}</h1></div>
            <div className="post-text">{item.postText}</div>
            <div className="user-name"><h3>Автор: {item.userName}</h3></div>
          </div>
      )})}
    </div>
  )
}

export default Home