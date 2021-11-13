<template>
  <div>
    <label>Introduce el numero: </label>
    <input type="number" v-model="numero" />
    <button @click="crearTabla(numero)">Mostrar Tabla</button>
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th>Operacion</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="o in linea" :key="o" v-html="o">
          {{
            o
          }}
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  methods: {
    crearTabla(numero) {
      var linea = "";
      this.linea = [];
      var resultado = 0;
      for (var i = 0; i <= 10; i++) {
        resultado = numero * i;
        linea = "<td>" + numero + "*" + i + "</td><td>" + resultado + "</td>";
        this.linea.push(linea);
      }

      return this.linea;
    },
  },
  data() {
    return {
      numero: 0,
      linea: [],
    };
  },
};
</script>