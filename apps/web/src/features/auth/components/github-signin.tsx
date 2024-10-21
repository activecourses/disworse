import { Button } from "@/components/ui/button";

const GitHubSignIn = () => {
    const clientID = import.meta.env.VITE_APP_GITHUB_CLIENTID;
    const webURL = import.meta.env.VITE_APP_WEB_URL;

    const redirectToGitHub = () => {
        const redirectUri = `${webURL}/auth/github/callback`;
        const scope = "read:user user:email";
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scope}`;
    };

    return (
        <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={redirectToGitHub}
        >
            Login with Github
        </Button>
    );
};

export default GitHubSignIn;
