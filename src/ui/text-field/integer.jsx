import TextField from "./index";

export default function IntegerField({onChange = ()=>{}, ...rest}) {

    function onlyInteger(str) {
        return str.replace(/\D/g, "");
    }
    return <TextField onChange={val => onChange(onlyInteger(val))} {...rest}/>
}