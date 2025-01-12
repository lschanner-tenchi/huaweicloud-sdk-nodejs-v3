

export class MyanmarIdcardRequestBody {
    public image?: string;
    public url?: string;
    private 'convert_unicode'?: boolean | undefined;
    private 'return_confidence'?: boolean | undefined;
    private 'return_portrait_image'?: boolean | undefined;
    private 'return_portrait_location'?: boolean | undefined;
    private 'return_idcard_type'?: boolean | undefined;
    public constructor() { 
    }
    public withImage(image: string): MyanmarIdcardRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): MyanmarIdcardRequestBody {
        this['url'] = url;
        return this;
    }
    public withConvertUnicode(convertUnicode: boolean): MyanmarIdcardRequestBody {
        this['convert_unicode'] = convertUnicode;
        return this;
    }
    public set convertUnicode(convertUnicode: boolean | undefined) {
        this['convert_unicode'] = convertUnicode;
    }
    public get convertUnicode() {
        return this['convert_unicode'];
    }
    public withReturnConfidence(returnConfidence: boolean): MyanmarIdcardRequestBody {
        this['return_confidence'] = returnConfidence;
        return this;
    }
    public set returnConfidence(returnConfidence: boolean | undefined) {
        this['return_confidence'] = returnConfidence;
    }
    public get returnConfidence() {
        return this['return_confidence'];
    }
    public withReturnPortraitImage(returnPortraitImage: boolean): MyanmarIdcardRequestBody {
        this['return_portrait_image'] = returnPortraitImage;
        return this;
    }
    public set returnPortraitImage(returnPortraitImage: boolean | undefined) {
        this['return_portrait_image'] = returnPortraitImage;
    }
    public get returnPortraitImage() {
        return this['return_portrait_image'];
    }
    public withReturnPortraitLocation(returnPortraitLocation: boolean): MyanmarIdcardRequestBody {
        this['return_portrait_location'] = returnPortraitLocation;
        return this;
    }
    public set returnPortraitLocation(returnPortraitLocation: boolean | undefined) {
        this['return_portrait_location'] = returnPortraitLocation;
    }
    public get returnPortraitLocation() {
        return this['return_portrait_location'];
    }
    public withReturnIdcardType(returnIdcardType: boolean): MyanmarIdcardRequestBody {
        this['return_idcard_type'] = returnIdcardType;
        return this;
    }
    public set returnIdcardType(returnIdcardType: boolean | undefined) {
        this['return_idcard_type'] = returnIdcardType;
    }
    public get returnIdcardType() {
        return this['return_idcard_type'];
    }
}