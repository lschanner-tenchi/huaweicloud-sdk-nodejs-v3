

export class BandwidthPkgPage {
    public href: string;
    public rel: string;
    public constructor(href?: any, rel?: any) { 
        this['href'] = href;
        this['rel'] = rel;
    }
    public withHref(href: string): BandwidthPkgPage {
        this['href'] = href;
        return this;
    }
    public withRel(rel: string): BandwidthPkgPage {
        this['rel'] = rel;
        return this;
    }
}