'use client'
import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import FeatherIcon from 'feather-icons-react';

const Sidebar = () => {
    const [value, setValue] = useState(12);

    const handleSliderChange = (newValue) => {
        setValue(newValue);
    };

    return <>
        <div className="flex items-center  bg-[#f7f0f0] w-[500px]">
            <div className="text-[20px] flex flex-col">
                Password length: <span>{value}</span>
            </div>
            <div className="flex items-center justify-between h-[50px] w-[450px] gap-4">
                <FeatherIcon
                    icon="minus-circle"
                    className="cursor-pointer text-blue-600 hover:text-blue-700 transition-colors w-8 h-8 mt-[10px] t"
                    onClick={() => handleSliderChange(Math.max(1, value - 1))}
                />
                <div className="flex-1">
                    <Slider
                        min={1}
                        max={50}
                        value={value}
                        onChange={handleSliderChange}
                        railStyle={{
                            backgroundColor: '#e2e2e2',
                            height: 15,
                            borderRadius: 10
                        }}
                        trackStyle={{
                            backgroundColor: '#3b82f6',
                            height: 15,
                            borderRadius: 10
                        }}
                        handleStyle={{
                            borderColor: '#3b82f6',
                            height: 25,
                            width: 25,
                            marginTop: -5,
                            backgroundColor: '#fff',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            border: '2px solid #3b82f6',
                            opacity: 1,
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <FeatherIcon
                    icon="plus-circle"
                    className="cursor-pointer text-blue-600 hover:text-blue-700 transition-colors w-8 h-8 mt-[10px]"
                    onClick={() => handleSliderChange(Math.min(50, value + 1))}
                />
            </div>
        </div>
    </>
}

export default Sidebar