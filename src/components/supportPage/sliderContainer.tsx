'use client'
import SliderMenu from "./sliderMenu";
import { useEffect, useState } from "react";
import TopicsMenu from "./topicsMenu";


export default function SliderContainer() {
    type Topic = 'payment' | 'edit' | 'violation' | 'account' | 'search' | 'business'
    const [topic, setTopic] = useState<Topic>('payment')
    console.log(topic)
    

    return (
        <div className="px-4">
            <SliderMenu topic={topic} setTopic={setTopic}/>
            <TopicsMenu topic={topic}/>
        </div>
    )
}