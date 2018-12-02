import { inject, injectable } from 'inversify';
//import { request } from "request";
import * as request from "request-promise-native";

@injectable()
export class CibcService {

    uri : any;
    header: any;
    token: any;
    requestoptions: any;
    key: any;
    payRequest;

    constructor(){
        this.uri = "https://api.azureminilab.com/customers/1/accounts";
        this.header = "Ocp-Apim-Subscription-Key";
        this.token = "amlpa55w0rd";
        this.key = "8f232c2eec134accb42082a6990838ee";

        this.requestoptions = {
            url: this.uri,
            headers: {
              'Ocp-Apim-Subscription-Key': this.key
            }
          };

        this.payRequest = {
            url : "https://test-api.adp.com/payroll/v1/workers/G4O73G9Z62SL2NFM/pay-statements?numberoflastpaydates=26"
        }
    }

    callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("info:", body);
      var info = JSON.parse(body);
      console.log(info.stargazers_count + " Stars");
      console.log(info.forks_count + " Forks");
      return info;
    }
    else {
        console.log("error: ", error);
        return error;
    }
  }

   async call(){
    //request(this.requestoptions, this.callback);
    const result =  await request.get(this.requestoptions, this.callback);
    return result;
   }
  
   async getPay(){
    //request(this.requestoptions, this.callback);
    const result =  await request.get(this.payRequest, this.callback);
    return result;
   }

   getIncome() {
       var data = [
        {
          "line": 150,
          "description": "Total income",
          "amount": 63890
        },
        {
          "line": 150,
          "description": "Deduction from total invomr",
          "amount": 17356
        },
        {
          "line": 236,
          "description": "Net income",
          "amount": 46534
        },
        {
          "line": 260,
          "description": "Taxable income",
          "amount": 46534
        },
        {
          "line": 350,
          "description": "Total federal non-refundable tax credit",
          "amount": 2965
        },
        {
          "line": 6150,
          "description": "Total British Columbia non-refundable tax credit",
          "amount": 1119
        },
        {
          "line": 420,
          "description": "Net federal tax",
          "amount": 3666.16
        },
        {
          "line": 421,
          "description": "CPP contribution payable",
          "amount": 4172.4
        },
        {
          "line": 428,
          "description": "Net British Columbia tax",
          "amount": 1094.42
        },
        {
          "line": 435,
          "description": "Total payable",
          "amount": 9461.98
        },
        {
          "line": 437,
          "description": "Total income tax deducted",
          "amount": 0
        },
        {
          "line": 476,
          "description": "Tax paid by installments",
          "amount": "13,000.00"
        },
        {
          "line": 482,
          "description": "Total credits",
          "amount": 13000
        },
        {
          "line": 482,
          "description": "Total payable minus total credit",
          "amount": 3583.02
        },
        {
          "line": 482,
          "description": "Balance from this assessment",
          "amount": 3583.02
        },
        {
          "line": 482,
          "description": "Refund transfer",
          "amount": 3583.02
        }
      ];

       return new Promise<Object[]>((resolve, reject) => {
            resolve(data);
       });
   }

}