import { UpdateEndpointGroupRequestBody } from './UpdateEndpointGroupRequestBody';


export class UpdateEndpointGroupRequest {
    private 'endpoint_group_id': string | undefined;
    public body?: UpdateEndpointGroupRequestBody;
    public constructor(endpointGroupId?: any) { 
        this['endpoint_group_id'] = endpointGroupId;
    }
    public withEndpointGroupId(endpointGroupId: string): UpdateEndpointGroupRequest {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
    public withBody(body: UpdateEndpointGroupRequestBody): UpdateEndpointGroupRequest {
        this['body'] = body;
        return this;
    }
}