import { TActionInfo, TActionOverride, TActionType, TConfig } from '../types';
declare type TEntityResult = {
    imports: string[];
    fillImports: string[];
    actions: string[];
};
declare type TResult = Record<TActionType, TEntityResult>;
export declare function generateEntityConfigsActionsAndImports(entityConfig: TConfig, actionOverrides: Record<string, TActionOverride>, actionsInfo: Record<string, TActionInfo>, aliases: Record<string, string>): TResult;
export {};
