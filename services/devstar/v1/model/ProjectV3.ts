

export class ProjectV3 {
    private 'project_id': string | undefined;
    public name: string;
    private 'region_id'?: string | undefined;
    private 'region_name'?: string | undefined;
    private 'management_permission'?: boolean | undefined;
    private 'is_stock'?: boolean | undefined;
    public constructor(projectId?: any, name?: any) { 
        this['project_id'] = projectId;
        this['name'] = name;
    }
    public withProjectId(projectId: string): ProjectV3 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withName(name: string): ProjectV3 {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): ProjectV3 {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withRegionName(regionName: string): ProjectV3 {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName() {
        return this['region_name'];
    }
    public withManagementPermission(managementPermission: boolean): ProjectV3 {
        this['management_permission'] = managementPermission;
        return this;
    }
    public set managementPermission(managementPermission: boolean | undefined) {
        this['management_permission'] = managementPermission;
    }
    public get managementPermission() {
        return this['management_permission'];
    }
    public withIsStock(isStock: boolean): ProjectV3 {
        this['is_stock'] = isStock;
        return this;
    }
    public set isStock(isStock: boolean | undefined) {
        this['is_stock'] = isStock;
    }
    public get isStock() {
        return this['is_stock'];
    }
}