import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                src="https://images.pexels.com/photos/1062249/pexels-photo-1062249.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="" 
                className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> <b>Author: Rohit</b></span>
                <span className="singlePostAuthor">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam similique, 
                tempora sunt corporis distinctio autem debitis excepturi doloremque necessitatibus. Sed.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam similique, 
                tempora sunt corporis distinctio autem debitis excepturi doloremque necessitatibus. Sed.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam similique, 
                tempora sunt corporis distinctio autem debitis excepturi doloremque necessitatibus. Sed.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam similique, 
                tempora sunt corporis distinctio autem debitis excepturi doloremque necessitatibus. Sed.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam similique, 
                tempora sunt corporis distinctio autem debitis excepturi doloremque necessitatibus. Sed.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam similique, 
                tempora sunt corporis distinctio autem debitis excepturi doloremque necessitatibus. Sed.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam similique, 
                tempora sunt corporis distinctio autem debitis excepturi doloremque necessitatibus. Sed.
            </p>
        </div>
    </div>
  )
}
