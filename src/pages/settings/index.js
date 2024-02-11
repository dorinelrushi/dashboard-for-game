import React, { useState } from "react";
import Image from "next/image";
function Settings() {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadProfilePicture(file);
    }
  };

  const uploadProfilePicture = (file) => {
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <div className=" w-[58%] pb-[100px] h-[100vh] overflow-y-scroll rounded-[35px] p-[20px] m-[20px]">
      <div className=" ">
        <form>
          <h2 className="text-[white] mb-[2px] text-[30px]">Username</h2>
          <p className="text-[#7182c481] mb-[20px]">
            Change username when you want to login to dashboard
          </p>
          <div>
            <input
              className="w-[50%] text-[white] p-[13px] mb-[10px] mt-[10px] bg-[#1b266b] rounded-[40px]"
              type="text"
              placeholder="federicGozzy"
            />
            <p className="text-[#7182c481] mb-[28px]">
              Must be unique only follow _ symbol for your username
            </p>
          </div>
          <div>
            <h2 className="text-[white] mb-[2px] text-[30px]">Real Name</h2>
            <p className="text-[#7182c481] mb-[20px]">
              Change your personal name, this setting will display on your
              Homepage
            </p>
            <div className="flexinput flex items-center gap-[15px] w-[52%]">
              <input
                type="text"
                className="w-[47%]  text-[white] p-[13px] mb-[10px] mt-[10px] bg-[#1b266b] rounded-[40px]"
                placeholder="Federic"
              />
              <input
                className="w-[47%]  text-[white]  p-[13px] mb-[10px] mt-[10px] bg-[#1b266b] rounded-[40px]"
                type="text"
                placeholder="Gozzy"
              />
            </div>
          </div>
          {/*profile */}
          <div className="flex items-start gap-[35px] mt-[35px]">
            <div className="profileChange w-[150px] rounded-[20px] h-[150px] ">
              {profilePicture ? (
                <Image
                  src={profilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              ) : (
                <p>No image selected</p>
              )}
            </div>
            <div className="profilePicture flex flex-col">
              <h2 className="text-[white] text-[28px]">Profile Picture </h2>
              <p className="mb-[25px] text-[#7182c481]">
                This settings will change your photos profile
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: "none" }}
                id="profilePictureInput"
              />
              <label
                htmlFor="profilePictureInput"
                className="bg-[#0e98fa] w-[40%] cursor-pointer text-[white] p-[12px] px-[18px] rounded-[50px]"
              >
                Upload Now
              </label>
              {/* Profile picture upload related elements */}
            </div>
          </div>
          {/*  */}
          <div className="bio mt-[25px]">
            <h2 className="text-[white] mb-[2px] text-[30px]">Bio</h2>
            <p className="text-[#7182c481] mb-[25px]">
              This bio will display under your post, try to write something
              intersting
            </p>
            <textarea
              className="w-[70%] bg-[#1b266b] p-[15px] resize-none rounded-[10px] text-[white] mb-[25px]"
              placeholder="write something"
            ></textarea>
          </div>
          <button className="bg-[#0e98fa] mb-[50px] text-[white] p-[15px] px-[25px] rounded-[50px] ">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
