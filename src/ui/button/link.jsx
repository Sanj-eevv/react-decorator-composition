import Button from "./index";

export default function LinkButton({children, ...rest}) {
    return <Button className={"border border-transparent"}
                   {...rest}>
        {children}
    </Button>
}
