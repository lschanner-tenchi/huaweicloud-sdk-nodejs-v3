import { DisableAction } from './DisableAction';


export class DisableEnterpriseProjectRequest {
    private 'enterprise_project_id': string | undefined;
    public body?: DisableAction;
    public constructor(enterpriseProjectId?: any) { 
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DisableEnterpriseProjectRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withBody(body: DisableAction): DisableEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}