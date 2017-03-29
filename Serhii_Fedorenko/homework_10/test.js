describe('getEvenNumbers', function(){
    
    it('When input 8 expected 8', function(){
        var result = getEvenNumbers([8]);
        assert.equal(8, result);
    });
    
    it('When input 1 expected Empty array', function(){
        var result = getEvenNumbers([1]);
        assert.equal(0, result.length);
    });

    it('When input 3.14 expected It is not a integer', function(){
        try{
            var result = getEvenNumbers([3.14]);
            assert.fail();
        } catch (ex){
            assert.equal('it is not a integer', ex.message);
        }
    });
    
    it('When input -1 expected Number cant be less than zero', function(){
        try{
            var result = getEvenNumbers([-1]);
            assert.fail();
        } catch (ex){
            assert.equal('Number cant be less than zero', ex.message);
        }
    });
    
    it('When give not a number expected It is not a number', function(){
        try{
            var result = getEvenNumbers(['hello']);
            assert.fail();
        } catch (ex){
            assert.equal('it is not a number', ex.message);
        }
    });


    
});


