import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
        className="postImg"
        src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Corrupti ipsum beatae sunt esse dolorum eius laborum.
         Eum quidem fuga tempora quaerat aliquam temporibus eos corporis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Corrupti ipsum beatae sunt esse dolorum eius laborum.
         Eum quidem fuga tempora quaerat aliquam temporibus eos corporis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Corrupti ipsum beatae sunt esse dolorum eius laborum.
         Eum quidem fuga tempora quaerat aliquam temporibus eos corporis.
      </p>
    </div>
  )
}
