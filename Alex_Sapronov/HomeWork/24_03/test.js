describe("­even", function () {
    it("При введении [3, 5, 1, 4, 7, 5, 2] получим [4, 2]", function () {
        assert.equal([4,2].join(), even([3, 5, 1, 4, 7, 5, 2]).join());
    })

it("При введении [3, 5, 1, 4, 7, 5, 0] получим [4, 0]", function () {
        assert.equal([4,0].join(), even([3, 5, 1, 4, 7, 5, 0]).join());
    })

    it("При введении [2, 4, -1] получим ошибку - отрицательное число", function () {
        try {
            var result = even([2, 4, -1]);
            assert.fail();
        } catch (ex) {
            assert.equal('Number must be zero or less', ex.message);
        }
    })

    it("При введении [2,4,'d'] получим ошибку - неожидданный символ", function () {
        try {
            var result = even([2, 4, 'd']);
            assert.fail();
        } catch (ex) {
            assert.equal('Uninspected charakter', ex.message);
        }
    })
    

    it("При введении [2, 4, 2.2] получим ошибку - не целое число", function () {
        try {
            var result = even([2, 4, 2.2]);
            assert.fail();
        } catch (ex) {
            assert.equal('Number must be integer', ex.message);
        }
    })

    it("При введении без значения получим ошибку - массив неопределён", function () {
        try {
            var result = even();
            assert.fail();
        } catch (ex) {
            assert.equal('Array undefined', ex.message);
        }
    })

})

