import {Router, Request, Response, NextFunction} from 'express';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam, httpPut } from "inversify-express-utils";
import { injectable, inject } from "inversify";
import TYPES from '../config/appTypes';
import { CibcService } from "../services/cibcService";

@controller("/cibc")
export class CibcController implements interfaces.Controller {

    //constructor( @inject("FooService") private fooService: FooService ) {}
    constructor( @inject(TYPES.CibcService) private cibcService: CibcService) { }
    

    @httpGet("/accounts")
    private index(req: Request, res: Response, next: NextFunction) {
        
        //res.send([{}]);
        //return this.fooService.get(req.query.id);
        return this.cibcService.call();
    }
}