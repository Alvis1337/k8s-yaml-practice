import {
    configmapYamlTest1,
    customresourceYamlTest1,
    deploymentYamlTest1,
    deploymentYamlTest2,
    deploymentYamlTest3,
    deploymentYamlTest4, deploymentYamlTest5, deploymentYamlTest6,
    ingressYamlTest1,
    podPvcYamlTest1,
    podYamlTest1,
    podYamlTest2,
    podYamlTest3, podYamlTest4,
    pvcYamlTest1, pvcYamlTest2,
    pvYamlTest1,
    pvYamlTest2,
    pvYamlTest3,
    resourcequotaYamlTest1, resourcequotaYamlTest2,
    secretYamlTest1, secretYamlTest2,
    serviceYamlTest1, serviceYamlTest2,
    statefulsetYamlTest1
} from "./jsonToYamlTests.tsx";
import {implodeJsonToYaml} from "./baseFuncs.tsx";

export const yamlTests = [
    {
        name: 'pv-yaml-test-1',
        yaml: implodeJsonToYaml(pvYamlTest1),
        description: 'Create a PV with 8Gi of storage, ReadWriteOnce access mode, a Delete reclaim policy, with a name of pv-test-yaml that uses the pv-storage-class storage class.',
        solved: false
    },
    {
        name: 'pv-yaml-test-2',
        yaml: implodeJsonToYaml(pvYamlTest2),
        description: 'Create a PV with 8Gi of storage, ReadWriteOnce access mode, a Delete reclaim policy, with a name of pv-test-yaml that uses the pv-storage-class storage class.',
        solved: false
    },
    {
        name: 'pv-yaml-test-3',
        yaml: implodeJsonToYaml(pvYamlTest3),
        description: 'Create a PersistentVolume named \'localpv\' in the \'pvdemo\' namespace in Kubernetes with the storage class \'localdisk\'. The PersistentVolume\'s reclaim policy is set to \'Recycle\'. The storage capacity is \'1Gi\' and the access mode is \'ReadWriteOnce\'. The volume is hosted on the local filesystem at the path \'/volumes/data\'.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-1',
        yaml: implodeJsonToYaml(deploymentYamlTest1),
        description: 'Create a deployment named app-v2 with an app label of app-v2. The deployment should have 3 replicas and use the nginx:1.14.2 image. The container should listen on port 80. Each pod should have a label of app: app-v2.',
        solved: false
    },
    {
        name: 'deplyoment-yaml-test-2',
        yaml: implodeJsonToYaml(deploymentYamlTest2),
        description: 'Create a deployment named database with an app label with database, with 3 replicas, a matchlabel app named database, give each pod a app label with database, and run the nginx:1.14.2 image with a container port of 80. Also, add a toleration for the key dedicated with the value database and the effect NoSchedule.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-3',
        yaml: implodeJsonToYaml(deploymentYamlTest3),
        description: 'Create a Deployment named \'my-app-deployment\' in Kubernetes with 3 replicas. The Deployment should match labels with \'app: my-app\'. The Pod template should have a metadata label \'app: my-app\' and a spec that includes a single container named \'my-app-container\' using the \'nginx:latest\' image, exposing port 80.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-4',
        yaml: implodeJsonToYaml(deploymentYamlTest4),
        description: 'Create a Deployment named \'nginx-deployment\' in the \'development\' namespace in Kubernetes with 3 replicas. The Deployment should match labels with \'app: nginx\'. The Pod template should have a metadata label \'app: nginx\' and a spec that includes a single container named \'nginx\' using the \'nginx:latest\' image.',
        solved: false
    },
    {
        name: 'secret-yaml-test-1',
        yaml: implodeJsonToYaml(secretYamlTest1),
        description: 'Create a secret with a name of db-secret in the default namespace. The secret contains two key-value pairs: username and password. Of type Opaque.',
        solved: false
    },
    {
        name: 'pod-yaml-test-1',
        yaml: implodeJsonToYaml(podYamlTest1),
        description: 'Create a pod with a name of nginx-pod that uses the nginx:1.21.0 image. The pod mounts the nginx-config volume at /etc/nginx/nginx.conf. The volume is populated with the nginx-config ConfigMap.',
        solved: false
    },
    {
        name: 'pod-yaml-test-2',
        yaml: implodeJsonToYaml(podYamlTest2),
        description: 'Create a Pod named \'nginx-pod\' in Kubernetes with a single container named \'nginx-container\' using the \'nginx:latest\' image. The container should expose port 80 and the Pod should always restart its containers if they exit.',
        solved: false
    },
    {
        name: 'pod-yaml-test-3',
        yaml: implodeJsonToYaml(podYamlTest3),
        description: 'Create a Pod named \'my-pod\' in Kubernetes with a single container named \'my-container\' using the \'nginx\' image. The Pod should have a node affinity rule that requires (during scheduling) the node to be in the \'app\' zone according to the \'topology.kubernetes.io/zone\' label.',
        solved: false
    },
    {
        name: 'statefulset-yaml-test-1',
        yaml: implodeJsonToYaml(statefulsetYamlTest1),
        description: 'Create a StatefulSet named \'mysql\' with 3 replicas in Kubernetes, using \'mysql:latest\' image, setting \'MYSQL_ROOT_PASSWORD\' to \'your-root-password\', exposing port 3306, and mounting a volume named \'mysql-persistent-storage\' at \'/var/lib/mysql\'. The StatefulSet should have a PersistentVolumeClaim named \'mysql-persistent-storage\' requesting 25Gi storage with \'ReadWriteOnce\' access mode and \'ceph-rbd-sc\' storage class. Verify the creation and status of the StatefulSet, ensure the replicas are running with correct environment variables and volume mounts, and confirm the PersistentVolumeClaim is bound to the desired storage class.',
        solved: false
    },
    {
        name: 'customresource-yaml-test-1',
        yaml: implodeJsonToYaml(customresourceYamlTest1),
        description: 'Create a CustomResourceDefinition named \'apps.example.com\' in Kubernetes under the group \'example.com\'. The kind should be \'App\' with a listKind of \'AppList\', plural \'apps\', singular \'app\', and shortNames \'ap\'. The scope should be \'Namespaced\'. It should have a version \'v1\' that is served and stored. The schema should follow the openAPIV3Schema with properties \'name\' of type string, \'replicas\' of type integer, and \'image\' of type string.',
        solved: false
    },
    {
        name: 'ingress-yaml-test-1',
        yaml: implodeJsonToYaml(ingressYamlTest1),
        description: 'Create an Ingress named \'my-ingress\' in Kubernetes with the annotation \'nginx.ingress.kubernetes.io/rewrite-target\' set to \'/\'. It should have two rules: the first one should route the path \'/app1\' to the service \'service-a\' on port 80, and the second one should route the path \'/app2\' to the service \'service-b\' on port 80.',
        solved: false
    },
    {
        name: 'service-yaml-test-1',
        yaml: implodeJsonToYaml(serviceYamlTest1),
        description: 'Create a Service named \'my-service\' in Kubernetes with a selector \'app: my-app\'. The service should expose TCP port 80 and target port 80. The type of the service should be \'LoadBalancer\'.',
        solved: false
    },
    {
        name: 'resourcequota-yaml-test-1',
        yaml: implodeJsonToYaml(resourcequotaYamlTest1),
        description: 'Create a ResourceQuota named \'dev-quota\' in the \'development\' namespace in Kubernetes. The quota should limit the CPU usage to \'2\' cores and memory usage to \'2Gi\'.',
        solved: false
    },
    {
        name: 'pvc-yaml-test-1',
        yaml: implodeJsonToYaml(pvcYamlTest1),
        description: 'Create a PersistentVolumeClaim named \'pvc-volume-1\' in Kubernetes with the storage class \'hostpath-storage-class\'. The access mode should be \'ReadWriteOnce\' and the storage request should be \'50Mi\'.',
        solved: false
    },
    {
        name: 'pod-pvc-yaml-test-1',
        yaml: implodeJsonToYaml(podPvcYamlTest1),
        description: 'Create a Pod named \'pvc-pod\' in Kubernetes with a single container named \'pvc-pod\' using the \'nginx\' image. The Pod should mount a PersistentVolumeClaim named \'pvc-volume-1\' to the path \'/usr/share/nginx/html\' in the container.',
        solved: false
    },
    {
        name: 'pvc-yaml-test-2',
        yaml: implodeJsonToYaml(pvcYamlTest2),
        description: 'Create a PersistentVolumeClaim named \'localpvc\' in the \'pvdemo\' namespace in Kubernetes with the storage class \'localdisk\'. The access mode should be \'ReadWriteOnce\' and the storage request should be \'100Mi\'.',
        solved: false
    },
    {
        name: 'resourcequota-yaml-test-2',
        yaml: implodeJsonToYaml(resourcequotaYamlTest2),
        description: 'Create a ResourceQuota named \'production-quota\' in the \'production\' namespace in Kubernetes. The quota should limit the CPU usage to \'2\' cores and memory usage to \'2Gi\'.',
        solved: false
    },
    {
        name: 'pod-yaml-test-4',
        yaml: implodeJsonToYaml(podYamlTest4),
        description: 'Create a Pod named \'legacy-api-pod\' in Kubernetes with a single container named \'legacy-api\' using the \'legacy-api-image:latest\' image. The container should have environment variables for DB_HOST, DB_PORT, DB_USERNAME, and DB_PASSWORD.',
        solved: false
    },
    {
        name: 'service-yaml-test-2',
        yaml: implodeJsonToYaml(serviceYamlTest2),
        description: 'Create a Service named \'legacy-api-service\' in Kubernetes with a selector \'app: legacy-api\'. The service should expose TCP port 8080 and target port 8080.',
        solved: false
    },
    {
        name: 'configmap-yaml-test-1',
        yaml: implodeJsonToYaml(configmapYamlTest1),
        description: 'Create a ConfigMap named \'frontend-config-staging\' in Kubernetes with data for apiEndpoint, featureFlags, and environment.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-5',
        yaml: implodeJsonToYaml(deploymentYamlTest5),
        description: 'Create a Deployment named \'frontend-app-deployment-staging\' in Kubernetes with 1 replica. The Deployment should match labels with \'app: frontend-app\'. The Pod template should have a metadata label \'app: frontend-app\' and a spec that includes a single container named \'frontend-app\' using the \'frontend-app-image:latest\' image. The container should get its environment variables from the \'frontend-config-staging\' ConfigMap.',
        solved: false
    },
    {
        name: 'secret-yaml-test-2',
        yaml: implodeJsonToYaml(secretYamlTest2),
        description: 'Create a Secret named \'frontend-db-secret\' in Kubernetes of type \'Opaque\'. The Secret should have test for \'username\' and test123 \'password\'.',
        solved: false
    },
    {
        name: 'deployment-yaml-test-6',
        yaml: implodeJsonToYaml(deploymentYamlTest6),
        description: 'Create a Deployment named \'frontend-app-deployment-staging\' in Kubernetes with 1 replica. The Deployment should match labels with \'app: frontend-app\'. The Pod template should have a metadata label \'app: frontend-app\' and a spec that includes a single container named \'frontend-app\' using the \'frontend-app-image:latest\' image. The container should get its environment variables from the \'frontend-config-staging\' ConfigMap and mount the \'frontend-db-secret\' Secret at \'/etc/frontend-app/db\'.',
        solved: false
    }
    ]