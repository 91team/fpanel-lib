import { TActionInfo, TActionOverride, TConfig, TGlobalVars } from '../types';
export declare function generateEntityConfigs({ GQL_CONFIGS_FOLDER_PATH }: TGlobalVars, entityConfig: TConfig, actionOverrides: Record<string, TActionOverride>, actionsInfo: Record<string, TActionInfo>, aliases: Record<string, string>): void;
