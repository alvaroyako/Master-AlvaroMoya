<template>
  <div>
    <nav>
      <ul id="menu">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/deportes">Deportes</router-link>
        </li>
        <li>
          <router-link to="/numeros">Numeros</router-link>
        </li>
        <li>
          <router-link to="/comics">Comics</router-link>
        </li>
        <li>
          <router-link to="/aleatorios">Numeros aleatorios</router-link>
        </li>
        <li v-for="num in valores" :key="num">
          <router-link :to="'/numerodoble/' + num"
            >Numero Doble {{ num }}</router-link
          >
        </li>
        <li>
          <router-link to="/tabla">Tabla</router-link>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      valores: [66, 99, 420],
    };
  },
};
</script>

<style scoped>
ul#menu li {
  display: inline;
  margin: 0.5em;
}
</style>