import { DocumentNode } from 'graphql';
import { TActionInfo, TCustomAction } from '../types';
export declare function generateQueries(doc: DocumentNode, queriesList: Set<string>, info: Record<string, TActionInfo>, customQueries: TCustomAction[]): string;
