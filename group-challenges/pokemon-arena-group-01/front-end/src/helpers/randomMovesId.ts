const randomMovesId = (array:any, quantity: number) => {
    const randomMovesId: Array<number> = [];
    do{
        const randomId: number = Math.floor(Math.random() * (array.length - 1) + 1);
        if(!randomMovesId.includes(randomId)) {
            randomMovesId.push(randomId);
        }
    } while (randomMovesId.length < quantity);
    return randomMovesId;
};

export default randomMovesId;