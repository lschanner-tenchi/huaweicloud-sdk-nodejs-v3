import { GeneralTextCharList } from './GeneralTextCharList';


export class GeneralTextWordsBlockList {
    public words: string;
    public location: Array<Array<number>>;
    public confidence: number;
    private 'char_list': Array<GeneralTextCharList> | undefined;
    public constructor(words?: any, location?: any, confidence?: any, charList?: any) { 
        this['words'] = words;
        this['location'] = location;
        this['confidence'] = confidence;
        this['char_list'] = charList;
    }
    public withWords(words: string): GeneralTextWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<Array<number>>): GeneralTextWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withConfidence(confidence: number): GeneralTextWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withCharList(charList: Array<GeneralTextCharList>): GeneralTextWordsBlockList {
        this['char_list'] = charList;
        return this;
    }
    public set charList(charList: Array<GeneralTextCharList> | undefined) {
        this['char_list'] = charList;
    }
    public get charList() {
        return this['char_list'];
    }
}