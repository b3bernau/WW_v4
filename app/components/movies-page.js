if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.moviesPage = {
    data: function() {
        return {
            filterName: '',
            filterGenre: '',
            filterPlateformeDiffusion: '',
            filterSalle: '',
            filterNote: '',
            movies:[], 
        };
    },
    methods: {
        filteredList: function (movies,filterName,filterGenre,filterPlateformeDiffusion,filterSalle,filterNote) {
            /*if (!filterName && !filterGenre && !filterPlateformeDiffusion && !filterNote && !filterSalle 
                || document.getElementById("listBoxGenre").selectedIndex==0 
                || document.getElementById("listBoxPlateformeDiffusion").selectedIndex==0) {
                return  [ ... movies];
            }
            if(filterName){
                return movies.filter((movie) => {return movie.name.match(new RegExp(filterName, 'i'));})
            }
            if(filterGenre){
                return movies.filter((movie) => {return movie.genre.match(genreSelected());})
            }
            if(filterSalle){
                return movies.filter((movie) => {return movie.salle.match(salleChecked());})
            }
            if(filterPlateformeDiffusion){
                return movies.filter((movie) => {return movie.plateformeDiffusion.match(plateformeDiffusionSelected());})
            }
            if(filterNote){
                return movies.filter((movie) => {return movie.note.match(noteSelected());})
            }*/
            return  [ ... movies];
        },
    },
    created: async function() {
        let fetchResult
        fetchResult = await fetch('../data/movies/movies.json');
        if (fetchResult.status == 200) {
            this.movies = await fetchResult.json();
        }
    },
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="movie" v-for="movie in filteredList(movies,filterName,filterGenre,filterPlateformeDiffusion,filterSalle,filterNote)"">
                    <movies-list-item 
                        v-bind:id='movie.id'
                        v-bind:name='movie.name'
                        v-bind:img='movie.img'>
                    </movies-list-item>
                </div>
            </div>
        </div>
    </div> 
    `
}; 

// FONCTIONS -----------------------------------------------------------------------

function genreSelected () {
    genre = document.getElementById("listBoxGenre");
    return genre.value;
}
function plateformeDiffusionSelected () {
    plateformeDiffusion = document.getElementById("listBoxPlateformeDiffusion");
    return plateformeDiffusion.value;
}
function salleChecked () {
    salle = document.getElementById("checkBoxEnSalle");
    if(salle.checked == true){
        return "Oui";
    }
    else if (salle.checked == false){
        return "Non";
    }  
}
function VFChecked () {
    if(checkBoxVF.checked == true){
        console.log("VF");
    } else {
        console.log("Not VF")
    }
}
function VOSTFRChecked () {
    if(checkBoxVOSTFR.checked == true){
        console.log("VOSTFR");
    } else {
        console.log("Not VOSTFR")
    }
}
function noteSelected () {
    note = document.getElementById("noteRange");
    return note.value;
}