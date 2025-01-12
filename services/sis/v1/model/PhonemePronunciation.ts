

export class PhonemePronunciation {
    public score: number;
    public gop: number;
    public constructor(score?: any, gop?: any) { 
        this['score'] = score;
        this['gop'] = gop;
    }
    public withScore(score: number): PhonemePronunciation {
        this['score'] = score;
        return this;
    }
    public withGop(gop: number): PhonemePronunciation {
        this['gop'] = gop;
        return this;
    }
}