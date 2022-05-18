import { TMutations, TQueries } from 'src/lib/gql/generated/graphqlTypes';
export declare type TFPanelQueries = TQueries;
export declare type TFPanelMutations = TMutations;
declare class FPanelClient {
    private services;
    constructor();
    get mutations(): TMutations;
    get queries(): TQueries;
    private getService;
}
export default FPanelClient;
