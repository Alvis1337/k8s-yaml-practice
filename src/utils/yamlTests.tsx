export const yamlTests = [
    {
        name: 'pv-yaml-test-1',
        yaml: 'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-test-yaml\nspec:\n  capacity:\n    storage: 8Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: pv-storage-class',
        description: 'Create a PV with 8Gi of storage, ReadWriteOnce access mode, a Delete reclaim policy, with a name of pv-test-yaml that uses the pv-storage-class storage class.',
        solved: false
    },
    {
        name: 'pvc-yaml-test-1',
        yaml: `apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-test-1\n  namespace: pvc-test-ns\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 800Gi\n  volumeName: test-pvc-01\n  storageClassName: pv-storage-class`,
        description: 'Create a PVC with 800Gi of storage, ReadWriteMany access mode, a volumeName of test-pvc-01, and a storageClassName of pv-storage-class in the pvc-test-ns namespace.',
        solved: false
    },
    {
        name: 'pv-yaml-test-2',
        yaml: 'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-test-yaml\nspec:\n  capacity:\n    storage: 8Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: pv-storage-class',
        description: 'Create a PV with 8Gi of storage, ReadWriteOnce access mode, a Delete reclaim policy, with a name of pv-test-yaml that uses the pv-storage-class storage class.',
        solved: false
    },
    {
        name: 'pvc-yaml-test-2',
        yaml: `apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-test-1\n  namespace: pvc-test-ns\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 800Gi\n  volumeName: test-pvc-01\n  storageClassName: pv-storage-class`,
        description: 'Create a PVC with 800Gi of storage, ReadWriteMany access mode, a volumeName of test-pvc-01, and a storageClassName of pv-storage-class in the pvc-test-ns namespace.',
        solved: false
    },
    {
        name: 'pv-yaml-test-3',
        yaml: 'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-test-yaml\nspec:\n  capacity:\n    storage: 8Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Delete\n  storageClassName: pv-storage-class',
        description: 'Create a PV with 8Gi of storage, ReadWriteOnce access mode, a Delete reclaim policy, with a name of pv-test-yaml that uses the pv-storage-class storage class.',
        solved: false
    },
    {
        name: 'pvc-yaml-test-3',
        yaml: `apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-test-1\n  namespace: pvc-test-ns\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 800Gi\n  volumeName: test-pvc-01\n  storageClassName: pv-storage-class`,
        description: 'Create a PVC with 800Gi of storage, ReadWriteMany access mode, a volumeName of test-pvc-01, and a storageClassName of pv-storage-class in the pvc-test-ns namespace.',
        solved: false
    },
    ]