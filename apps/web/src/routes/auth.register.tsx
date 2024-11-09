import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import DateDropdowns from "@/features/auth/components/date";
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
import { useEffect } from "react";
import { z } from "zod";

export const Route = createFileRoute("/auth/register")({
    component: RegisterComponent,
    validateSearch: z.object({
        redirect: z.string().optional().catch(""),
        email: z.string().email().optional(),
    }),
    beforeLoad: ({ context, search }) => {
        if (context.auth.isAuthenticated) {
            throw redirect({ to: search.redirect || fallback });
        }
    },
});

const fallback = "/app" as const;

const RegisterSchema = z.object({
    displayname: z.string().min(2),
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    optional: z.boolean().optional(),
    selectedDay: z.number().min(1).max(31),
    selectedMonth: z.number().min(0).max(11),
    selectedYear: z.number().min(1900).max(new Date().getFullYear()),
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
        validatorAdapter: zodValidator(),
        validators: {
            onChange: RegisterSchema,
        },
        onSubmit: async ({ value }) => {
            const formData = {
                ...value,
            };

            await auth.login(search.email ? search.email : formData.email);
            await router.invalidate();
            await navigate({ to: search.redirect || fallback });
        },
    });

    useEffect(() => {
        if (search.email) {
            form.setFieldValue("email", search.email); // Update email field using setFieldValue
        }
    }, [search.email, form]); // Run when search.email changes

    return (
        <div className="flex h-full items-center justify-center">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <Card className="mx-auto w-[20rem] max-w-lg lg:w-[32rem]">
                    <CardHeader>
                        <CardTitle className="text-2xl">Register</CardTitle>
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
                                                    EMAIL
                                                </Label>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={
                                                        search.email
                                                            ? String(
                                                                  search.email,
                                                              )
                                                            : field.state.value
                                                              ? String(
                                                                    field.state
                                                                        .value,
                                                                )
                                                              : ""
                                                    }
                                                    onBlur={field.handleBlur}
                                                    disabled={!!search.email}
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
                                    name="displayname"
                                    children={(field) => {
                                        return (
                                            <>
                                                <Label htmlFor="displayname">
                                                    DISPLAY NAME
                                                </Label>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={
                                                        field.state.value
                                                            ? String(
                                                                  field.state
                                                                      .value,
                                                              )
                                                            : ""
                                                    }
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
                                    name="username"
                                    children={(field) => {
                                        return (
                                            <>
                                                <Label htmlFor="username">
                                                    USERNAME
                                                </Label>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={
                                                        field.state.value
                                                            ? String(
                                                                  field.state
                                                                      .value,
                                                              )
                                                            : ""
                                                    }
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
                                                        PASSWORD
                                                    </Label>
                                                </div>
                                                <Input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={
                                                        field.state.value
                                                            ? String(
                                                                  field.state
                                                                      .value,
                                                              )
                                                            : ""
                                                    }
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

                            <DateDropdowns form={form} />

                            <div className="my-[8px] flex gap-2">
                                <form.Field
                                    name="optional"
                                    children={(field) => {
                                        return (
                                            <>
                                                <Checkbox
                                                    id="optional"
                                                    onCheckedChange={(
                                                        checked,
                                                    ) => {
                                                        field.setValue(checked);
                                                    }}
                                                />
                                                <Label
                                                    htmlFor="optional"
                                                    className="text-[10px]"
                                                >
                                                    (Optional) It's okay to send
                                                    me emails with Discord
                                                    updates, tips, and special
                                                    offers. You can opt out at
                                                    any time.
                                                </Label>
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
                        </div>
                        <div className="mt-4 mb-5 text-center text-sm">
                            Already have an account?
                            <Link to="/auth/login" className="underline">
                                Login
                            </Link>
                        </div>
                        <Label className="text-[10px] leading-[2px]">
                            By registering, you agree to Discord's Terms of
                            Service and Privacy Policy.
                        </Label>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
}
