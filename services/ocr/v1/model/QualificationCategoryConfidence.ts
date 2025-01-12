

export class QualificationCategoryConfidence {
    public category?: number;
    private 'initial_issue_date'?: number | undefined;
    private 'issue_date'?: number | undefined;
    private 'expiry_date'?: number | undefined;
    public constructor() { 
    }
    public withCategory(category: number): QualificationCategoryConfidence {
        this['category'] = category;
        return this;
    }
    public withInitialIssueDate(initialIssueDate: number): QualificationCategoryConfidence {
        this['initial_issue_date'] = initialIssueDate;
        return this;
    }
    public set initialIssueDate(initialIssueDate: number | undefined) {
        this['initial_issue_date'] = initialIssueDate;
    }
    public get initialIssueDate() {
        return this['initial_issue_date'];
    }
    public withIssueDate(issueDate: number): QualificationCategoryConfidence {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: number | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: number): QualificationCategoryConfidence {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: number | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate() {
        return this['expiry_date'];
    }
}