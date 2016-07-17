import {Component} from '@angular/core';
import {MoviesComponent} from './components/movies/movies.component';
import {MoviesService} from './services/movies.service';
import {JSONP_PROVIDERS} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    directives: [MoviesComponent],
    providers: [MoviesService, JSONP_PROVIDERS]
})
export class AppComponent {
    title = 'Movie Finder';
}
