import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full bg-slate-900 text-gray-300" style={{
      backgroundImage: "url('img.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Typesend />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;
// style={{
//   backgroundImage: "url('welcome.png')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// }}
const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="relative" >
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex flex-shrink h-screen items-center justify-center max-sm:50px" >
          <img src="welcome.png" alt="" style={{width: "500px"}} srcset="" />
          <h1 className="text-center ">
            <span className="text-blue-600 bg-white p-4 font-bold rounded-md">Welcome</span>
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
