import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile</label>
                <div className="settingsPP">
                    <img 
                        src="https://images.pexels.com/photos/1054201/pexels-photo-1054201.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        {/* <i className="settingsPPIcon fa-regular fa-circle-user"></i> */}
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Rohit" />
                <label>Email</label>
                <input type="email" placeholder="rohit@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
