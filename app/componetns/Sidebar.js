'use client'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import FeatherIcon from 'feather-icons-react';

const Sidebar = () => {

    const a = 1


    return <>
        <div className="flex items-center justify-between bg-[#f7f0f0] w-[400px] ">
            <div>Password length:{a}</div>
            <i className='bx bxs-minus-circle'></i>
            <FeatherIcon icon="minus-circle" className="minus-circle" />
            <Slider />
            <FeatherIcon icon="plus-circle" className="minus-circle" />
        </div>
    </>
}


export default Sidebar