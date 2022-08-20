import {useState} from "react";
import TextField from "../ui/text-field";
import WithLabel from "../ui/with-label";
// import {UserIcon} from "@heroicons/react";

export default function Homepage() {
    const [form, setForm] = useState({
        email: "",
        name: "",
    });

    const [busy, setBusy] = useState(false);

    const NameField = WithLabel(TextField);
    const EmailField = WithLabel(TextField);
    return <>
        <div className={"flex gap-3 mt-3"}>
            <NameField value={form.name} onChange={name =>
                setForm(prevState => ({...prevState, name}))
            }>
                <span style={{display: 'block'}}>Name</span>
            </NameField>
            <EmailField value={form.email} onChange={
                email => setForm(prevState => ({...prevState, email}))
            }>
                <span style={{display: 'block'}}>Email</span>
            </EmailField>
        </div>
        <div className={"flex gap-3 mt-3"}>
            <OutlineButton>
                Outlined
            </OutlineButton>
            <PrimaryButton busy={busy} onClick={() => {
                setBusy(true);
                setTimeout(() => {
                    setBusy(false);
                }, 3000);
            }
            }>
                Primary
            </PrimaryButton>
            <LinkButton>
                Link
            </LinkButton>
            <CancelButton>
                Cancel
            </CancelButton>
        </div>

    </>
}


export function LinkButton({children, ...rest}) {
    return <>
        <Button className={"border border-transparent"}
                {...rest}>
            {children}
        </Button>
    </>
}


export function OutlineButton({children, disabled = false, ...rest}) {
    return <>
        <Button className={`${disabled ? "border-gray-400" : "border-white"} border py-2 px-8`}
                disabled={disabled}
                {...rest}>
            {children}
        </Button>
    </>
}

export function PrimaryButton({children, busy = false, disabled = false, ...rest}) {
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

export function CancelButton({children, disabled = false, ...rest}) {
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

export function Button({
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