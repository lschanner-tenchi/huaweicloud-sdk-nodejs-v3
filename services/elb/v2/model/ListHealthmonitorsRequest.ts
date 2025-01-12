

export class ListHealthmonitorsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: string;
    public name?: string;
    public delay?: number;
    private 'max_retries'?: number | undefined;
    private 'admin_state_up'?: boolean | undefined;
    public timeout?: number;
    public type?: string;
    private 'monitor_port'?: number | undefined;
    private 'expected_codes'?: string | undefined;
    private 'domain_name'?: string | undefined;
    private 'url_path'?: string | undefined;
    private 'http_method'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListHealthmonitorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListHealthmonitorsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListHealthmonitorsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: string): ListHealthmonitorsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListHealthmonitorsRequest {
        this['name'] = name;
        return this;
    }
    public withDelay(delay: number): ListHealthmonitorsRequest {
        this['delay'] = delay;
        return this;
    }
    public withMaxRetries(maxRetries: number): ListHealthmonitorsRequest {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries() {
        return this['max_retries'];
    }
    public withAdminStateUp(adminStateUp: boolean): ListHealthmonitorsRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withTimeout(timeout: number): ListHealthmonitorsRequest {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: string): ListHealthmonitorsRequest {
        this['type'] = type;
        return this;
    }
    public withMonitorPort(monitorPort: number): ListHealthmonitorsRequest {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort() {
        return this['monitor_port'];
    }
    public withExpectedCodes(expectedCodes: string): ListHealthmonitorsRequest {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes() {
        return this['expected_codes'];
    }
    public withDomainName(domainName: string): ListHealthmonitorsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withUrlPath(urlPath: string): ListHealthmonitorsRequest {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath() {
        return this['url_path'];
    }
    public withHttpMethod(httpMethod: string): ListHealthmonitorsRequest {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod() {
        return this['http_method'];
    }
}