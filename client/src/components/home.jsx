// import useFetch from "./useFetch";
import { useState,useEffect } from "react";
import BlogList from "./blogList";
function Home() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
    .then(response => response.json())
    .then(data => setBlogData(data))
  },[])
  

  return (
    <div>

      <BlogList blogs={blogData}title="All Blogs" />

    </div>
  );
}

export default Home;
