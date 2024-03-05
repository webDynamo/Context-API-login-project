import Login from "./component/login";
import Profile from "./component/profile";
import UserContextProvider from "./contextfile/Usercontextprovider";


function App() {
  return (
    <UserContextProvider>
      
    <div className=" flex justify-center items-center flex-col h-screen w-screen ">
        <h1 className="text-2xl font-bold w-screen text-center ">THIS IS CONTEXT API PROJECT BEST EXAMPLE AND UNDERSTANDING</h1>
        <Login/>
        <Profile/>
    </div>
   
    </UserContextProvider>
  );
}

export default App;
