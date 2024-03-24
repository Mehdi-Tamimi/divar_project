'use client'
import SliderMenu from "./sliderMenu";
import { useEffect, useState } from "react";

export default function SliderContainer() {
    type Topic = 'payment' | 'edit' | 'violation' | 'account' | 'search' | 'bussines'
    const [topic, setTopic] = useState<Topic>('payment')

    useEffect(() => {
        
    })


    return (
        <div className="px-4">
            <SliderMenu />
        </div>
    )
}