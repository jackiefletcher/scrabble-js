describe("scrabble", function() {
  it("will return the score of a letter", function() {
    expect(scrabble("a")).to.equal(1);
  });

  it("will return the score of a letter", function() {
    expect(scrabble("A")).to.equal(1);
  });

  it("will return the score of a letter", function() {
    expect(scrabble("s")).to.equal(1);
  });

  it("will return the score of a word", function() {
    expect(scrabble("sun")).to.equal(3);
  });

  it("will return the score of a word", function() {
    expect(scrabble("gingivitis")).to.equal(15);
  });


});
