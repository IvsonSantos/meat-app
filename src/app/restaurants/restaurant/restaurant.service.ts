import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant.model";
import { Http } from "@angular/http";
import { MET_API } from "app/app.api";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErrorHandler } from "app/app.error-handler";

// vamos receber um outro servico
@Injectable()
export class RestaurantService {

    constructor(
        private http: Http
    ) {

    }

    restaurants(): Observable<Restaurant[]> {
        // usamos o MAP para pegar apenas o objeto JSON e nao toda o RESPONSE
        return this.http.get(`${MET_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }


}