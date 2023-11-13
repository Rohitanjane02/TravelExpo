// import TopBar from "./components/topbar/TopBar";
// import Register from "./pages/register/Register";

// import Topbar from "./components/topbar/TopBar";
import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// function App() {
//   return (
//     <>
//     {/* // need to change font family & do same stuff as he deiscussed in initial part of video */}
//       <TopBar/>
//       <Register/>
//     </>
//   );
// }
// export default App;

import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";



function App() {

  const user = true;

  return (

    <Router>
      <TopBar/>
      {/* <Topbar/> */}

      <Routes>

        <Route path="/" element={<Homepage/>} />

        <Route path="/register" element={user ? <Homepage /> : <Register />} />

        <Route path="/login" element={user ? <Homepage /> : <Login />} />

        <Route path="/settings" element={user ? <Settings /> : <Register />} />

        <Route path="/write" element={user ? <Write /> : <Register />} />

        <Route path="/post/:postId" element={<Single />} />

      </Routes>

    </Router>

  );

}

export default App;