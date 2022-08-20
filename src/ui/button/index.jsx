
export default function Button({
                           children, className, onClick = () => {
    }, disabled, busy = false, ...rest
                       }) {
    const defaultBaseClass = "shadow-mg focus:cursor-pointer transition duration-300";
    return <>
        <button
            disabled={disabled}
            onClick={(e) => {
                !busy && onClick(e)
            }}
            className={`${defaultBaseClass} ${className ? className : ""}`}
            {...rest}
        >
            {children}
        </button>
    </>
}