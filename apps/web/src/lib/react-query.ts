import { DefaultOptions, UseMutationOptions } from "@tanstack/react-query";

export const queryConfig = {
    queries: {
        // throwOnError: true,
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 60,
    },
} satisfies DefaultOptions;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
    Awaited<ReturnType<FnType>>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type QueryConfig<T extends (...args: any[]) => any> = Omit<
    ReturnType<T>,
    "queryKey" | "queryFn"
>;

export type MutationConfig<
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
    ApiFnReturnType<MutationFnType>,
    Error,
    Parameters<MutationFnType>[0]
>;
