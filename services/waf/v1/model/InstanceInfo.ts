

export class InstanceInfo {
    public id: string;
    public name: string;
    public constructor(id?: any, name?: any) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): InstanceInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceInfo {
        this['name'] = name;
        return this;
    }
}