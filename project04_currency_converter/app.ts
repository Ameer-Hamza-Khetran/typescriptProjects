import inquirer from "inquirer";
// type currency = number;
// let usd, euro, pound, pkr;

let questions = [
    {
        name: "Initial_Currency",
        type: "list",
        message: "Select the currency you want to convert",
        choices: ["USD - US Dollar", "PKR - Pakistani Rupee", "EUR - Euro", "GBP - UK Pound Sterling", "AUD - Australian Dollar", "CAD - Canadian Dollar"]
    },
    {
        name: "Amount",
        type: "input",
        message: "Enter the amount you want to convert",
        validate: ((value:any) => {
            if (isNaN(value) || value === "" || value <= 0) {
                console.log("Please enter a valid amount")
                return false;
            }
            return true;
        })
    },
    {
        name: "Convert_Currency",
        type: "list",
        message: "Select the currency you want to convert to",
        choices: ["USD - US Dollar", "PKR - Pakistani Rupee", "EUR - Euro", "GBP - UK Pound Sterling", "AUD - Australian Dollar", "CAD - Canadian Dollar"]
    }
]

inquirer.prompt(questions)

.then((asnwers) => {
    
    let amount = Number(asnwers.Amount);
    
    /*------ USD Conversion to rest of the currencies ---------- */
    if (asnwers.Initial_Currency === "USD - US Dollar" && asnwers.Convert_Currency === "USD - US Dollar") {
        let con_USD_USD = amount * 1;
        let con_USD_USD_f = con_USD_USD.toFixed(2);
        console.log(`Your converted currency is USD ${con_USD_USD_f}`);
        console.log("Conversion Rate : USD 1 = USD 1");
    }
    else if (asnwers.Initial_Currency === "USD - US Dollar" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        let con_USD_PKR = amount * 220;
        let con_USD_PKR_f = con_USD_PKR.toFixed(2);
        console.log(`Your converted currency is PKR ${con_USD_PKR_f}`);
        console.log("Conversion Rate : USD 1 = PKR 220");
    }
    else if (asnwers.Initial_Currency === "USD - US Dollar" && asnwers.Convert_Currency === "EUR - Euro") {
        let con_USD_EUR = amount * 1;
        let con_USD_EUR_f = con_USD_EUR.toFixed(2);
        console.log(`Your converted currency is EUR ${con_USD_EUR_f}`);
        console.log("Conversion Rate : USD 1 = EUR 1");
    }
    else if (asnwers.Initial_Currency === "USD - US Dollar" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        let con_USD_GBP = amount * 0.82;
        let con_USD_GBP_f = con_USD_GBP.toFixed(2);
        console.log(`Your converted currency is GBP ${con_USD_GBP_f}`);
        console.log("Conversion Rate : USD 1 = GBP 0.82");
    }
    else if (asnwers.Initial_Currency === "USD - US Dollar" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        let con_USD_AUD = amount * 1.49;
        let con_USD_AUD_f = con_USD_AUD.toFixed(2);
        console.log(`Your converted currency is AUD ${con_USD_AUD_f}`);
        console.log("Conversion Rate : USD 1 = AUD 1.49");
    }
    else if (asnwers.Initial_Currency === "USD - US Dollar" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        let con_USD_CAD = amount * 1.37;
        let con_USD_CAD_f = con_USD_CAD.toFixed(2);
        console.log(`Your converted currency is CAD ${con_USD_CAD_f}`);
        console.log("Conversion Rate : USD 1 = CAD 1.37");
    }
    /*------ PKR Conversion to rest of the currencies ---------- */
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "USD - US Dollar") {
        
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "EUR - Euro") {
        
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        
    }
    /*------ EUR Conversion to rest of the currencies ---------- */
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "USD - US Dollar") {
        let con_EUR_USD = amount * 1.37;
        let con_EUR_USD_f = con_EUR_USD.toFixed(2);
        console.log(`Your converted currency is USD ${con_EUR_USD_f}`);
        console.log("Conversion Rate : EUR 1 = USD 1.37");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        let con_EUR_PKR = amount * 1.37;
        let con_EUR_PKR_f = con_EUR_PKR.toFixed(2);
        console.log(`Your converted currency is PKR ${con_EUR_PKR_f}`);
        console.log("Conversion Rate : EUR 1 = PKR 1.37");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "EUR - Euro") {
        let con_EUR_EUR = amount * 1.37;
        let con_EUR_EUR_f = con_EUR_EUR.toFixed(2);
        console.log(`Your converted currency is EUR ${con_EUR_EUR_f}`);
        console.log("Conversion Rate : EUR 1 = EUR 1.37");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        let con_EUR_GBP = amount * 1.37;
        let con_EUR_GBP_f = con_EUR_GBP.toFixed(2);
        console.log(`Your converted currency is GBP ${con_EUR_GBP_f}`);
        console.log("Conversion Rate : EUR 1 = GBP 1.37");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        let con_EUR_AUD = amount * 1.37;
        let con_EUR_AUD_f = con_EUR_AUD.toFixed(2);
        console.log(`Your converted currency is AUD ${con_EUR_AUD_f}`);
        console.log("Conversion Rate : EUR 1 = AUD 1.37");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        let con_EUR_CAD = amount * 1.37;
        let con_EUR_CAD_f = con_EUR_CAD.toFixed(2);
        console.log(`Your converted currency is CAD ${con_EUR_CAD_f}`);
        console.log("Conversion Rate : EUR 1 = CAD 1.37");
    }
    /*------ GBP Conversion to rest of the currencies ---------- */
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "USD - US Dollar") {
        
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "EUR - Euro") {
        
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        
    }
    /*------ AUD Conversion to rest of the currencies ---------- */
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "USD - US Dollar") {
        
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "EUR - Euro") {
        
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        
    }
     /*------ CAD Conversion to rest of the currencies ---------- */
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "USD - US Dollar") {
        
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
         
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "EUR - Euro") {
         
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
         
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
         
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
         
     }
     else {
        console.log("Something went wrong");
     }
  
})