export class Spot {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    isOutOfBoard(): boolean {
        return this.x < 0 || this.x > 7 || this.y < 0 || this.y > 7;
    }
}

class Node {
    coordinates: Spot;
    nextPossibleMoves: Node[];

    constructor(coordinates: Spot) {
        this.coordinates = coordinates;
        this.nextPossibleMoves = [];
    }
}

export class PossibleMovesTree {
    currentPosition: Node | null;

    constructor(currentPosition: Spot | null = null) {
        this.currentPosition =
            currentPosition === null ? null : new Node(currentPosition);
    }

    getPossibleMoves(): Spot[] {
        if (
            this.currentPosition === null ||
            this.currentPosition.coordinates.isOutOfBoard()
        ) {
            return [];
        }

        const [currentX, currentY] = [
            this.currentPosition.coordinates.x,
            this.currentPosition.coordinates.y,
        ];

        const possibleMoves: Spot[] = [
            new Spot(currentX + 2, currentY + 1),
            new Spot(currentX + 2, currentY - 1),
            new Spot(currentX - 2, currentY + 1),
            new Spot(currentX - 2, currentY - 1),
            new Spot(currentX + 1, currentY + 2),
            new Spot(currentX + 1, currentY - 2),
            new Spot(currentX - 1, currentY + 2),
            new Spot(currentX - 1, currentY - 2),
        ];

        return possibleMoves.filter((spot) => !spot.isOutOfBoard());
    }
}
