

export class InstanceRequestSpec {
    public version?: string;
    public clusterID: string;
    public values: { [key: string]: object; };
    public addonTemplateName: string;
    public constructor(clusterID?: any, values?: any, addonTemplateName?: any) { 
        this['clusterID'] = clusterID;
        this['values'] = values;
        this['addonTemplateName'] = addonTemplateName;
    }
    public withVersion(version: string): InstanceRequestSpec {
        this['version'] = version;
        return this;
    }
    public withClusterID(clusterID: string): InstanceRequestSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withValues(values: { [key: string]: object; }): InstanceRequestSpec {
        this['values'] = values;
        return this;
    }
    public withAddonTemplateName(addonTemplateName: string): InstanceRequestSpec {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
}