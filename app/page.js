import Image from "next/image";
import Password from "./componetns/Password";


export default function Home() {
  return <>
    <div className="flex justify-center h-screen w-300px">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-48px text-center">Random Password Generator</h1>
          <div className="text-center">
            Create strong and secure passwords to keep your account safe online.
          </div>
          <Password />
        </div>
      </div>
    </div>
  </>
}
