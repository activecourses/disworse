import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/providers/auth-provider";
import { Label } from "@radix-ui/react-label";
import { FieldApi, useForm } from "@tanstack/react-form";
import {
    Link,
    createFileRoute,
    redirect,
    useNavigate,
    useRouter,
} from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

export const Route = createFileRoute("/auth/register")({
    component: RegisterComponent,
    validateSearch: z.object({
        redirect: z.string().optional().catch(""),
    }),
    beforeLoad: ({ context, search }) => {
        if (context.auth.isAuthenticated) {
            throw redirect({ to: search.redirect || fallback });
        }
    },
});

const fallback = "/app" as const;

const RegisterSchema = z.object({
    firstname: z.string().min(2),
    lastname: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em
                    className="text-red-500 text-sm"
                    role="alert"
                    aria-live="assertive"
                >
                    {field.state.meta.errors.join(",")}
                </em>
            ) : null}
            {field.state.meta.isValidating ? "Validating..." : null}
        </>
    );
}

function RegisterComponent() {
    const navigate = useNavigate();
    const auth = useAuth();
    const router = useRouter();
    const search = Route.useSearch();

    const form = useForm({
        defaultValues: {
            firstname: "Ali",
            lastname: "Kehel",
            email: "alikehel@disworse.com",
            password: "alikehel@disworse.com",
        },
        validatorAdapter: zodValidator(),
        validators: {
            onChange: RegisterSchema,
        },
        onSubmit: async ({ value }) => {
            await auth.login(value.email);
            await router.invalidate();
            await navigate({ to: search.redirect || fallback });
        },
    });

    return (
        <div className="flex h-full items-center justify-center">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <Card className="mx-auto w-[20rem] max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Register</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <form.Field
                                    name="firstname"
                                    children={(field) => {
                                        return (
                                            <>
                                                <Label htmlFor="firstname">
                                                    First Name
                                                </Label>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) =>
                                                        field.handleChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <FieldInfo field={field} />
                                            </>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid gap-2">
                                <form.Field
                                    name="lastname"
                                    children={(field) => {
                                        return (
                                            <>
                                                <Label htmlFor="lastname">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) =>
                                                        field.handleChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <FieldInfo field={field} />
                                            </>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid gap-2">
                                <form.Field
                                    name="email"
                                    children={(field) => {
                                        return (
                                            <>
                                                <Label htmlFor="email">
                                                    Email
                                                </Label>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) =>
                                                        field.handleChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                                <FieldInfo field={field} />
                                            </>
                                        );
                                    }}
                                />
                            </div>
                            <div className="grid gap-2">
                                <form.Field
                                    name="password"
                                    children={(field) => {
                                        return (
                                            <>
                                                <div className="flex items-center">
                                                    <Label htmlFor="password">
                                                        Password
                                                    </Label>
                                                </div>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) =>
                                                        field.handleChange(
                                                            e.target.value,
                                                        )
                                                    }
                                                    type="password"
                                                />
                                                <FieldInfo field={field} />
                                            </>
                                        );
                                    }}
                                />
                            </div>
                            <form.Subscribe
                                selector={(state) => [
                                    state.canSubmit,
                                    state.isSubmitting,
                                ]}
                                children={([canSubmit, isSubmitting]) => (
                                    <Button type="submit" disabled={!canSubmit}>
                                        {isSubmitting ? "..." : "Register"}
                                    </Button>
                                )}
                            />
                            <div className="grid gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                >
                                    Register with Google
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                >
                                    Register with Github
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link to="/auth/login" className="underline">
                                Login
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}
