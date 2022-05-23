import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
export declare type IApollo = ApolloClient<NormalizedCacheObject>;
export declare type TInitialState = NormalizedCacheObject;
export declare type TOptions = {
    cacheState?: TInitialState;
    isDev: boolean;
    hostname: string;
};
export declare class ApolloService {
    private client;
    constructor({ cacheState: initialApolloState, isDev, hostname }: TOptions);
    private getClientLink;
    private getClientCache;
    getClient(): IApollo;
    getToken: () => string | undefined;
    convertToJSON(): NormalizedCacheObject;
}
