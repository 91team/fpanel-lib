import { DocumentNode } from 'graphql';
import { TActionInfo, TCustomAction } from '../types';
export declare function generateMutations(doc: DocumentNode, mutationsList: Set<string>, info: Record<string, TActionInfo>, customMutations: TCustomAction[]): string;
