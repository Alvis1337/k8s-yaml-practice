export interface JsonTest {
    apiVersion: string;
    kind: string;
    metadata: Record<string, unknown>;
    spec?: Record<string, unknown>;
}