const randomMovesId = (array:any, quantity: number) => {
    const randomMovesId: Array<number> = [];
    while (randomMovesId.length < quantity) {
        const randomId: number = Math.floor(Math.random() * (array.length - 1) + 1);
        if(!randomMovesId.includes(randomId)) {
            randomMovesId.push(randomId);
        }
    };
    return randomMovesId;
};

export default randomMovesId;