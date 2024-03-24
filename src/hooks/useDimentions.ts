import { useState, useEffect } from "react";


export default function useDimentions() {
    type Width = undefined | number
    type BreakPoint = undefined | 's' | 'xs' | 'sm' | 'md' | 'lg'
    const [width,setWidth] = useState<Width>(undefined)
    const [breakPoint, setBreakPoint] = useState<BreakPoint>('s')
    const handleOnResize = () => {
        const windowWidth: number = window.innerWidth
        if (windowWidth < 520) {
            setBreakPoint('s')

        }
        else if (windowWidth < 768) {
            setBreakPoint('xs')

        }
        else if (windowWidth < 960) {
            setBreakPoint('sm')

        }
        else if (windowWidth < 1024) {
            setBreakPoint('md')
        }
        else if (windowWidth > 1024) {
            setBreakPoint('lg')
        }
        
    }
}