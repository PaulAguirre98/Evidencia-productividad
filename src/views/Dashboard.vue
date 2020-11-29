<template>
  <div>
    <div class="wrapper">
      <Navbar></Navbar>
      <div class="container mt-3">
        <div class="row mb-3">
          <div class="col-md-12">
            <h6>Panel</h6>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body text-center">
                <i class="material-icons-outlined icon-wrap mdc-38 mb-3">food_bank</i>
                <h6>Ciudades</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body text-center">
                <i class="material-icons-outlined icon-wrap mdc-38 mb-3">folder</i>
                <h6>Categorias</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body text-center">
                <i class="material-icons-outlined icon-wrap mdc-38 mb-3">people</i>
                <h6>Usuarios</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {Footer, Navbar}
}
</script>