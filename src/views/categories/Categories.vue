<template>
  <div>
    <div class="wrapper">
      <Navbar></Navbar>
      <div class="container mt-3">
        <div class="row align-items-center mb-3">
          <div class="col-md-6">
            <h6>Categorias</h6>
          </div>
          <div class="col-md-6 text-right">
            <b-button class="btn btn-primary ripple" variant="primary" v-b-modal.modal-1>
              <i class="material-icons-outlined">add</i>
              Agregar
            </b-button>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-12">
            <div class="card card-outline">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover table-borderless">
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col" class="w-75">Categoria</th>
                      <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Catering</td>
                      <td>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">edit</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Tacos</td>
                      <td>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">edit</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Carritos de Hot Dogs</td>
                      <td>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">edit</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Mesa de Postres</td>
                      <td>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">edit</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Mesa de Shots</td>
                      <td>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">edit</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">delete</i>
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalAdd></ModalAdd>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ModalAdd from "@/components/ModalAdd";

export default {
  components: {ModalAdd, Footer, Navbar}
}
</script>