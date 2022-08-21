import {useState} from "react";

export default function WithLabel(Component) {
    return function WrappedComponent({children, ...rest}) {
        const [clicked, setClicked] = useState(false);
        return <>
            <label onClick={() => {
                setClicked((prev) => true)
                setTimeout(() => {
                    setClicked(false)
                }, 2000);
            }}>{children}</label>
            <Component focused={clicked} {...rest}/>
        </>
    }
}