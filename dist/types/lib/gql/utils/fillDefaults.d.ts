declare type IfRequired<T extends object, K extends keyof T, Required, Optional> = T extends Record<K, T[K]> ? Required : Optional;
declare type RequiredKeys<T extends object> = Exclude<{
    [K in keyof T]: IfRequired<T, K, K, never>;
}[keyof T], undefined>;
declare type OptionalAndObjectKeys<T extends object> = Exclude<{
    [K in keyof T]: IfRequired<T, K, T[K] extends object ? (T[K] extends (infer U)[] ? (U extends object ? K : never) : K) : never, K>;
}[keyof T], undefined>;
export declare type FillDefaults<T2, T = NonNullable<T2>> = T extends object ? {
    [P in OptionalAndObjectKeys<T>]?: NonNullable<T[P]> extends object ? NonNullable<T[P]> extends (infer U)[] ? NonNullable<U> extends object ? [FillDefaults<NonNullable<U>>] : T extends Record<P, T[P]> ? never : [NonNullable<U>] : FillDefaults<NonNullable<T[P]>> : T extends Record<P, T[P]> ? never : T[P];
} & {
    __new?: {
        [P in RequiredKeys<T>]: T[P];
    };
    __transform?: (value: T) => unknown;
} : T;
export declare type Fill<T extends object, D extends {
    __transform?: (value: T) => any;
} & object, TransformFn = D['__transform']> = TransformFn extends (v: any) => any ? ReturnType<TransformFn> : Omit<T, Exclude<keyof D, '__new' | '__transform'>> & {
    [P in keyof (D | T)]-?: NonNullable<D[P]> extends (infer U)[] ? U extends object ? NonNullable<T[P]> extends (infer U2)[] ? U2 extends object ? Fill<NonNullable<U2>, U>[] : never : never : U[] : NonNullable<D[P]> extends object ? NonNullable<T[P]> extends object ? T extends Record<P, T[P]> ? NonNullable<T[P]> extends object ? Fill<NonNullable<T[P]>, NonNullable<D[P]>> : never : '__new' extends keyof D[P] ? Fill<NonNullable<T[P]>, NonNullable<D[P]>> : Fill<NonNullable<T[P]>, NonNullable<D[P]>> | null : never : NonNullable<D[P]>;
};
export declare function fillDefaults<T extends {}, D extends {
    __transform?: (value: any) => any;
} & object>(object: T, defaults: D): Fill<T, D>;
export {};
