import { TActionInfo, TActionOverride, TActionType, TConfig } from '../types';
declare type TEntityResult = {
    imports: string[];
    customTypesImports: string[];
    actions: string[];
};
declare type TResult = Record<TActionType, TEntityResult>;
export declare function generateEntityTypesActionsAndImports(entityConfig: TConfig, actionOverrides: Record<string, TActionOverride>, actionsInfo: Record<string, TActionInfo>, aliases: Record<string, string>): TResult;
export {};
