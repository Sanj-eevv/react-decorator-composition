import Button from "./index";

export default function OutlineButton({children, disabled = false, ...rest}) {
    return <Button className={`${disabled ? "border-gray-400" : "border-white"} border py-2 px-8`}
                   disabled={disabled}
                   {...rest}>
        {children}
    </Button>
}