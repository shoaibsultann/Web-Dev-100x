import { useEffect, useRef } from "react";

export const usePrev = (value) => {
    const ref = useRef();
    console.log("Re-Render happended with a new value " + value);

    useEffect(() => {
        console.log("Update the ref to be " + value);
        ref.current = value; // first it's value will be 0
    }, [value]);

    console.log("Returned " + ref.current);
    return ref.current; // firstly it's undefined => after value update in the state variable from 0 to 1 here it will be 0
}

// it return first, effect gets called later