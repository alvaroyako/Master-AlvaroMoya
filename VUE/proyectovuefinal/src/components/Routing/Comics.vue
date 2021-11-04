<template>
  <div class>
    <div class="container">
      <h1>Ejemplo comics Objetos/colecciones</h1>
      <label for="">Titulo: </label>
      <input class="form-control" type="text" v-model="titulo" />

      <label for="">Imagen: </label>
      <input class="form-control" type="text" v-model="imagen" />

      <label for="">Descripcion: </label>
      <input class="form-control" type="text" v-model="descripcion" />

      <button class="btn btn-primary mt-3" @click="nuevoComic()">
        Nuevo Comic
      </button>
    </div>

    <hr />
    <div class="bg-warning" v-if="favorito">
      <h1 class="text-danger">{{ favorito.titulo }}</h1>
      <img :src="favorito.imagen" />
      <h2 class="text-primary">{{ favorito.descripcion }}</h2>
    </div>
    <hr />
    <div v-for="(c, index) in comics" :key="index">
      <Comic
        :comic="c"
        :comicindex="index"
        v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"
        v-on:eliminarComicParent="eliminarComicParent"
        v-on:modificarComicParent="modificarComicParent"
      />
    </div>
  </div>
</template>

<script>
import Comic from "./Comic.vue";
export default {
  name: "Comics",
  data() {
    return {
      comics: [
        {
          titulo: "Spiderman",
          imagen:
            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
          descripcion: "Hombre araña",
        },
        {
          titulo: "Wolverine",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
          descripcion: "Lobezno",
        },
        {
          titulo: "Guardianes de la Galaxia",
          imagen:
            "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
          descripcion: "Yo soy Groot",
        },
        {
          titulo: "Avengers",
          imagen:
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
          descripcion: "Los Vengadores",
        },
        {
          titulo: "Spawn",
          imagen:
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
          descripcion: "Al Simmons",
        },
        {
          titulo: "Batman",
          imagen:
            "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
          descripcion: "Murcielago",
        },
      ],
      titulo: "",
      imagen: "",
      descripcion: "",
      favorito: "",
    };
  },
  components: {
    Comic,
  },
  methods: {
    nuevoComic() {
      var tit = this.titulo;
      var img = this.imagen;
      var desc = this.descripcion;

      var comic = {
        titulo: tit,
        imagen: img,
        descripcion: desc,
      };

      this.comics.push(comic);
    },

    eliminarComicParent(comicindex) {
      this.comics.splice(comicindex, 1);
    },
    modificarComicParent(comicindex) {
      this.comics[comicindex].titulo = this.titulo;
      this.comics[comicindex].imagen = this.imagen;
      this.comics[comicindex].descripcion = this.descripcion;
    },
    seleccionarFavoritoParent(comic) {
      this.favorito = comic;
    },
  },
};
</script>