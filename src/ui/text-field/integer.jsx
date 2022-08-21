import TextField from "./index";

export default function IntegerField({
                                 onChange = () => {
                                 },
                                 ...rest
                             },) {
    function OnlyInteger(str) {
        return str.replace(/[^0-9]/g, "");
    }

    return <TextField onChange={val => onChange(OnlyInteger(val))} {...rest}/>
}
