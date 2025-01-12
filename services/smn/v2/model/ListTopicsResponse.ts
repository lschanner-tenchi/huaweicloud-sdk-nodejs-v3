import { ListTopicsItem } from './ListTopicsItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopicsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'topic_count'?: number | undefined;
    public topics?: Array<ListTopicsItem>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListTopicsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withTopicCount(topicCount: number): ListTopicsResponse {
        this['topic_count'] = topicCount;
        return this;
    }
    public set topicCount(topicCount: number | undefined) {
        this['topic_count'] = topicCount;
    }
    public get topicCount() {
        return this['topic_count'];
    }
    public withTopics(topics: Array<ListTopicsItem>): ListTopicsResponse {
        this['topics'] = topics;
        return this;
    }
}