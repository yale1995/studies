type InterpolationSearchResult = { index: number, iterations: number };


export class InterpolationSearch {
    private arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    public maxIterations(): number {
        return this.arr.length;
    }

    public search(target: number): InterpolationSearchResult {
        let left = 0;
        let right = this.arr.length - 1;
        let iterations = 0;


        while (left <= right && this.arr[left] <= target && this.arr[right] >= target) {
            const position = left + Math.floor((target - this.arr[left]) / (this.arr[right] - this.arr[left]) * (right - left));
            iterations++;

            if (this.arr[position] === target) return { index: position, iterations: iterations };
            if (this.arr[position] > target) right = position - 1;
            if (this.arr[position] < target) left = position + 1;
        }

        return { index: -1, iterations: iterations };
    }
}