export default abstract class Grimpan {

    //TODO: protected 가 아니면 안되나...? private 안되나..?
    protected constructor(canvas: HTMLElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('canvas 엘리먼트를 입력하세요');
        }
    }

    abstract initialize(): void
    abstract initializeMenu(): void

    static getInstance(): Grimpan {
        throw new Error('하위에서 구현해야한다.');
    }
}
