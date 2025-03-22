import React from "react";

function MainContent() {
  return (
    <div className="  w-[50%] mx-auto flex flex-col justify-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Fun facts about React!</h1>
        <ul className="flex flex-col ml-12">
          <li className="text-xl font-medium list-disc">
            was first released in 2013
          </li>
          <li className="text-xl font-medium list-disc">
            was originally created by{" "}
            <strong>
              <i>Suprim Khatri</i>
            </strong>
          </li>
          <li className="text-xl font-medium list-disc">
            Has well over 200k stars on github
          </li>
          <li className="text-xl font-medium list-disc">
            Is maintained by meta
          </li>
          <li className="text-xl font-medium list-disc">
            Powers thousand of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
