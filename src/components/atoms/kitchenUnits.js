export const kitchenUnits = (ml) => {
    let unit, value

    if (ml <= 5) {
        unit = 'łyżeczka', value = ml
    } else if ( ml > 5 && ml <= 15 ) {
        unit = 'łyżka', value = ml
    } else if ( ml > 15 && ml <= 250 ) {
        unit = 'szklanka', value = ml 
    } else {
        unit = 'ml', value = ml
    }

    return {unit: unit, value: value}

}
