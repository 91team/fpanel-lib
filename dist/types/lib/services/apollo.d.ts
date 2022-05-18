import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ServicesManager } from './manager';
export declare type IApollo = ApolloClient<NormalizedCacheObject>;
export declare type TInitialState = NormalizedCacheObject;
export declare type TOptions = {
    cacheState?: TInitialState;
};
export declare class ApolloService extends ServicesManager {
    private client;
    constructor({ cacheState: initialApolloState }: TOptions);
    private getClientLink;
    private getClientCache;
    getClient(): IApollo;
    getToken: () => string | undefined;
    convertToJSON(): NormalizedCacheObject;
}
