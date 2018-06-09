if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.seriesPage = {
    data: function() {
        return {
            filterName: '',
            filterGenre: '',
            filterPlateformeDiffusion: '',
            filterSalle: '',
            filterNote: '',
            series:[], 
        };
    },
    methods: {
        filteredList: function (series,filterName,filterGenre,filterPlateformeDiffusion,filterSalle,filterNote) {
            /*if (!filterName && !filterGenre && !filterPlateformeDiffusion && !filterNote && !filterSalle 
                || document.getElementById("listBoxGenre").selectedIndex==0 
                || document.getElementById("listBoxPlateformeDiffusion").selectedIndex==0) {
                return  [ ... series];
            }
            if(filterName){
                return series.filter((serie) => {return serie.name.match(new RegExp(filterName, 'i'));})
            }
            if(filterGenre){
                return series.filter((serie) => {return serie.genre.match(genreSelected());})
            }
            if(filterSalle){
                return series.filter((serie) => {return serie.salle.match(salleChecked());})
            }
            if(filterPlateformeDiffusion){
                return series.filter((serie) => {return serie.plateformeDiffusion.match(plateformeDiffusionSelected());})
            }
            if(filterNote){
                return series.filter((serie) => {return serie.note.match(noteSelected());})
            }*/
            return  [ ... series];
        },
    },
    created: async function() {
        let fetchResult
        fetchResult = await fetch('../data/series/series.json');
        if (fetchResult.status == 200) {
            this.series = await fetchResult.json();
        }
    },
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="serie" v-for="serie in filteredList(series,filterName,filterGenre,filterPlateformeDiffusion,filterSalle,filterNote)"">
                    <series-list-item 
                        v-bind:id='serie.id'
                        v-bind:name='serie.name'
                        v-bind:img='serie.img'>
                    </series-list-item>
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