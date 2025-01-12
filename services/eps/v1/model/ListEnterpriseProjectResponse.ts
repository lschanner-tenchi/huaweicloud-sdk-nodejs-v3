import { EpDetail } from './EpDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnterpriseProjectResponse extends SdkResponse {
    private 'enterprise_projects'?: Array<EpDetail> | undefined;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withEnterpriseProjects(enterpriseProjects: Array<EpDetail>): ListEnterpriseProjectResponse {
        this['enterprise_projects'] = enterpriseProjects;
        return this;
    }
    public set enterpriseProjects(enterpriseProjects: Array<EpDetail> | undefined) {
        this['enterprise_projects'] = enterpriseProjects;
    }
    public get enterpriseProjects() {
        return this['enterprise_projects'];
    }
    public withTotalCount(totalCount: number): ListEnterpriseProjectResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}