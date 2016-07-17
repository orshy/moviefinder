import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
    apiKey:string;
    
    constructor(private _jsonp:Jsonp) {
        this.apiKey = '2934ad3298a438371237ccb729fdf790';
        console.log('Daddy movie service running');
    }
    
    getPopular(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apiKey)
                .map(res => res.json());
    }
}