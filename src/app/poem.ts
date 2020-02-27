export interface Poem {
    title: string;
    body: string;
    author: string;
    publicDomain?: boolean;
    translator?: string;
    source?: string;
    year?: number;
}
