import { CreateManualImageSyncRepoRequestBody } from './CreateManualImageSyncRepoRequestBody';


export class CreateManualImageSyncRepoRequest {
    private 'Content-Type': CreateManualImageSyncRepoRequestContentTypeEnum | undefined;
    public namespace: string;
    public repository: string;
    public body?: CreateManualImageSyncRepoRequestBody;
    public constructor(contentType?: any, namespace?: any, repository?: any) { 
        this['Content-Type'] = contentType;
        this['namespace'] = namespace;
        this['repository'] = repository;
    }
    public withContentType(contentType: CreateManualImageSyncRepoRequestContentTypeEnum): CreateManualImageSyncRepoRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: CreateManualImageSyncRepoRequestContentTypeEnum | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNamespace(namespace: string): CreateManualImageSyncRepoRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withRepository(repository: string): CreateManualImageSyncRepoRequest {
        this['repository'] = repository;
        return this;
    }
    public withBody(body: CreateManualImageSyncRepoRequestBody): CreateManualImageSyncRepoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateManualImageSyncRepoRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
