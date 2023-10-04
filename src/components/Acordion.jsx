// sorun şu ki state e 1 i yazdırıyorum ama kalkmadığı için 2 yazdıramıyorum yani favori listesi açılmıyor


import { useState } from "react";


const Acordion = ({ id, title, children, isOpen, setIsOpen }) => {


    return (
        <div className="p-2 relative mb-3 bg-brown-light bg-opacity-30">
            <button onClick={() => setIsOpen(isOpen === id ? null : id)} className=" text-start text-sm text-brown-dark p-1 w-full">
                {title}
            </button>
            <div className={`${(isOpen !== id) && "hidden"}`}>
                <div className="border-brown-light border-t border-opacity-50 mt-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Acordion