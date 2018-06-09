if (!window.VueWW) {
    window.VueWW = {};
}

window.VueWW.seriesDetail = {
    data: function() {
	    return {  
		    serie: {}, 
		    mainImg: null,
		};
	},
    computed: {
	    imgUrl: function() {
	        if (!this.serie.img) {
	            return;
	        }
	        return `../../data${this.serie.img}`;
	    },
	    labelUrl: function() {
            if (!this.serie.label) {
                return;
            }
            return `../../data/${this.serie.label}`;
        }
	},
	mounted: function() {
	    this.getSerieDetail(this.$route.params.id);
	},
	watch: {
    	'$route' (to, from) {
        	this.getSerieDetail(to.params.id);
    	}
  	},
  	methods: {
        getSerieDetail: async function(id) {
            let fetchResult
            fetchResult = await fetch(`../data/series/details/${id}.json`);
            if (fetchResult.status == 200) {
                this.serie = await fetchResult.json();
            }
            this.mainImg = `../../data/series/${this.serie.img}`;
        },
        setImage: function(img) { 
            this.mainImg = `../../data/series/${img}`;
        },
    },
    template:  `
		<div v-bind:id="serie.id" class="detail clearfix">
		    <a href="#/series">
		    	<img class="pull-right back" src="../../img/back.png">
		    </a>
		    <h1 class="name">{{ serie.name }}</h1>
		    <img class="pull-right img" v-bind:src="mainImg">
		    <p class="description">{{ serie.description }}</p>

		    <ul class="specs">
			    <li>
			        <dl>
				        <dt>Année</dt>
				        <dd>{{serie.year}}</dd>
			        </dl>
			    </li>
			    <li>
			        <dl>
				        <dt>Durée</dt>
				        <dd>{{serie.duree}}</dd>
			        </dl>
			    </li>
			    <li>
			        <dl>
				        <dt>Age</dt>
				        <dd>{{serie.age}}</dd>
			        </dl>
			    </li>
			    <li>
			        <dl>
				        <dt>Genre</dt>
				        <dd>{{serie.genre}}</dd>
			        </dl>
			    </li>
			    <li>
			        <dl>
				        <dt>En salle</dt>
				        <dd>{{serie.salle}}</dd>
			        </dl>
			    </li>
			    <li>
			        <dl>
				        <dt>Plateforme de diffusion</dt>
				        <dd>{{serie.plateformeDiffusion}}</dd>
			        </dl>
			    </li>
			    <li>
			        <dl>
				        <dt>Note</dt>
				        <dd>{{serie.note}} étoile(s)</dd>
			        </dl>
			    </li>
		    </ul>
		</div>
    `,
};