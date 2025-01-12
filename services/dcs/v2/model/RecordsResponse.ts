

export class RecordsResponse {
    public id?: string;
    public status?: RecordsResponseStatusEnum;
    private 'scan_type'?: RecordsResponseScanTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'started_at'?: string | undefined;
    private 'finished_at'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): RecordsResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: RecordsResponseStatusEnum): RecordsResponse {
        this['status'] = status;
        return this;
    }
    public withScanType(scanType: RecordsResponseScanTypeEnum): RecordsResponse {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: RecordsResponseScanTypeEnum | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType() {
        return this['scan_type'];
    }
    public withCreatedAt(createdAt: string): RecordsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withStartedAt(startedAt: string): RecordsResponse {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt() {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): RecordsResponse {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt() {
        return this['finished_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecordsResponseStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum RecordsResponseScanTypeEnum {
    MANUAL = 'manual',
    AUTO = 'auto'
}
