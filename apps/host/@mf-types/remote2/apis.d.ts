
    export type RemoteKeys = 'remote2/Module';
    type PackageType<T> = T extends 'remote2/Module' ? typeof import('remote2/Module') :any;