var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return [...cats, name]; 
}

function prependCat(name) {
    return [name, ...cats]; 
}

function removeLastCat() {
    return cats.slice(0, -1); 
}

function removeFirstCat() {
    return cats.slice(1); 
}

describe('cats', function() {
    beforeEach(function() {
        cats = ["Milo", "Otis", "Garfield"];
    });

    describe('destructivelyAppendCat(name)', function() {
        it('appends a cat to the end of the cats array', function() {
            destructivelyAppendCat('Ralph');
            expect(cats).to.deep.equal(["Milo", "Otis", "Garfield", "Ralph"]);
        });
    });

    describe('destructivelyPrependCat(name)', function() {
        it('prepends a cat to the beginning of the cats array', function() {
            destructivelyPrependCat('Belle');
            expect(cats).to.deep.equal(['Belle', 'Milo', 'Otis', 'Garfield']);
        });
    });

    describe('destructivelyRemoveLastCat()', function() {
        it('removes the last cat from the cats array', function() {
            destructivelyRemoveLastCat();
            expect(cats).to.deep.equal(['Milo', 'Otis']);
        });
    });

    describe('destructivelyRemoveFirstCat()', function() {
        it('removes the first cat from the cats array', function() {
            destructivelyRemoveFirstCat();
            expect(cats).to.deep.equal(['Otis', 'Garfield']);
        });
    });

    describe('appendCat(name)', function() {
        it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function() {
            const newCats = appendCat('Belle');
            expect(cats).to.deep.equal(["Milo", "Otis", "Garfield"]);
            expect(newCats).to.deep.equal(["Milo", "Otis", "Garfield", "Belle"]);
        });
    });

    describe('prependCat(name)', function() {
        it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function() {
            const newCats = prependCat('Belle');
            expect(cats).to.deep.equal(["Milo", "Otis", "Garfield"]);
            expect(newCats).to.deep.equal(['Belle', 'Milo', 'Otis', 'Garfield']);
        });
    });

    describe('removeLastCat()', function() {
        it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function() {
            const newCats = removeLastCat();
            expect(cats).to.deep.equal(["Milo", "Otis", "Garfield"]);
            expect(newCats).to.deep.equal(["Milo", "Otis"]);
        });
    });

    describe('removeFirstCat()', function() {
        it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function() {
            const newCats = removeFirstCat();
            expect(cats).to.deep.equal(["Milo", "Otis", "Garfield"]);
            expect(newCats).to.deep.equal(["Otis", "Garfield"]);
        });
    });
});
