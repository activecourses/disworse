import { useEffect } from "react";

const GitHubCallback = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            // Send this code to the server to exchange for an access token
            // fetch("http://localhost:5000/auth/github/callback", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({ code }),
            // })
            //   .then((response) => response.json())
            //   .then((data) => {
            //     console.log("GitHub Access Token:", data.access_token);
            //   })
            //   .catch((error) => {
            //     console.error("Error:", error);
            //   });

            console.log("COOL");
        }
    }, []);

    return <div>Loading...</div>;
};

export default GitHubCallback;
