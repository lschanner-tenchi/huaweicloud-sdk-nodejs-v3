
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePremiumHostProtectStatusResponse extends SdkResponse {
    private 'protect_status'?: number | undefined;
    public constructor() { 
        super();
    }
    public withProtectStatus(protectStatus: number): UpdatePremiumHostProtectStatusResponse {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: number | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus() {
        return this['protect_status'];
    }
}