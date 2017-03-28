function getEvenNumbers(arrNum){
    arrNum.forEach(function(item, i) {
        if (typeof item === 'number') {
            if (parseInt(item) === item) {
                if (item >= 0) {
                    if (item % 2 !== 0) {  // even parity
                        return arrNum.splice(i, 1);
                    }
                    return arrNum;
                }
                throw new Error('Number cant be less than zero');
            }
            throw new Error('it is not a integer');
        }
        throw new Error('it is not a number');
    });
    return arrNum;
}