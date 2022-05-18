import { DocumentNode, ObjectTypeDefinitionNode, TypeNode } from 'graphql';
import { TActionInfo, TCustomField, TCustomFragments, TFragmentOverride } from '../types';
export declare const schemaDefinition: {
    query: string;
    mutation: string;
};
export declare function typeValueName(type: TypeNode, isList?: boolean): TActionInfo;
export declare function typeValue(type: TypeNode | string): string | null;
export declare function generateTypeFields(typeName: string, baseName: string, fragmentFields: Record<string, ObjectTypeDefinitionNode>, depsMap: Record<string, Set<string>>, meta?: TCustomField): string;
export declare function generateFragments(doc: DocumentNode, overrides: TFragmentOverride, custom: TCustomFragments): {
    fragments: Record<string, string>;
    depsMap: Record<string, Set<string>>;
};
