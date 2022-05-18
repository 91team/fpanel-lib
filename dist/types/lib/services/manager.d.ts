import { TInitialState as TApolloInitialState } from './apollo';
import { TServices, TStorage } from './types';
export declare class ServicesManager {
    services: TStorage;
    initialize({ initialApolloState, }?: {
        initialApolloState?: TApolloInitialState;
    }): void;
    addService<TServiceName extends keyof TStorage, TService extends TServices>(serviceName: TServiceName, service: TService): void;
    getService<TService extends TServices>(serviceName: keyof TStorage): TService;
    getServices(): TStorage;
}
