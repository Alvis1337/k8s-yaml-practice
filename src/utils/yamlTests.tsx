export const yamlTests = [
    {
        name: 'pv-yaml-test-1',
        yaml: 'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-test-yaml\nspec:\n  capacity:\n    storage: 8Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: pv-storage-class',
        description: 'Create a PV with 8Gi of storage, ReadWriteOnce access mode, a Delete reclaim policy, with a name of pv-test-yaml that uses the pv-storage-class storage class.',
        solved: false
    },
    {
        name: 'pv-yaml-test-2',
        yaml: 'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-test-yaml\nspec:\n  capacity:\n    storage: 8Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: pv-storage-class',
        description: 'Create a PV with 8Gi of storage, ReadWriteOnce access mode, a Delete reclaim policy, with a name of pv-test-yaml that uses the pv-storage-class storage class.',
        solved: false
    },
    {
        name: 'pv-yaml-test-3',
        yaml: `apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  namespace: pvdemo\n  name: localpv\nspec:\n  storageClassName: localdisk\n  persistentVolumeReclaimPolicy: Recycle\n  capacity:\n    storage: 1Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: /volumes/data`,
        description: 'Create a PersistentVolume named \'localpv\' in the \'pvdemo\' namespace in Kubernetes with the storage class \'localdisk\'. The PersistentVolume\'s reclaim policy is set to \'Recycle\'. The storage capacity is \'1Gi\' and the access mode is \'ReadWriteOnce\'. The volume is hosted on the local filesystem at the path \'/volumes/data\'.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-1',
        yaml: 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-v2\n  labels:\n    app: app-v2\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: app-v2\n  template:\n    metadata:\n      labels:\n        app: app-v2\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80',
        description: 'Create a deployment named app-v2 with an app label of app-v2. The deployment should have 3 replicas and use the nginx:1.14.2 image. The container should listen on port 80. Each pod should have a label of app: app-v2.',
        solved: false
    },
    {
        name: 'deplyoment-yaml-test-2',
        yaml: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: database\n  labels:\n    app: database\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: database\n  template:\n    metadata:\n      labels:\n        app: database\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n      tolerations:\n        - key: "dedicated"\n          operator: "Equal"\n          value: "database"\n          effect: "NoSchedule"`,
        description: 'Create a deployment named database with an app label with database, with 3 replicas, a matchlabel app named database, give each pod a app label with database, and run the nginx:1.14.2 image with a container port of 80. Also, add a toleration for the key dedicated with the value database and the effect NoSchedule.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-3',
        yaml: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app-container\n        image: nginx:latest\n        ports:\n        - containerPort: 80`,
        description: 'Create a Deployment named \'my-app-deployment\' in Kubernetes with 3 replicas. The Deployment should match labels with \'app: my-app\'. The Pod template should have a metadata label \'app: my-app\' and a spec that includes a single container named \'my-app-container\' using the \'nginx:latest\' image, exposing port 80.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-4',
        yaml: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: development\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest`,
        description: 'Create a Deployment named \'nginx-deployment\' in the \'development\' namespace in Kubernetes with 3 replicas. The Deployment should match labels with \'app: nginx\'. The Pod template should have a metadata label \'app: nginx\' and a spec that includes a single container named \'nginx\' using the \'nginx:latest\' image.',
        solved: false
    },
    {
        name: 'secret-yaml-test-1',
        yaml: `apiVersion: v1\nkind: Secret\nmetadata:\n  name: db-secret\n  namespace: default\ndb-credentials:\n  username: testuser\n  password: testpass\ntype: Opaque`,
        description: 'Create a secret with a name of db-secret in the default namespace. The secret contains two key-value pairs: username and password. Of type Opaque.',
        solved: false
    },
    {
        name: 'pod-yaml-test-1',
        yaml: `apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx-container\n    image: nginx:1.21.0\n    volumeMounts:\n    - name: nginx-config-volume\n      mountPath: /etc/nginx/nginx.conf\n      subPath: nginx.conf\n  volumes:\n  - name: nginx-config-volume\n    configMap:\n      name: nginx-config`,
        description: 'Create a pod with a name of nginx-pod that uses the nginx:1.21.0 image. The pod mounts the nginx-config volume at /etc/nginx/nginx.conf. The volume is populated with the nginx-config ConfigMap.',
        solved: false
    },
    {
        name: 'pod-yaml-test-2',
        yaml: `apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n  - name: nginx-container\n    image: nginx:latest\n    ports:\n    - containerPort: 80\n  restartPolicy: Always`,
        description: 'Create a Pod named \'nginx-pod\' in Kubernetes with a single container named \'nginx-container\' using the \'nginx:latest\' image. The container should expose port 80 and the Pod should always restart its containers if they exit.',
        solved: false
    },
    {
        name: 'pod-yaml-test-3',
        yaml: `apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  containers:\n    - name: my-container\n      image: nginx\n  affinity:\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n          - matchExpressions:\n              - key: topology.kubernetes.io/zone\n                operator: In\n                values:\n                  - app`,
        description: 'Create a Pod named \'my-pod\' in Kubernetes with a single container named \'my-container\' using the \'nginx\' image. The Pod should have a node affinity rule that requires (during scheduling) the node to be in the \'app\' zone according to the \'topology.kubernetes.io/zone\' label.',
        solved: false
    },
    {
        name: 'statefulset-yaml-test-1',
        yaml: `apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: mysql\nspec:\n  serviceName: mysql\n  replicas: 3\n  selector:\n    matchLabels:\n      app: mysql\n  template:\n    metadata:\n      labels:\n        app: mysql\n    spec:\n      containers:\n        - name: mysql\n          image: mysql:latest\n          env:\n            - name: MYSQL_ROOT_PASSWORD\n              value: "your-root-password"\n          ports:\n            - containerPort: 3306\n          volumeMounts:\n            - name: mysql-persistent-storage\n              mountPath: /var/lib/mysql\n  volumeClaimTemplates:\n    - kind: PersistentVolumeClaim\n      apiVersion: v1\n      metadata:\n        name: mysql-persistent-storage\n      spec:\n        accessModes:\n          - ReadWriteOnce\n        resources:\n          requests:\n            storage: 25Gi\n        storageClassName: ceph-rbd-sc`,
        description: 'Create a StatefulSet named \'mysql\' with 3 replicas in Kubernetes, using \'mysql:latest\' image, setting \'MYSQL_ROOT_PASSWORD\' to \'your-root-password\', exposing port 3306, and mounting a volume named \'mysql-persistent-storage\' at \'/var/lib/mysql\'. The StatefulSet should have a PersistentVolumeClaim named \'mysql-persistent-storage\' requesting 25Gi storage with \'ReadWriteOnce\' access mode and \'ceph-rbd-sc\' storage class. Verify the creation and status of the StatefulSet, ensure the replicas are running with correct environment variables and volume mounts, and confirm the PersistentVolumeClaim is bound to the desired storage class.',
        solved: false
    },
    {
        name: 'customresource-yaml-test-1',
        yaml: `apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: apps.example.com\nspec:\n  group: example.com\n  names:\n    kind: App\n    listKind: AppList\n    plural: apps\n    singular: app\n    shortNames:\n    - ap\n  scope: Namespaced\n  versions:\n  - name: v1\n    served: true\n    storage: true\n    schema:\n      openAPIV3Schema:\n        type: object\n        properties:\n          spec:\n            type: object\n            properties:\n              name:\n                type: string\n              replicas:\n                type: integer\n              image:\n                type: string`,
        description: 'Create a CustomResourceDefinition named \'apps.example.com\' in Kubernetes under the group \'example.com\'. The kind should be \'App\' with a listKind of \'AppList\', plural \'apps\', singular \'app\', and shortNames \'ap\'. The scope should be \'Namespaced\'. It should have a version \'v1\' that is served and stored. The schema should follow the openAPIV3Schema with properties \'name\' of type string, \'replicas\' of type integer, and \'image\' of type string.',
        solved: false
    },
    {
        name: 'ingress-yaml-test-1',
        yaml: `apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: my-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /\nspec:\n  rules:\n  - http:\n      paths:\n      - path: /app1\n        pathType: Prefix\n        backend:\n          service:\n            name: service-a\n            port:\n              number: 80\n      - path: /app2\n        pathType: Prefix\n        backend:\n          service:\n            name: service-b\n            port:\n              number: 80`,
        description: 'Create an Ingress named \'my-ingress\' in Kubernetes with the annotation \'nginx.ingress.kubernetes.io/rewrite-target\' set to \'/\'. It should have two rules: the first one should route the path \'/app1\' to the service \'service-a\' on port 80, and the second one should route the path \'/app2\' to the service \'service-b\' on port 80.',
        solved: false
    },
    {
        name: 'service-yaml-test-1',
        yaml: `apiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: my-app\n  ports:\n  - protocol: TCP\n    port: 80\n    targetPort: 80\n  type: LoadBalancer`,
        description: 'Create a Service named \'my-service\' in Kubernetes with a selector \'app: my-app\'. The service should expose TCP port 80 and target port 80. The type of the service should be \'LoadBalancer\'.',
        solved: false
    },
    {
        name: 'resourcequota-yaml-test-1',
        yaml: `apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: dev-quota\n  namespace: development\nspec:\n  hard:\n    cpu: "2"\n    memory: 2Gi`,
        description: 'Create a ResourceQuota named \'dev-quota\' in the \'development\' namespace in Kubernetes. The quota should limit the CPU usage to \'2\' cores and memory usage to \'2Gi\'.',
        solved: false
    },
    {
        name: 'pvc-yaml-test-1',
        yaml: 'apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-volume-1\nspec:\n  storageClassName: hostpath-storage-class\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 50Mi',
        description: 'Create a PersistentVolumeClaim named \'pvc-volume-1\' in Kubernetes with the storage class \'hostpath-storage-class\'. The access mode should be \'ReadWriteOnce\' and the storage request should be \'50Mi\'.',
        solved: false
    },
    {
        name: 'pod-pvc-yaml-test-1',
        yaml: `apiVersion: v1\nkind: Pod\nmetadata:\n  name: pvc-pod\nspec:\n  volumes:\n   - name: vol\n     persistentVolumeClaim:\n       claimName: pvc-volume-1\n  containers:\n  - name: pvc-pod\n    image: nginx\n    volumeMounts:\n    - mountPath: /usr/share/nginx/html\n      name: vol`,
        description: 'Create a Pod named \'pvc-pod\' in Kubernetes with a single container named \'pvc-pod\' using the \'nginx\' image. The Pod should mount a PersistentVolumeClaim named \'pvc-volume-1\' to the path \'/usr/share/nginx/html\' in the container.',
        solved: false
    },
    {
        name: 'pvc-yaml-test-2',
        yaml: `apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: localpvc\n  namespace: pvdemo\nspec:\n  storageClassName: localdisk\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 100Mi`,
        description: 'Create a PersistentVolumeClaim named \'localpvc\' in the \'pvdemo\' namespace in Kubernetes with the storage class \'localdisk\'. The access mode should be \'ReadWriteOnce\' and the storage request should be \'100Mi\'.',
        solved: false
    },
    {
        name: 'resourcequota-yaml-test-2',
        yaml: `apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: production-quota\n  namespace: production\nspec:\n  hard:\n    cpu: "2"\n    memory: 2Gi`,
        description: 'Create a ResourceQuota named \'production-quota\' in the \'production\' namespace in Kubernetes. The quota should limit the CPU usage to \'2\' cores and memory usage to \'2Gi\'.',
        solved: false
    },
    {
        name: 'pod-yaml-test-4',
        yaml: `apiVersion: v1\nkind: Pod\nmetadata:\n  name: legacy-api-pod\nspec:\n  containers:\n  - name: legacy-api\n    image: legacy-api-image:latest\n    env:\n    - name: DB_HOST\n      value: "database.example.com"\n    - name: DB_PORT\n      value: "3306"\n    - name: DB_USERNAME\n      value: "username"\n    - name: DB_PASSWORD\n      value: "password"`,
        description: 'Create a Pod named \'legacy-api-pod\' in Kubernetes with a single container named \'legacy-api\' using the \'legacy-api-image:latest\' image. The container should have environment variables for DB_HOST, DB_PORT, DB_USERNAME, and DB_PASSWORD.',
        solved: false
    },
    {
        name: 'service-yaml-test-2',
        yaml: `apiVersion: v1\nkind: Service\nmetadata:\n  name: legacy-api-service\nspec:\n  selector:\n    app: legacy-api\n  ports:\n  - protocol: TCP\n    port: 8080\n    targetPort: 8080`,
        description: 'Create a Service named \'legacy-api-service\' in Kubernetes with a selector \'app: legacy-api\'. The service should expose TCP port 8080 and target port 8080.',
        solved: false
    },
    {
        name: 'configmap-yaml-test-1',
        yaml: `apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: frontend-config-staging\ndata:\n  apiEndpoint: "https://api.staging.example.com"\n  featureFlags: "enabled"\n  environment: "staging"`,
        description: 'Create a ConfigMap named \'frontend-config-staging\' in Kubernetes with data for apiEndpoint, featureFlags, and environment.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-5',
        yaml: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: frontend-app-deployment-staging\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: frontend-app\n  template:\n    metadata:\n      labels:\n        app: frontend-app\n    spec:\n      containers:\n      - name: frontend-app\n        image: frontend-app-image:latest\n        envFrom:\n        - configMapRef:\n            name: frontend-config-staging`,
        description: 'Create a Deployment named \'frontend-app-deployment-staging\' in Kubernetes with 1 replica. The Deployment should match labels with \'app: frontend-app\'. The Pod template should have a metadata label \'app: frontend-app\' and a spec that includes a single container named \'frontend-app\' using the \'frontend-app-image:latest\' image. The container should get its environment variables from the \'frontend-config-staging\' ConfigMap.',
        solved: false
    },
    {
        name: 'secret-yaml-test-2',
        yaml: `apiVersion: v1\nkind: Secret\nmetadata:\n  name: frontend-db-secret\ntype: Opaque\ndata:\n  username: test\n  password: test123`,
        description: 'Create a Secret named \'frontend-db-secret\' in Kubernetes of type \'Opaque\'. The Secret should have test for \'username\' and test123 \'password\'.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-6',
        yaml: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: frontend-app-deployment-staging\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: frontend-app\n  template:\n    metadata:\n      labels:\n        app: frontend-app\n    spec:\n      containers:\n      - name: frontend-app\n        image: frontend-app-image:latest\n        envFrom:\n        - configMapRef:\n            name: frontend-config-staging\n        volumeMounts:\n        - name: db-secret-volume\n          mountPath: /etc/frontend-app/db\n    volumes:\n    - name: db-secret-volume\n      secret:\n        secretName: frontend-db-secret`,
        description: 'Create a Deployment named \'frontend-app-deployment-staging\' in Kubernetes with 1 replica. The Deployment should match labels with \'app: frontend-app\'. The Pod template should have a metadata label \'app: frontend-app\' and a spec that includes a single container named \'frontend-app\' using the \'frontend-app-image:latest\' image. The container should get its environment variables from the \'frontend-config-staging\' ConfigMap and mount the \'frontend-db-secret\' Secret at \'/etc/frontend-app/db\'.',
        solved: false
    }
    ]