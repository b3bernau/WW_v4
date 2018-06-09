if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.filters = {
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
            if (!filterName && !filterGenre && !filterPlateformeDiffusion && !filterNote && !filterSalle) {
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
            }
            
        },
        handleEvent () {
          console.log("EVENEMENT RECU")
        }
    },
    template: `
        <div>
            <div class="form-group">
                <label id="listBoxText">Genre :</label>
                <select class="form-control" @input="handleEvent()" id="listBoxGenre" v-model="filterGenre" onChange="genreSelected()">
                    <option>Action</option>
                    <option>Animation</option>
                    <option>Aventure</option>
                    <option>Biographique</option>
                    <option>Catastrophe</option>
                    <option>Comédie</option>
                    <option>Documentaire</option>
                    <option>Dramatique</option>
                    <option>Espionnage</option>
                    <option>Fantastique</option>
                    <option>Historique</option>
                    <option>Horreur</option>
                    <option>Musical</option>
                    <option>Policier</option>
                    <option>Romantique</option>
                    <option>Science fiction</option>
                    <option>Thriller</option>
                    <option>Western</option>
                </select>
            </div>
            <div class="form-group">
                <label id="listBoxText">Plateforme de diffusion :</label>
                <select class="form-control" id="listBoxPlateformeDiffusion" selectedIndex=0 v-model="filterPlateformeDiffusion" onChange="plateformeDiffusionSelected()">
                    <option>Netflix</option>
                    <option>OCS</option>
                    <option>Amazon Prime Vidéos</option>
                    <option>SFR Play</option>
                    <option>Canal Play</option>
                    <option>Itunes</option>
                    <option>Google Play Movies</option>
                </select>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="checkBoxVF" onClick="VFChecked()">
              <label class="form-check-label" for="checkBoxVF">VF</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="checkBoxVOSTFR" onClick="VOSTFRChecked()">
              <label class="form-check-label" for="checkBoxVOSTFR">VOSTFR</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="checkBoxEnSalle" v-model="filterSalle" onClick="salleChecked()">
              <label class="form-check-label" for="checkBoxEnSalle">En salle</label>
            </div>
            <div class="form-group">
                <label for="formControlRange">Note (★)</label>
                <input type="range" class="form-control-range" value="1" min="0" max="5" step="1" list="tickmarks" id="noteRange" v-model="filterNote" onChange="noteSelected()">
                <datalist id="tickmarks">
                  <option value="0"></option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                </datalist>
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
