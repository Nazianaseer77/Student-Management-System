import inquirer from "inquirer";

const randomNumber: number = Math.floor(10000 + Math.random()* 90000);

let myBalance: number = 0

let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type:"input",
            message:"Enter students name:",
            validate: function (value){
                if (value.trim()!==""){
                    return true;
            
                }
                return "please enter a non-empty value."  

            },
        },
        {
            name: "courses",
            type:"list",
            message:"select the course to enrolled.",
            choices:["HTML","CSS","typescript","javascript","python"]
        }
    ]
);

const tutionfee:{[key:string]:number}={
    "HTML": 3000,
    "CSS": 4000,
    "typescript": 6000,
    "javascript": 8000,
    "python": 10000,

};

console.log(`\ntutionfees: ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"select payment method",
        choices:["Bank transfer","easypaisa","jazzcash"],
    },
    {
        name:"amount",
        type:"input",
        message:"transfer Money",
        validate:function(value){
            if(value.trim()!==""){
                return true;
            }
            return "please enter a non-empty value.";

        }
    }
]);

console.log(`\nyou select payment method ${paymentType.payment}\n`);

const tutionfees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if(tutionfees === paymentAmount){
    console.log(`congratulation, you have succesfully enrolledin ${answer.courses}.\n`);

   let ans = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"what would you like to do next?",
        choices:["view status","Exit"],

    }
   ]) 

   if(ans.select === "view status"){

    console.log("\n********status*********\n");
    console.log(`student name: ${answer.students}`);
    console.log(`student ID: ${randomNumber}`);
    console.log(`course: ${answer.courses}`);
    console.log(`Tution fees paid: ${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);
   } else{
    console.log("\nExiting student management system\n");
   }
}else{
    console.log("invalid amount due to course\n");
    
        
    }

    


