import { UpdateHealthCheckRequestBody } from './UpdateHealthCheckRequestBody';


export class UpdateHealthCheckRequest {
    private 'health_check_id': string | undefined;
    public body?: UpdateHealthCheckRequestBody;
    public constructor(healthCheckId?: any) { 
        this['health_check_id'] = healthCheckId;
    }
    public withHealthCheckId(healthCheckId: string): UpdateHealthCheckRequest {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId() {
        return this['health_check_id'];
    }
    public withBody(body: UpdateHealthCheckRequestBody): UpdateHealthCheckRequest {
        this['body'] = body;
        return this;
    }
}