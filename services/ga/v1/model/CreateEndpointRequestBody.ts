import { CreateEndpointOption } from './CreateEndpointOption';


export class CreateEndpointRequestBody {
    public endpoint: CreateEndpointOption;
    public constructor(endpoint?: any) { 
        this['endpoint'] = endpoint;
    }
    public withEndpoint(endpoint: CreateEndpointOption): CreateEndpointRequestBody {
        this['endpoint'] = endpoint;
        return this;
    }
}