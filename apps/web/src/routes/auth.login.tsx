import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { FieldApi, useForm } from "@tanstack/react-form";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

export const Route = createFileRoute("/auth/login")({
    component: LoginComponent,
});

const LoginSchema = z.object({
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

function LoginComponent() {
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
            email: "alikehel@disworse.com",
            password: "alikehel@disworse.com",
        },
        validatorAdapter: zodValidator(),
        validators: {
            onChange: LoginSchema,
        },
        onSubmit: async ({ value }) => {
            console.log(value);
            navigate({
                to: "/app",
            });
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
                <Card className="mx-auto w-[24rem] max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
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
                                        {isSubmitting ? "..." : "Login"}
                                    </Button>
                                )}
                            />
                            <div className="grid gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                >
                                    Login with Google
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                >
                                    Login with Github
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link to="/auth/register" className="underline">
                                Register
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}
