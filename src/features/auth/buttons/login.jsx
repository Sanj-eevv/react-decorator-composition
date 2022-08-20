import {UserIcon} from "@heroicons/react/solid";
import PrimaryButton from "../../../ui/button/primary";

export default function LoginButton({
                                        busy, setBusy = () => {
    }, setUser = () => {
    }
                                    },) {
    return <PrimaryButton busy={busy} onClick={() => {
        setBusy(true);
        setTimeout(() => {
            setUser({
                name: 'Sanjeev',
                email: 'me@you.com',
                lastLoggedInAt: new Date(),
            })
            setBusy(false);
        }, 1000);
    }
    }>
        <div className={"flex gap-2 items-center"}>
            <div>
                <UserIcon className={"h-4 w-4"}/>
            </div>
            <div>
                Log In
            </div>
        </div>
    </PrimaryButton>
}