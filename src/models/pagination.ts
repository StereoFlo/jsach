export class Pagination {
    total: number;
    currentPage: number;
    allPages: number[];

    constructor(total: number, currentPage: number) {
        this.total = total;
        this.currentPage = currentPage;
        this.allPages = [];
        this.setAllPages(total);
    }

    getRange(min: number, max: number): number[] {
        return this.allPages.slice(min, max);
    }

    async getRangeStart(): Promise<number[]> {
        return this.allPages.slice(0, 3);
    }

    async getRangeEnd(): Promise<number[]> {
        return this.getRange(this.total - 3, this.total);
    }

    private setAllPages(total: number): void {
        for (let i = 1, len = total; i <= len; i += 1) {
            this.allPages.push(i);
        }
    }
}