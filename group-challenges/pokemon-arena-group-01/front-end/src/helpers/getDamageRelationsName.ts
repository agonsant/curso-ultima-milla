const getDamageRelationsName = (array:any) => {
    const damageRelationsName = [];
    for(let position = 0; position < array.length; position++) {
        const name = array[position].name;
        damageRelationsName.push(name);
    };
    return damageRelationsName;
};

export default getDamageRelationsName;