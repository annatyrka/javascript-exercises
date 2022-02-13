function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}

const pen1 = new Pen("marker", "blue", "$3")

// adding showPrice function to the constructor PEn
Pen.prototype.showPrice = function() {
    console.log(`The price of ${this.name} is ${this.price}`)
}


pen1.showPrice();


// converting the above to a class declaration

class Pen2 {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showPrice() {
        console.log(`The price of ${this.name} is ${this.price}`);
    }
}

const pen2 = new Pen2("pen", "yellow", "$2");
pen2.showPrice();

class Chair {

    static recliningAngle = true

    constructor(color, seatHeight, backSupport, headSupport, padding, armRests, seatSize, isMovable) {
        this.color = color;
        this.seatHeight = seatHeight;
        this.backSupport = true;
        this.headSupport = false;
        this.padding = '20 cm';
        this.armRests = true;
        this.seatSize = '30cm';
        this.isMovable = false;
        console.log(Chair.printDefaultProps()) //Usage of static method inside constructor
    }

    static logObjectProps() {
        console.dir(this)
    }

    static printDefaultProps(){
        console.log(`Reclining angle: ${this.recliningAngle}`)
    }

    adjustableHeight(){};
    adjustableAmgle(){};
    moveChair(){};
}

const newChair = new Chair("blue", "120 cm", true, false, "10 cm", true, "30cm", true);

console.dir("Chair Prototype", Chair);
console.dir("Chair Object", newChair);


// This is a class that inherits the functions and attributes from the superclass Chair.
// It uses the 'extends' keyword to allow the OfficeChair class to perform inheritance

class OfficeChair extends Chair {
    constructor(color, seatHeight,)  {
        super();
        this.type = "Office Chair";
        this.color = color;
        this.seatHeight = seatHeight;
        this.isMovable = true;
    
    }

    adjustableHeight(height) {
        if (height > this.seatHeight) {
            console.log(`Chair height changed to ${this.seatHeight}`)
        } else {
            console.log(`Height cannot be decreased below ${this.seatHeight}`)
        }
    }

    moveChair(x,y) {
        console.log(`Chair moved to co-ordinates = (${x}, ${y})`);
    }
}

const newOfficeChair = new OfficeChair('red', 40)

newOfficeChair.adjustableHeight(31)