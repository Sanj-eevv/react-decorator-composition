import {useEffect, useRef} from "react";

export default function TextField({value, onChange = () => {}, focused = false}) {
    const ref = useRef();
    useEffect(() => {
        if (!focused) return;
        ref.current?.focus();
    }, [focused])

    return <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={ref}/>
}