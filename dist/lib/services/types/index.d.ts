import { ApolloService, TOptions as TApolloOptions } from '../apollo';
import { GraphqlAPIService } from '../graphqlAPI';
import { ServiceName } from './constants';
export declare type TServiceConfigTemplate<TName, TService, TOptions = {}> = {
    name: TStorageKeys;
    service: TService;
    options: Omit<TOptions, 'root'>;
};
export declare type TServiceConfig = TServiceConfigTemplate<'apollo', typeof ApolloService, TApolloOptions> | TServiceConfigTemplate<'graphqlAPI', typeof GraphqlAPIService>;
export declare type TServices = ApolloService | GraphqlAPIService;
export declare type TStorage = {
    [ServiceName.APOLLO]: ApolloService;
    [ServiceName.GRAPHQL_API]: GraphqlAPIService;
};
export declare type TStorageKeys = keyof TStorage;
export declare type TOptions = {
    services: TServiceConfig[];
};
