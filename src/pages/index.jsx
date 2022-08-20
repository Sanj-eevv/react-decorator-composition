import {useState} from "react";
import {UserIcon} from "@heroicons/react/solid";
import TextField from "../ui/text-field";
import WithLabel from "../ui/with-label";
import OutlineButton from "../ui/button/outline";
import PrimaryButton from "../ui/button/primary";
import LinkButton from "../ui/button/link";
import CancelButton from "../ui/button/cancel";
import LoginButton from "../features/auth/buttons/login";


export default function Homepage() {
    const [form, setForm] = useState({
        email: "",
        name: "",
    });
    const [busy, setBusy] = useState(false);
    const [user, setUser] = useState(undefined);

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
            {!user ? (<LoginButton {...{setUser, busy, setBusy}}>
            </LoginButton>) : <div>{user.name}</div>
            }
        </div>

    </>
}
//

