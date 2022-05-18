import { TMutations, TQueries } from '../graphqlTypes';
import { TGraphqlConfig } from 'src/lib/services/graphqlAPI';
declare const mutations: {
    [key in keyof TMutations]: TGraphqlConfig;
};
declare const queries: {
    [key in keyof TQueries]: TGraphqlConfig;
};
export { mutations, queries };
