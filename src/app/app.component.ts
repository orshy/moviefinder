import {Component} from '@angular/core';
import {MoviesComponent} from './components/movies/movies.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MoviesComponent]
})
export class AppComponent {
  title = 'app is working!';
}
