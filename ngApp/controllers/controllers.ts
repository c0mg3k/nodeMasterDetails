namespace moviesbasic.Controllers {

    let movies = [
      {id: 1, title: `Star Wars: A New Hope`, director: `Lucas`},
      {id: 2, title: `The Dark Knight`, director: `Nolan`},
      {id: 3, title: `Jurassic Park`, director: `Spielberg`}
    ]
    export class HomeController {
        public movies;

        constructor(){
            this.movies = movies;
        }
    }

    export class MovieDetailsController {
        public movie;

        constructor(private $stateParams: ng.ui.IStateParamsService){
            this.movie = movies.filter((m)=>m.id == this.$stateParams[`id`])[0];
        }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
