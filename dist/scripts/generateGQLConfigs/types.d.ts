export declare const enum ACTION_TYPE {
    mutations = "mutations",
    queries = "queries"
}
export declare type TArgV = {
    config?: string;
};
export declare type TActionType = ACTION_TYPE;
export declare type TFragmentOverride = Record<string, TCustomField>;
export declare type TCustomField = {
    extends?: string[];
    fields?: string[];
    ignoreFields?: string[];
    override?: TFragmentOverride;
};
export declare type TCustomFragment = {
    base: string;
} & TCustomField;
export declare type TCustomFragments = Record<string, TCustomFragment>;
export declare type TActionInfo = {
    resName: string;
    isList: boolean;
};
export declare type TActionOverride = {
    name: string;
    type: string;
};
export declare type TCustomAction = {
    name: string;
    resName: string;
    baseAction: string;
    errorMessage: string;
};
export declare type TAliases = Record<string, string[]>;
export declare type TConfig = {
    [ACTION_TYPE.mutations]: Record<string, string | null>;
    [ACTION_TYPE.queries]: Record<string, string | null>;
    usedFragments: string[];
    fragments: TFragmentOverride;
    customFragments: TCustomFragments;
    customQueries: TCustomAction[];
    customMutations: TCustomAction[];
};
export declare type TGlobalVars = {
    MODULE_PATH: string;
    CONFIG_PATH: string;
    GENERATED_FOLDER_PATH: string;
    GQL_TYPES_FOLDER_NAME: string;
    GQL_TYPES_FOLDER_PATH: string;
    GQL_CONFIGS_FOLDER_NAME: string;
    GQL_CONFIGS_FOLDER_PATH: string;
    DEFAULTS_FILE_PATH: string;
    DEFAULTS_OUT_FILE_PATH: string;
    CUSTOM_TYPES_FILE_PATH: string;
};
