const evaluator = require('./evaluator.js')

describe('convertToList', function() {
  it('works on addition and subtraction', function() {
    expect(evaluator.convertToList("a - b + c")).toEqual(["a", "-", "b", "+", "c"]);
  });
  it('works on multi-character strings', function() {
    expect(evaluator.convertToList("a - b + c - asjldsa + 32jk2 ")).toEqual(["a", "-", "b", "+",
     "c", "-", "asjldsa", "+", "32jk2"])
  });

  it('works on multiplication', function() {
    expect(evaluator.convertToList("a * b + c * asjldsa + 32jk2 ")).toEqual(["a", "*", "b", "+",
     "c", "*", "asjldsa", "+", "32jk2"])
  });


});

describe('convertToPostfix', function() {
  it('Converts a single character', function() {
    expect(String(evaluator.convertToPostfix(["5"]))).toEqual(String(["5"]));
  });
 
  it('Converts with only a single operator', function() {
    expect(String(evaluator.convertToPostfix(["5", "+", "4"]))).toEqual(String(["5", "4", "+"]));
  });
  it('Converts in order of precedence', function() {
    expect(evaluator.convertToPostfix(["5", "+", "5", "*", "10"])).toEqual(["5", "5", "10", "*", "+"]);
  });
 
 it('Converts complicated expressions', function() {
    expect(evaluator.convertToPostfix(["5", "+", "5", "*", "10"])).toEqual(["5", "5", "10", "*", "+"]);
  });
 

});

describe('evaluatePostfix', function() {
  xit('Evaluates a single character', function() {
    expect(String(evaluator.evaluatePostfix(["5"]))).toEqual("5");
  });
 
  xit('Evaluates single operators', function() {
    expect(String(evaluator.evaluatePostfix(["5", "4", "+"]))).toEqual("9");
  });
  it('Converts larger expressions properly', function() {
    expect(evaluator.evaluatePostfix(["5", "5", "10", "*", "+"])).toEqual("55");
  });
 
 xit('Converts complicated expressions', function() {
    expect(evaluator.convertToPostfix(["5", "+", "5", "*", "10"])).toEqual(["5", "5", "10", "*", "+"]);
  });
 

});
