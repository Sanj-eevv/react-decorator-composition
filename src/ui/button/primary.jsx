import Button from "./index";

export default function PrimaryButton({children, busy = false, disabled = false, ...rest}) {
    const defaultBaseClass = "py-2 px-8 bg-blue border border-blue rounded-lg";
    const defaultDisabledClass = "py-2 px-8 bg-gray-400 border border-gray-400 text-gray-500 cursor-not-allowed";
    const busyBaseClass = "py-2 px-8 bg-blue-300 opacity-70 rounded-lg cursor-not-allowed";
    return <Button
        className={`${
            busy ? busyBaseClass :
                disabled ? defaultDisabledClass : defaultBaseClass}`}
        {...rest}
        disabled={disabled}
        busy={busy}
    >
        {children}
    </Button>
}
