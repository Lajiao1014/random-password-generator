'use client'
import CheckBoxs from './checkbox/CheckBoxs'

const Password = () => {
    return <>
        <div className="flex justify-between items-center w-full gap-4">
            <div className="flex items-center justify-between h-[50px] w-[350px] rounded-[50px] border border-[#ccc] p-[10px] bg-[#f7f0f0]">
                <div className="flex flex-grow ml-[10px]">T</div>
                <div className="bg-[antiquewhite] rounded-[5px] px-[8px] py-[3px] w-[90px] text-[15px]">
                    Very weak
                </div>
            </div>
            <div className="bg-[blue] w-[80px] h-[50px] rounded-[50px] flex items-center justify-center ml-[10px]">
                <button className="flex items-center text-white">
                    Copy
                </button>
            </div>
        </div>
    </>
}

export default Password