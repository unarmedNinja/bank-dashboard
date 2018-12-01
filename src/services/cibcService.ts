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
  

}