

export class AddressSetListResponseDTODataRecords {
    private 'set_id'?: string | undefined;
    private 'ref_count'?: number | undefined;
    public description?: string;
    public name?: string;
    private 'address_type'?: number | undefined;
    public constructor() { 
    }
    public withSetId(setId: string): AddressSetListResponseDTODataRecords {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withRefCount(refCount: number): AddressSetListResponseDTODataRecords {
        this['ref_count'] = refCount;
        return this;
    }
    public set refCount(refCount: number | undefined) {
        this['ref_count'] = refCount;
    }
    public get refCount() {
        return this['ref_count'];
    }
    public withDescription(description: string): AddressSetListResponseDTODataRecords {
        this['description'] = description;
        return this;
    }
    public withName(name: string): AddressSetListResponseDTODataRecords {
        this['name'] = name;
        return this;
    }
    public withAddressType(addressType: number): AddressSetListResponseDTODataRecords {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType() {
        return this['address_type'];
    }
}