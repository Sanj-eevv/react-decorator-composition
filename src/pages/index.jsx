import {useState} from "react";
import TextField from "../ui/text-field";
import WithLabel from "../ui/with-label";
import OutlineButton from "../ui/button/outline";
import PrimaryButton from "../ui/button/primary";
import LinkButton from "../ui/button/link";
import CancelButton from "../ui/button/cancel";
import LoginButton from "../features/auth/buttons/login";
import IntegerField from "../ui/text-field/integer";


export default function Homepage() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        age: "",
    });
    const [busy, setBusy] = useState(false);
    const [user, setUser] = useState(undefined);

    const NameField = WithLabel(TextField);
    const EmailField = WithLabel(TextField);
    const AgeField = WithLabel(IntegerField);
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
            <AgeField value={form.age} onChange={age => setForm(prevState => ({...prevState, age}))}>
                <span style={{display: 'block'}}>Age</span>
            </AgeField>
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


