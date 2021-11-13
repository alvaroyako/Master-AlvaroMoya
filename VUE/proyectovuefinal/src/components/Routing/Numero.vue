<template>
  <div>
    <h1 class="text-primary">Numero hijo: {{ valor }}</h1>
    <button class="btn btn-success" @click="sumarParent(valor)">
      Sumar {{ valor }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Numero",
  props: ["valor"],
  methods: {
    sumarParent(valor) {
      this.$emit("sumarParent", valor);
    },
  },
};
</script>