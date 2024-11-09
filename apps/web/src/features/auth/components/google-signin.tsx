import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { oAuthSignIn } from "../utils/utils";

const GoogleSignIn = () => {
    const navigate = useNavigate();

    return (
        <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => oAuthSignIn(navigate)}
        >
            Login with Google
        </Button>
    );
};

export default GoogleSignIn;
