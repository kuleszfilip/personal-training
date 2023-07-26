export class ImageMapCoordinate {
    x: number = 0;
    y: number = 0;
    width: number = 100;
    height: number = 100;
    name?: string;

    constructor(init?: Partial<ImageMapCoordinate>) {
        Object.assign(this, init);
    }
}