'use client'
import { useState } from 'react'
import CheckBox from './CheckBox'

const CheckBoxs = () => {
    const [options, setOptions] = useState([
        { label: 'ABC', checked: true },
        { label: 'abc', checked: true },
        { label: '123', checked: true },
        { label: '#$#', checked: false }
    ]);

    const handleChange = (index) => {
        const newOptions = [...options];
        newOptions[index].checked = !newOptions[index].checked;
        setOptions(newOptions);
    };

    return <>
        <div className="flex w-full items-center justify-between">
            <div className="used text-[20px] flex flex-col">
                <div>Characters</div><div>used:</div>
            </div>
            <div className="checkbox flex gap-8 mr-[40px] text-[20px]">
                {options.map((option, index) => (
                    <CheckBox
                        key={index}
                        label={option.label}
                        checked={option.checked}
                        onChange={() => handleChange(index)}
                    />
                ))}
            </div>
        </div>
    </>
}

export default CheckBoxs