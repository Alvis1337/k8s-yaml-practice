export const pvYamlTest1 = {
    apiVersion: 'v1',
    kind: 'PersistentVolume',
    metadata: {
        name: 'pv-test-yaml',
    },
    spec: {
        capacity: {
            storage: '8Gi',
        },
        accessModes: ['ReadWriteOnce'],
        persistentVolumeReclaimPolicy: 'Delete',
        storageClassName: 'pv-storage-class',
    },
};

export const pvYamlTest2 = {
    apiVersion: 'v1',
    kind: 'PersistentVolume',
    metadata: {
        namespace: 'pvdemo',
        name: 'localpv',
    },
    spec: {
        storageClassName: 'localdisk',
        persistentVolumeReclaimPolicy: 'Recycle',
        capacity: {
            storage: '1Gi',
        },
        accessModes: ['ReadWriteOnce'],
        hostPath: {
            path: '/volumes/data',
        },
    },
};

export const deploymentYamlTest1 = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
        name: 'app-v2',
        labels: {
            app: 'app-v2',
        },
    },
    spec: {
        replicas: 3,
        selector: {
            matchLabels: {
                app: 'app-v2',
            },
        },
        template: {
            metadata: {
                labels: {
                    app: 'app-v2',
                },
            },
            spec: {
                containers: [
                    {
                        name: 'nginx',
                        image: 'nginx:1.14.2',
                        ports: [
                            {
                                containerPort: 80,
                            },
                        ],
                    },
                ],
            },
        },
    },
};

export const deploymentYamlTest2 = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
        name: 'database',
        labels: {
            app: 'database',
        },
    },
    spec: {
        replicas: 3,
        selector: {
            matchLabels: {
                app: 'database',
            },
        },
        template: {
            metadata: {
                labels: {
                    app: 'database',
                },
            },
            spec: {
                containers: [
                    {
                        name: 'nginx',
                        image: 'nginx:1.14.2',
                        ports: [
                            {
                                containerPort: 80,
                            },
                        ],
                    },
                ],
                tolerations: [
                    {
                        key: 'dedicated',
                        operator: 'Equal',
                        value: 'database',
                        effect: 'NoSchedule',
                    },
                ],
            },
        },
    },
};

export const deploymentYamlTest3 = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
        name: 'my-app-deployment',
    },
    spec: {
        replicas: 3,
        selector: {
            matchLabels: {
                app: 'my-app',
            },
        },
        template: {
            metadata: {
                labels: {
                    app: 'my-app',
                },
            },
            spec: {
                containers: [
                    {
                        name: 'my-app-container',
                        image: 'nginx:latest',
                        ports: [
                            {
                                containerPort: 80,
                            },
                        ],
                    },
                ],
            },
        },
    },
};

export const deploymentYamlTest4 = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
        name: 'nginx-deployment',
        namespace: 'development',
    },
    spec: {
        replicas: 3,
        selector: {
            matchLabels: {
                app: 'nginx',
            },
        },
        template: {
            metadata: {
                labels: {
                    app: 'nginx',
                },
            },
            spec: {
                containers: [
                    {
                        name: 'nginx',
                        image: 'nginx:latest',
                    },
                ],
            },
        },
    },
};

export const secretYamlTest1 = {
    apiVersion: 'v1',
    kind: 'Secret',
    metadata: {
        name: 'db-secret',
        namespace: 'default',
    },
    data: {
        username: 'dGVzdHVzZXI=',
        password: 'dGVzdHBhc3M=',
    },
    type: 'Opaque',
};

export const podYamlTest1 = {
    apiVersion: 'v1',
    kind: 'Pod',
    metadata: {
        name: 'nginx-pod',
    },
    spec: {
        containers: [
            {
                name: 'nginx-container',
                image: 'nginx:1.21.0',
                volumeMounts: [
                    {
                        name: 'nginx-config-volume',
                        mountPath: '/etc/nginx/nginx.conf',
                        subPath: 'nginx.conf',
                    },
                ],
            },
        ],
        volumes: [
            {
                name: 'nginx-config-volume',
                configMap: {
                    name: 'nginx-config',
                },
            },
        ],
    },
};

export const podYamlTest2 = {
    apiVersion: 'v1',
    kind: 'Pod',
    metadata: {
        name: 'nginx-pod',
    },
    spec: {
        containers: [
            {
                name: 'nginx-container',
                image: 'nginx:latest',
                ports: [
                    {
                        containerPort: 80,
                    },
                ],
            },
        ],
        restartPolicy: 'Always',
    },
};

export const podYamlTest3 = {
    apiVersion: 'v1',
    kind: 'Pod',
    metadata: {
        name: 'my-pod',
    },
    spec: {
        containers: [
            {
                name: 'my-container',
                image: 'nginx',
            },
        ],
        affinity: {
            nodeAffinity: {
                requiredDuringSchedulingIgnoredDuringExecution: {
                    nodeSelectorTerms: [
                        {
                            matchExpressions: [
                                {
                                    key: 'topology.kubernetes.io/zone',
                                    operator: 'In',
                                    values: ['app'],
                                },
                            ],
                        },
                    ],
                },
            },
        },
    },
};

export const statefulsetYamlTest1 = {
    apiVersion: 'apps/v1',
    kind: 'StatefulSet',
    metadata: {
        name: 'mysql',
    },
    spec: {
        serviceName: 'mysql',
        replicas: 3,
        selector: {
            matchLabels: {
                app: 'mysql',
            },
        },
        template: {
            metadata: {
                labels: {
                    app: 'mysql',
                },
            },
            spec: {
                containers: [
                    {
                        name: 'mysql',
                        image: 'mysql:latest',
                        env: [
                            {
                                name: 'MYSQL_ROOT_PASSWORD',
                                value: 'your-root-password',
                            },
                        ],
                        ports: [
                            {
                                containerPort: 3306,
                            },
                        ],
                        volumeMounts: [
                            {
                                name: 'mysql-persistent-storage',
                                mountPath: '/var/lib/mysql',
                            },
                        ],
                    },
                ],
            },
        },
        volumeClaimTemplates: [
            {
                kind: 'PersistentVolumeClaim',
                apiVersion: 'v1',
                metadata: {
                    name: 'mysql-persistent-storage',
                },
                spec: {
                    accessModes: ['ReadWriteOnce'],
                    resources: {
                        requests: {
                            storage: '25Gi',
                        },
                    },
                    storageClassName: 'ceph-rbd-sc',
                },
            },
        ],
    },
};

export const customresourceYamlTest1 = {
    apiVersion: 'apiextensions.k8s.io/v1',
    kind: 'CustomResourceDefinition',
    metadata: {
        name: 'apps.example.com',
    },
    spec: {
        group: 'example.com',
        names: {
            kind: 'App',
            listKind: 'AppList',
            plural: 'apps',
            singular: 'app',
            shortNames: ['ap'],
        },
        scope: 'Namespaced',
        versions: [
            {
                name: 'v1',
                served: true,
                storage: true,
                schema: {
                    openAPIV3Schema: {
                        type: 'object',
                        properties: {
                            spec: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string',
                                    },
                                    replicas: {
                                        type: 'integer',
                                    },
                                    image: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        ],
    },
};

export const ingressYamlTest1 = {
    apiVersion: 'networking.k8s.io/v1',
    kind: 'Ingress',
    metadata: {
        name: 'my-ingress',
        annotations: {
            'nginx.ingress.kubernetes.io/rewrite-target': '/',
        },
    },
    spec: {
        rules: [
            {
                http: {
                    paths: [
                        {
                            path: '/app1',
                            pathType: 'Prefix',
                            backend: {
                                service: {
                                    name: 'service-a',
                                    port: {
                                        number: 80,
                                    },
                                },
                            },
                        },
                        {
                            path: '/app2',
                            pathType: 'Prefix',
                            backend: {
                                service: {
                                    name: 'service-b',
                                    port: {
                                        number: 80,
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        ],
    },
};

export const serviceYamlTest1 = {
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
        name: 'my-service',
    },
    spec: {
        selector: {
            app: 'my-app',
        },
        ports: [
            {
                protocol: 'TCP',
                port: 80,
                targetPort: 80,
            },
        ],
        type: 'LoadBalancer',
    },
};

export const resourcequotaYamlTest1 = {
    apiVersion: 'v1',
    kind: 'ResourceQuota',
    metadata: {
        name: 'dev-quota',
        namespace: 'development',
    },
    spec: {
        hard: {
            cpu: '2',
            memory: '2Gi',
        },
    },
};

export const pvcYamlTest1 = {
    apiVersion: 'v1',
    kind: 'PersistentVolumeClaim',
    metadata: {
        name: 'pvc-volume-1',
    },
    spec: {
        storageClassName: 'hostpath-storage-class',
        accessModes: ['ReadWriteOnce'],
        resources: {
            requests: {
                storage: '50Mi',
            },
        },
    },
};

export const podPvcYamlTest1 = {
    apiVersion: 'v1',
    kind: 'Pod',
    metadata: {
        name: 'pvc-pod',
    },
    spec: {
        volumes: [
            {
                name: 'vol',
                persistentVolumeClaim: {
                    claimName: 'pvc-volume-1',
                },
            },
        ],
        containers: [
            {
                name: 'pvc-pod',
                image: 'nginx',
                volumeMounts: [
                    {
                        mountPath: '/usr/share/nginx/html',
                        name: 'vol',
                    },
                ],
            },
        ],
    },
};

export const pvcYamlTest2 = {
    apiVersion: 'v1',
    kind: 'PersistentVolumeClaim',
    metadata: {
        name: 'localpvc',
        namespace: 'pvdemo',
    },
    spec: {
        storageClassName: 'localdisk',
        accessModes: ['ReadWriteOnce'],
        resources: {
            requests: {
                storage: '100Mi',
            },
        },
    },
};

export const resourcequotaYamlTest2 = {
    apiVersion: 'v1',
    kind: 'ResourceQuota',
    metadata: {
        name: 'production-quota',
        namespace: 'production',
    },
    spec: {
        hard: {
            cpu: '2',
            memory: '2Gi',
        },
    },
};

export const podYamlTest4 = {
    apiVersion: 'v1',
    kind: 'Pod',
    metadata: {
        name: 'legacy-api-pod',
    },
    spec: {
        containers: [
            {
                name: 'legacy-api',
                image: 'legacy-api-image:latest',
                env: [
                    {
                        name: 'DB_HOST',
                        value: 'database.example.com',
                    },
                    {
                        name: 'DB_PORT',
                        value: '3306',
                    },
                    {
                        name: 'DB_USERNAME',
                        value: 'username',
                    },
                    {
                        name: 'DB_PASSWORD',
                        value: 'password',
                    },
                ],
            },
        ],
    },
};

export const serviceYamlTest2 = {
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
        name: 'legacy-api-service',
    },
    spec: {
        selector: {
            app: 'legacy-api',
        },
        ports: [
            {
                protocol: 'TCP',
                port: 8080,
                targetPort: 8080,
            },
        ],
    },
};

export const configmapYamlTest1 = {
    apiVersion: 'v1',
    kind: 'ConfigMap',
    metadata: {
        name: 'frontend-config-staging',
    },
    data: {
        apiEndpoint: 'https://api.staging.example.com',
        featureFlags: 'enabled',
        environment: 'staging',
    },
};

export const deploymentYamlTest5 = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
        name: 'frontend-app-deployment-staging',
    },
    spec: {
        replicas: 1,
        selector: {
            matchLabels: {
                app: 'frontend-app',
            },
        },
        template: {
            metadata: {
                labels: {
                    app: 'frontend-app',
                },
            },
            spec: {
                containers: [
                    {
                        name: 'frontend-app',
                        image: 'frontend-app-image:latest',
                        envFrom: [
                            {
                                configMapRef: {
                                    name: 'frontend-config-staging',
                                },
                            },
                        ],
                        volumeMounts: [
                            {
                                name: 'db-secret-volume',
                                mountPath: '/etc/frontend-app/db',
                            },
                        ],
                    },
                ],
                volumes: [
                    {
                        name: 'db-secret-volume',
                        secret: {
                            secretName: 'frontend-db-secret',
                        },
                    },
                ],
            },
        },
    },
};

export const secretYamlTest2 = {
    apiVersion: 'v1',
    kind: 'Secret',
    metadata: {
        name: 'frontend-db-secret',
    },
    type: 'Opaque',
    data: {
        username: 'dGVzdA==',
        password: 'dGVzdDEyMw==',
    },
};

export const deploymentYamlTest6 = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
    metadata: {
        name: 'frontend-app-deployment-staging',
    },
    spec: {
        replicas: 1,
        selector: {
            matchLabels: {
                app: 'frontend-app',
            },
        },
        template: {
            metadata: {
                labels: {
                    app: 'frontend-app',
                },
            },
            spec: {
                containers: [
                    {
                        name: 'frontend-app',
                        image: 'frontend-app-image:latest',
                        envFrom: [
                            {
                                configMapRef: {
                                    name: 'frontend-config-staging',
                                },
                            },
                        ],
                        volumeMounts: [
                            {
                                name: 'db-secret-volume',
                                mountPath: '/etc/frontend-app/db',
                            },
                        ],
                    },
                ],
                volumes: [
                    {
                        name: 'db-secret-volume',
                        secret: {
                            secretName: 'frontend-db-secret',
                        },
                    },
                ],
            },
        },
    },
};
