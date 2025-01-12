import { ModifyInstanceBody } from './ModifyInstanceBody';


export class UpdateInstanceRequest {
    private 'instance_id': string | undefined;
    public body?: ModifyInstanceBody;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: ModifyInstanceBody): UpdateInstanceRequest {
        this['body'] = body;
        return this;
    }
}