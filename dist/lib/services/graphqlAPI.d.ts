import { DocumentNode } from 'graphql';
import { CancellablePromise } from 'mobx/lib/api/flow';
import { STATE } from 'src/lib/constants/api';
import { TMutations, TQueries } from 'src/lib/gql/generated/graphqlTypes';
import { ServicesManager } from '.';
export declare type TNotification = {
    id: string;
    type: 'ERROR' | 'SUCCESS';
    message?: string;
};
declare type TGraphqlActionType = 'query' | 'mutation';
declare type TSetState = (state: STATE) => void;
declare type TCallGraphqlActionParams<TData, TParams extends {}> = {
    GQLVariables?: TParams;
    onSuccess?: (data: TData) => void;
    onError?: (erorr: any) => void;
    setState?: TSetState;
};
declare type Required2<NullableT, T = NonNullable<NullableT>> = {
    [P in keyof T]-?: NonNullable<T[P]>;
};
export declare type TGraphqlAction<TData, TParams extends {}, TDataStrict = Required2<TData>> = (params?: TCallGraphqlActionParams<TDataStrict, TParams>) => CancellablePromise<TDataStrict>;
declare type TCreateGraphqlActionParams = {
    GQLDocument: DocumentNode;
    type: TGraphqlActionType;
    notifications?: {
        [key in TNotification['type']]?: Omit<TNotification, 'id' | 'type'>;
    };
};
export declare type TGraphqlConfig = Pick<TCreateGraphqlActionParams, 'GQLDocument' | 'notifications'>;
export declare class GraphqlAPIService extends ServicesManager {
    mutations: TMutations;
    queries: TQueries;
    constructor();
    private get apolloClient();
    private createGraphqlAction;
    private createGraphqlActions;
    private addConfigs;
}
export {};
