

export class CertificateResp {
    public id: string;
    private 'tenant_id': string | undefined;
    private 'admin_state_up': boolean | undefined;
    public name: string;
    public description: string;
    public type: CertificateRespTypeEnum;
    public domain: string;
    private 'private_key': string | undefined;
    public certificate: string;
    private 'expire_time': string | undefined;
    private 'create_time': string | undefined;
    private 'update_time': string | undefined;
    public constructor(id?: any, tenantId?: any, adminStateUp?: any, name?: any, description?: any, type?: any, domain?: any, privateKey?: any, certificate?: any, expireTime?: any, createTime?: any, updateTime?: any) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['admin_state_up'] = adminStateUp;
        this['name'] = name;
        this['description'] = description;
        this['type'] = type;
        this['domain'] = domain;
        this['private_key'] = privateKey;
        this['certificate'] = certificate;
        this['expire_time'] = expireTime;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withId(id: string): CertificateResp {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): CertificateResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): CertificateResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withName(name: string): CertificateResp {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CertificateResp {
        this['description'] = description;
        return this;
    }
    public withType(type: CertificateRespTypeEnum): CertificateResp {
        this['type'] = type;
        return this;
    }
    public withDomain(domain: string): CertificateResp {
        this['domain'] = domain;
        return this;
    }
    public withPrivateKey(privateKey: string): CertificateResp {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey() {
        return this['private_key'];
    }
    public withCertificate(certificate: string): CertificateResp {
        this['certificate'] = certificate;
        return this;
    }
    public withExpireTime(expireTime: string): CertificateResp {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime() {
        return this['expire_time'];
    }
    public withCreateTime(createTime: string): CertificateResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CertificateResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CertificateRespTypeEnum {
    SERVER = 'server',
    CLIENT = 'client'
}
