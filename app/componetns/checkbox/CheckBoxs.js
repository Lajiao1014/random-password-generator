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
        <div className="flex">
            <div className="used text-20px">
                <div>Characters used:</div>
            </div>
            <div className="checkbox flex  gap-2">
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