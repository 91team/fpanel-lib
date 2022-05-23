import { TMutations, TQueries } from './lib/gql/generated/graphqlTypes';
export declare type TFPanelQueries = TQueries;
export declare type TFPanelMutations = TMutations;
declare class FPanelClient {
    private services;
    constructor({ isDev, hostname }: {
        isDev?: boolean;
        hostname: string;
    });
    get mutations(): TMutations;
    get queries(): TQueries;
    private getService;
}
export default FPanelClient;
