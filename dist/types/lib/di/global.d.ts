export declare type ObjectRef<T> = {
    __brand: T;
};
export declare function createGlobalObjectRef<T>(): ObjectRef<T>;
export declare function setGlobal<T>(key: ObjectRef<T>, data: T): void;
export declare function getGlobal<T>(key: ObjectRef<T>): T;
