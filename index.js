

// Start by identifying what the bank account will contain,in our case its name and balance.
// Add the method for deposit.
// Increase the balance by the amount of deposit
// From the increased balanced you will get the new balance.

function BankAccount(name,balance){
    this.name=name;
    this.balance=balance;
    this.deposit=function(amount){
        this.balance+=balanceincrease;
        return `The user whose name is ${this.name} deposited this ${amount} and has this as the new balance ${this.balance}`;
    }
};
const BankAccount={name:'Alice',balance:2000,deposit:1000};
console.log();




i

// Start by creating an empty task list 
// The empty task list will be for pushing the work that you will be able to print.
// Also create the lists for add to know the tasks to add and remove
// And the list tasks to know the available tasks to do.
// Now from the list of tasks you can add or remove tasks.
const useraccount1 = new BankAccount("James", 400),
const useraccount2 = new BankAccount("Joy", 350),
const useraccount3 = new BankAccount("Rose", 2000),



const taskList = {
    tasks: [],

    addTask(task) {
        this.tasks.push(task);
        console.log(`Task "${task}" added.`);
    },    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Task "${task}" removed.`);
        } else {
            console.log(`Task "${task}" not found.`);
        }
    },

    listTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            console.log("Current Tasks:");
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
            }
        }};


taskList.addTask("visit the park");
taskList.addTask("Do shopping");
taskList.addTask("wash clothes");

taskList.removeTask("wash clothes");
taskList.listTasks();


// Start by identifying the students attributes(name and scores)
// To get the average of the scores get total scores of the student then divide by throw.
// If the average of the students scores is more than 50,then the students would have passed but if less then the students would have failed.
function studentQualities(name, scores) {
    return {
        name: name,
        scores: scores,

        getAverage() {
            if (this.scores.length === 0) return 0;
            const total = this.scores.reduce((sum, score) => sum + score, 0);
            return total / this.scores.length;
        },

        hasPassed() {
            return this.getAverage() >= 50;
        }
    };
}

const studentQualities=("Alice", [40, 55, 60]);
                       ("Ben", [30, 40, 35]);

console.log(`${Alice.name} - Average: ${Alice.getAverage()}`);      
console.log(`${Ben.name} - Average: ${Ben.hasPassed()}`);        



// Create a ShoppingCart object with a property items (an array of item objects with name and price). Add a method addItem(item) to push new items, and a method getTotal() that returns the total cost of all items in the cart. Add 3 items and print the final total.


// Create a Movie constructor that takes title, year, and rating. Add a method isClassic() that returns true if the year is before 2000, and a method recommend() that returns a string like "Highly recommended!" if rating is above 8. Create at least 3 movies and call these methods on each.




                 