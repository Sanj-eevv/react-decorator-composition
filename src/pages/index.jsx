import {useState} from "react";
import TextField from "../ui/text-field";
import WithLabel from "../ui/with-label";

export default function Homepage()  {
    let [form, setForm] = useState({
        email: "",
        name: "",
    });

    const NameField = WithLabel(TextField);
    const EmailField = WithLabel(TextField);

    return <>
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
    </>
}

