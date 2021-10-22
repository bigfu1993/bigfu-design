declare const _default: import("vue").DefineComponent<{
    align: {
        type: StringConstructor;
        default: () => string;
    };
    justify: {
        type: StringConstructor;
        default: () => string;
    };
    gutter: {
        type: NumberConstructor;
        default: () => number[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    align?: unknown;
    justify?: unknown;
    gutter?: unknown;
} & {
    align: string;
    justify: string;
    gutter: number;
} & {}>, {
    align: string;
    justify: string;
    gutter: number;
}>;
export default _default;
