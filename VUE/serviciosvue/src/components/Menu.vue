<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark"
    aria-label="Fourth navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Menu</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/empleadosdetalle" class="nav-link"
              >Empleados(Detalles)</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/empleadosoficio" class="nav-link"
              >Empleados(Oficio)</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/ejemploservicios" class="nav-link"
              >Servicios(Ejemplo)</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/empleadosserviciosoficio" class="nav-link"
              >Empleados(Oficio II)</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/departamentos" class="nav-link"
              >Departamentos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/coches" class="nav-link">Coches</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown04"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Dropdown</a
            >
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
};
</script>