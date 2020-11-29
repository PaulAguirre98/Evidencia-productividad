<template>
  <div>
    <div class="wrapper">
      <Navbar></Navbar>
      <div class="container mt-3">
        <div class="row align-items-center mb-3">
          <div class="col-md-6">
            <h6>Usuarios</h6>
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
                      <th scope="col" class="w-75">Usuarios</th>
                      <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Carley Holcomb</td>
                      <td>
                        <button class="btn btn-sm btn-link-success ripple ripple-dark">
                          <i class="material-icons-outlined">done</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Madina Dalton</td>
                      <td>
                        <button class="btn btn-sm btn-link-success ripple ripple-dark">
                          <i class="material-icons-outlined">done</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Kiaan Blake</td>
                      <td>
                        <button class="btn btn-sm btn-link-success ripple ripple-dark">
                          <i class="material-icons-outlined">done</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Matthew Doyle</td>
                      <td>
                        <button class="btn btn-sm btn-link-success ripple ripple-dark">
                          <i class="material-icons-outlined">done</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">close</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Carys Herrera</td>
                      <td>
                        <button class="btn btn-sm btn-link-success ripple ripple-dark">
                          <i class="material-icons-outlined">done</i>
                        </button>
                        <button class="btn btn-sm btn-link ripple ripple-dark">
                          <i class="material-icons-outlined">close</i>
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