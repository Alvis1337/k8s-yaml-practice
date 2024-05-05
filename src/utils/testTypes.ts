export interface JsonTest {
    apiVersion: string;
    kind: string;
    metadata: Record<string, unknown>;
    spec?: Record<string, unknown>;
}

export interface TestState {
    name: string;
    yaml: string;
    description: string;
    solved: boolean;
    categories: string[];
}
