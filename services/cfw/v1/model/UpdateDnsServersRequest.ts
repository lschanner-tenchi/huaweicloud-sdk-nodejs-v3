import { UpdateDnsServersRequestBody } from './UpdateDnsServersRequestBody';


export class UpdateDnsServersRequest {
    private 'project_id': string | undefined;
    public body?: UpdateDnsServersRequestBody;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): UpdateDnsServersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: UpdateDnsServersRequestBody): UpdateDnsServersRequest {
        this['body'] = body;
        return this;
    }
}