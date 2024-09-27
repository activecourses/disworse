import * as z from "zod";

const createEnv = () => {
    const EnvSchema = z.object({
        API_URL: z.string(),
        APP_URL: z.string().optional().default("http://localhost:3000"),
        DEV: z.preprocess((val) => {
            if (val === "true") return true;
            if (val === "false") return false;
            return false;
        }, z.boolean().default(false).optional()),
    });

    const envVars = Object.entries(import.meta.env).reduce<
        Record<string, string>
    >((acc, curr) => {
        const [key, value] = curr;
        if (key.startsWith("VITE_APP_")) {
            acc[key.replace("VITE_APP_", "")] = value;
        }
        return acc;
    }, {});

    const parsedEnv = EnvSchema.safeParse(envVars);

    if (!parsedEnv.success) {
        throw new Error(
            `
                Invalid env provided.
                The following variables are missing or invalid:
                ${Object.entries(parsedEnv.error.flatten().fieldErrors)
                    .map(([k, v]) => `- ${k}: ${v}`)
                    .join("\n")}
            `,
        );
    }

    return parsedEnv.data;
};

export const env = createEnv();
