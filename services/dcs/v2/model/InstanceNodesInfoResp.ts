import { NodesInfoResp } from './NodesInfoResp';


export class InstanceNodesInfoResp {
    private 'instance_id'?: string | undefined;
    private 'node_count'?: number | undefined;
    public nodes?: Array<NodesInfoResp>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceNodesInfoResp {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withNodeCount(nodeCount: number): InstanceNodesInfoResp {
        this['node_count'] = nodeCount;
        return this;
    }
    public set nodeCount(nodeCount: number | undefined) {
        this['node_count'] = nodeCount;
    }
    public get nodeCount() {
        return this['node_count'];
    }
    public withNodes(nodes: Array<NodesInfoResp>): InstanceNodesInfoResp {
        this['nodes'] = nodes;
        return this;
    }
}