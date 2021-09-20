// TEORY
// What is inharence?
// When a function is executed with new, what steps does it do?
{
    // 1) A new empty object is created and assigned to this.
    // 2) The function body executes. Usually it modifies this, adds new properties to it.
    // 3) The value of this is returned.
}


//1 - What would we see in console
{
    function User(name) {
        this.name = name;
        this.isAdmin = false;
        return this.isAdmin = true;
    }

    const Anna = User('Anna');
    const Bob = new User('Bob');

    // console.log(Anna);
    // console.log(Bob);
}

//2 - What would we see in console
{
    const Admin = (name) => {
        this.name = name;
        this.isAdmin = true;

        return this.isAdmin = false
    }

    // console.log(Admin('Nansy'));
    // console.log(new Admin('Sid'));

}

//3 - What would we see in console
{
    function User() {
        this.name = "Bolik";
        this.isAdmin = false;
        return "Lelik";
    }
    const gnom_first = new User;
    const gnom_second = new User();
    // console.log(gnom_first);
    // console.log(gnom_second);
}

//4 - (new.target) What would we see in console
{
    function User() {
        return new.target;
    }


    // console.log(User()); // без "new":
    // console.log(new User()); // с "new":
}

//5 - create function User, having name argument, which can be called with and without new
{ //Answer
    function User(name) {
        if (!new.target) { // в случае, если вы вызвали без оператора new
            return new User(name); // ...добавим оператор new за вас
        }

        this.name = name;
    }
}

//THEORY
//What can be returned in constructor functions?

//6 - create functions A and B so that new A() === new B()
{ //Answer
    let obj = {};

    function A() { return obj; }
    function B() { return obj; }

    // console.log(new A() === new B());
}

//7 - create functional inherence
{ //Answer
    //create User function, which has staticProperty and publicProperty
    {
        function User(params) {
            // локальные переменные и функции доступны только внутри Machine
            var staticProperty = 'I am static';

            // публичные доступны снаружи
            this.publicProperty = function () {
                console.log('I am public ' + staticProperty);
                return 'Users';
            }
        }

    }
    //create an Admin function, which has functional inheritance from User
    {
        function Admin() {
            User.apply(this, arguments);
            this.adminsProperty = "Only admin can do it";
            // expand publicProperty of User for Admin
            {
                var parentProperty = this.publicProperty;
                this.publicProperty = function (args) {
                    parentProperty.apply(this, args);
                    return ('Something from Admin');

                };
            }
        }
    }


    // console.log(new User);
    // console.log((new User).publicProperty());
    // console.log(new Admin);
    // console.log((new Admin).publicProperty());
}

//THEORY 
//what is CLASS in JS? Prove it.
{ //Answer
    class User {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log(this.name);
        }
    }
    //console.log(typeof User); // function
}


//Are there the differences between prototype inheritance and class inheritance
{ //Answer
    class UserClass {
        constructor(name) {
            this.name = name;
            //this.parametres = 015 + 026;
        }
        sayHi() {
            console.log('I am ' + this.name);
        }
    }

    function UserFunc(name) {
        this.name = name;
        // this.parametres = 015 + 026;
    }

    UserFunc.prototype.sayHi = function () {
        console.log('I am ' + this.name);
    }



    const ceddy = new UserClass('Ceddy');
    const freddy = new UserFunc('Freddy');

    { //1 about label
        //First, a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.
        //console.log(UserClass('Ceddy'));
        //console.log(UserFunc('Freddy'));
    }
    { //2 about for..in
        //Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
        //That’s good, because if we for..in over an object, we usually don’t want its class methods.

        for (let prop in ceddy) {
            //console.log("ceddy's property " + prop);
        }
        for (let prop in freddy) {
            //console.log("feddy's property " + prop);
        }
    }
    { //3 about inside the code
        // Classes always use strict. All code inside the class construct is automatically in strict mode.
        // uncomment 149 and 158 
    }

}