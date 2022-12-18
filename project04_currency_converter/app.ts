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
        let con_PKR_USD = amount * 0.0045;
        let con_PKR_USD_f = con_PKR_USD.toFixed(4);
        console.log(`Your converted currency is USD ${con_PKR_USD_f}`);
        console.log("Conversion Rate : PKR 1 = USD 0.0045");
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        let con_PKR_PKR = amount * 1;
        let con_PKR_PKR_f = con_PKR_PKR.toFixed(2);
        console.log(`Your converted currency is PKR ${con_PKR_PKR_f}`);
        console.log("Conversion Rate : PKR 1 = PKR 1");
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "EUR - Euro") {
        let con_PKR_EUR = amount * 0.0041;
        let con_PKR_EUR_f = con_PKR_EUR.toFixed(4);
        console.log(`Your converted currency is EUR ${con_PKR_EUR_f}`);
        console.log("Conversion Rate : PKR 1 = EUR 0.0041");
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        let con_PKR_GBP = amount * 0.0036;
        let con_PKR_GBP_f = con_PKR_GBP.toFixed(4);
        console.log(`Your converted currency is GBP ${con_PKR_GBP_f}`);
        console.log("Conversion Rate : PKR 1 = GBP 0.0036");
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        let con_PKR_AUD = amount * 0.0066;
        let con_PKR_AUD_f = con_PKR_AUD.toFixed(4);
        console.log(`Your converted currency is AUD ${con_PKR_AUD_f}`);
        console.log("Conversion Rate : PKR 1 = AUD 0.0066");
    }
    else if (asnwers.Initial_Currency === "PKR - Pakistani Rupee" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        let con_PKR_CAD = amount * 0.0060
        let con_PKR_CAD_f = con_PKR_CAD.toFixed(4);
        console.log(`Your converted currency is CAD ${con_PKR_CAD_f}`);
        console.log("Conversion Rate : PKR 1 = CAD 0.0060");
    }
    /*------ EUR Conversion to rest of the currencies ---------- */
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "USD - US Dollar") {
        let con_EUR_USD = amount * 1;
        let con_EUR_USD_f = con_EUR_USD.toFixed(2);
        console.log(`Your converted currency is USD ${con_EUR_USD_f}`);
        console.log("Conversion Rate : EUR 1 = USD 1");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        let con_EUR_PKR = amount * 240;
        let con_EUR_PKR_f = con_EUR_PKR.toFixed(2);
        console.log(`Your converted currency is PKR ${con_EUR_PKR_f}`);
        console.log("Conversion Rate : EUR 1 = PKR 240");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "EUR - Euro") {
        let con_EUR_EUR = amount * 1;
        let con_EUR_EUR_f = con_EUR_EUR.toFixed(2);
        console.log(`Your converted currency is EUR ${con_EUR_EUR_f}`);
        console.log("Conversion Rate : EUR 1 = EUR 1");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        let con_EUR_GBP = amount * 0.87;
        let con_EUR_GBP_f = con_EUR_GBP.toFixed(2);
        console.log(`Your converted currency is GBP ${con_EUR_GBP_f}`);
        console.log("Conversion Rate : EUR 1 = GBP 0.87");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        let con_EUR_AUD = amount * 1.57;
        let con_EUR_AUD_f = con_EUR_AUD.toFixed(2);
        console.log(`Your converted currency is AUD ${con_EUR_AUD_f}`);
        console.log("Conversion Rate : EUR 1 = AUD 1.57");
    }
    else if (asnwers.Initial_Currency === "EUR - Euro" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        let con_EUR_CAD = amount * 1.45;
        let con_EUR_CAD_f = con_EUR_CAD.toFixed(2);
        console.log(`Your converted currency is CAD ${con_EUR_CAD_f}`);
        console.log("Conversion Rate : EUR 1 = CAD 1.45");
    }
    /*------ GBP Conversion to rest of the currencies ---------- */
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "USD - US Dollar") {
        let con_GBP_USD = amount * 1.21;
        let con_GBP_USD_f = con_GBP_USD.toFixed(2);
        console.log(`Your converted currency is USD ${con_GBP_USD_f}`);
        console.log("Conversion Rate : GBP 1 = USD 1.21");
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        let con_GBP_PKR = amount * 275;
        let con_GBP_PKR_f = con_GBP_PKR.toFixed(2);
        console.log(`Your converted currency is PKR ${con_GBP_PKR_f}`);
        console.log("Conversion Rate : GBP 1 = PKR 275");
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "EUR - Euro") {
        let con_GBP_EUR = amount * 1.14;
        let con_GBP_EUR_f = con_GBP_EUR.toFixed(2);
        console.log(`Your converted currency is EUR ${con_GBP_EUR_f}`);
        console.log("Conversion Rate : GBP 1 = EUR 1.14");
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        let con_GBP_GBP = amount * 1;
        let con_GBP_GBP_f = con_GBP_GBP.toFixed(2);
        console.log(`Your converted currency is GBP ${con_GBP_GBP_f}`);
        console.log("Conversion Rate : GBP 1 = GBP 1");
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        let con_GBP_AUD = amount * 1.81;
        let con_GBP_AUD_f = con_GBP_AUD.toFixed(2);
        console.log(`Your converted currency is AUD ${con_GBP_AUD_f}`);
        console.log("Conversion Rate : GBP 1 = AUD 1.81");
    }
    else if (asnwers.Initial_Currency === "GBP - UK Pound Sterling" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        let con_GBP_CAD = amount * 1.66;
        let con_GBP_CAD_f = con_GBP_CAD.toFixed(2);
        console.log(`Your converted currency is CAD ${con_GBP_CAD_f}`);
        console.log("Conversion Rate : GBP 1 = CAD 1.66");
    }
    /*------ AUD Conversion to rest of the currencies ---------- */
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "USD - US Dollar") {
        let con_AUD_USD = amount * 0.67;
        let con_AUD_USD_f = con_AUD_USD.toFixed(2);
        console.log(`Your converted currency is USD ${con_AUD_USD_f}`);
        console.log("Conversion Rate : AUD 1 = USD 0.67");
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
        let con_AUD_PKR = amount * 150;
        let con_AUD_PKR_f = con_AUD_PKR.toFixed(2);
        console.log(`Your converted currency is PKR ${con_AUD_PKR_f}`);
        console.log("Conversion Rate : AUD 1 = PKR 150");
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "EUR - Euro") {
        let con_AUD_EUR = amount * 0.63;
        let con_AUD_EUR_f = con_AUD_EUR.toFixed(2);
        console.log(`Your converted currency is EUR ${con_AUD_EUR_f}`);
        console.log("Conversion Rate : AUD 1 = EUR 0.63");
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
        let con_AUD_GBP = amount * 0.55;
        let con_AUD_GBP_f = con_AUD_GBP.toFixed(2);
        console.log(`Your converted currency is GBP ${con_AUD_GBP_f}`);
        console.log("Conversion Rate : AUD 1 = GBP 0.55");
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
        let con_AUD_AUD = amount * 1;
        let con_AUD_AUD_f = con_AUD_AUD.toFixed(2);
        console.log(`Your converted currency is AUD ${con_AUD_AUD_f}`);
        console.log("Conversion Rate : AUD 1 = AUD 1");
    }
    else if (asnwers.Initial_Currency === "AUD - Australian Dollar" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
        let con_AUD_CAD = amount * 0.91;
        let con_AUD_CAD_f = con_AUD_CAD.toFixed(2);
        console.log(`Your converted currency is CAD ${con_AUD_CAD_f}`);
        console.log("Conversion Rate : AUD 1 = CAD 0.91");
    }
     /*------ CAD Conversion to rest of the currencies ---------- */
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "USD - US Dollar") {
        let con_CAD_USD = amount * 0.72;
        let con_CAD_USD_f = con_CAD_USD.toFixed(2);
        console.log(`Your converted currency is USD ${con_CAD_USD_f}`);
        console.log("Conversion Rate : CAD 1 = USD 0.72");
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "PKR - Pakistani Rupee") {
         let con_CAD_PKR = amount * 165;
        let con_CAD_PKR_f = con_CAD_PKR.toFixed(2);
        console.log(`Your converted currency is PKR ${con_CAD_PKR_f}`);
        console.log("Conversion Rate : CAD 1 = PKR 165");
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "EUR - Euro") {
         let con_CAD_EUR = amount * 0.68;
        let con_CAD_EUR_f = con_CAD_EUR.toFixed(2);
        console.log(`Your converted currency is EUR ${con_CAD_EUR_f}`);
        console.log("Conversion Rate : CAD 1 = EUR 0.68");
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "GBP - UK Pound Sterling") {
         let con_CAD_GBP = amount * 0.59;
        let con_CAD_GBP_f = con_CAD_GBP.toFixed(2);
        console.log(`Your converted currency is GBP ${con_CAD_GBP_f}`);
        console.log("Conversion Rate : CAD 1 = GBP 0.59");
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "AUD - Australian Dollar") {
         let con_CAD_AUD = amount * 1.08;
        let con_CAD_AUD_f = con_CAD_AUD.toFixed(2);
        console.log(`Your converted currency is AUD ${con_CAD_AUD_f}`);
        console.log("Conversion Rate : CAD 1 = AUD 1.08");
     }
     else if (asnwers.Initial_Currency === "CAD - Canadian Dollar" && asnwers.Convert_Currency === "CAD - Canadian Dollar") {
         let con_CAD_CAD = amount * 1;
        let con_CAD_CAD_f = con_CAD_CAD.toFixed(2);
        console.log(`Your converted currency is CAD ${con_CAD_CAD_f}`);
        console.log("Conversion Rate : CAD 1 = CAD 1");
     }
     else {
        console.log("Something went wrong");
     }
  
})