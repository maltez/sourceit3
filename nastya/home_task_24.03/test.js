describe( 'getEvenNumbers', function(){
    it ('When input [1,2,3] expected [2]',function(){
        var result = getEvenNumbers([1, 2, 3]);
        assert.equal(2, result);
    } )
   
    it ('When input [1, "hello", 3] expected The array must consist of numbers ',function(){
        try{
            var result = getEvenNumbers([1, "hello", 3]);
        assert.equal(2, result);
    }
    catch (ex){
            assert.equal('The array must consist of numbers', ex.message);
        }
        
    } )

    it ( 'When input [1, 2.3, 5, 6] expected Numbers must be integers', function (){
        try{
            var result = getEvenNumbers([1, 2.3, 5, 6]);
            assert.fail();
        }
        
        catch (ex){
            assert.equal('Numbers must be integers', ex.message);
        }
        
    })
       it ( 'When input [1, -1, 5, 6] expected The array must consist of numbers > 0', function (){
        try{
            var result = getEvenNumbers([1, -1, 5, 6]);
            assert.fail();
        }
        catch (ex){
            assert.equal('The array must consist of numbers > 0', ex.message);
        }
        
    })

})