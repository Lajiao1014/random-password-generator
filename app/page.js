'use client'

import CheckBoxs from "./componetns/checkbox/CheckBoxs";
import Password from "./componetns/Password";
import Sidebar from "./componetns/Sidebar";

export default function Home() {
  return <>
    <div className="flex justify-center items-center h-screen w-600px">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-48px text-center">
            Random Password Generator
          </h1>
          <div className="text-center">
            Create strong and secure passwords to keep your account safe online.
          </div>
          <div className="flex justify-center ">
            <img src="/town.svg" className="w-[400px] h-[400px]" />
            <div className="flex justify-around items-center flex-col h-[350px]">

              <Password />
              <Sidebar />
              <div >
                <CheckBoxs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
