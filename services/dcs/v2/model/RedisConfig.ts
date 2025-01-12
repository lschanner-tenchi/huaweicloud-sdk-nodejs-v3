

export class RedisConfig {
    private 'param_value': string | undefined;
    private 'param_name': string | undefined;
    private 'param_id': string | undefined;
    public constructor(paramValue?: any, paramName?: any, paramId?: any) { 
        this['param_value'] = paramValue;
        this['param_name'] = paramName;
        this['param_id'] = paramId;
    }
    public withParamValue(paramValue: string): RedisConfig {
        this['param_value'] = paramValue;
        return this;
    }
    public set paramValue(paramValue: string | undefined) {
        this['param_value'] = paramValue;
    }
    public get paramValue() {
        return this['param_value'];
    }
    public withParamName(paramName: string): RedisConfig {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName() {
        return this['param_name'];
    }
    public withParamId(paramId: string): RedisConfig {
        this['param_id'] = paramId;
        return this;
    }
    public set paramId(paramId: string | undefined) {
        this['param_id'] = paramId;
    }
    public get paramId() {
        return this['param_id'];
    }
}