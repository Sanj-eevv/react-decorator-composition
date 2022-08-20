import Button from "./index";
export default function CancelButton({children, disabled = false, ...rest}) {
    return <>
        <Button
            className={`${disabled ? 'bg-gray-400 text-gray-500 cursor-not-allowed' : "bg-red-200 text-red-500"} py-2 px-8 rounded-lg`}
            {...rest}
            disabled={disabled}
        >
            {children}
        </Button>
    </>
}
