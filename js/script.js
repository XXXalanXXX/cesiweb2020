
Vue.component('projet-item', {
  props:['projet'],
  template: `
    <div class="projet">
      <img :src="projet.src" alt="#"/>
      <div>
        <img :src="projet.srclogo" alt="#"/>
        <div>
          <H1 :class="projet.classe">{{projet.titre}}</H1>
          <p>{{projet.text}}</p>
        </div>
      </div>
    </div>
  `
})


var app_burger_menu = new Vue({
  el: '#app_burger_menu',
  data: {
    isActive:'False'
  },
  methods:{
    cloak: function(){
      if(this.isActive=='True'){
        this.isActive='False'
      }
      else this.isActive='True'
    }
  }
})

var app_panel = new Vue({
  el: '#app_panel',
  data: {
    typeProjet: [
      { id: 0,classe:"vclair",titre:"Tertiaire",srclogo:"img/pictoLogosVertClair.png",src:"img/TERTIAIRE.jpg", text: "Des projets personnalisés à l'image de l'entreprise..." },
      { id: 1,classe:"vert",titre:"Associations",srclogo:"img/pictoLogosVert.png",src:"img/ASSOCIATIONS.jpg", text: "Des projets rassembleurs pour se réunir, s'exprimer..." },
      { id: 2,classe:"marron",titre:"Crèches scolaire",srclogo:"img/pictoLogosMarron.png",src:"img/CRECHES-SCOLAIRE.jpg", text: "Des projets agréables à vivre pour accueillir nos enfants dans les meilleurs conditions..." },
      { id: 3,classe:"vclair",titre:"Bailleurs sociaux",srclogo:"img/pictoLogosVertClair.png",src:"img/BAILLEURS-SOCIAUX.jpg", text: "Des projets conceptualisés pour aborder différemment la rénovation des immeubles..." },
      { id: 4,classe:"marron",titre:"Location",srclogo:"img/pictoLogosMarron.png",src:"img/loca-2.jpg", text: "Des produits spécifiques à hautes performances dédiés aux besoins temporaires ." },
      { id: 4,classe:"vert",titre:"Agricole",srclogo:"img/pictoLogosVert.png",src:"img/SECTEUR-AGRICOLE.jpg", text: "Des projets cohérents, dans une approche globale de respect de la terre et de l'environnement." }
    ]
  }

})
