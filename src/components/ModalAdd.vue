<template>
  <div>
    <b-modal id="modal-1" title="Agregar" centered>
      <form action="">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input type="text" class="form-control">
        </div>
      </form>
      <template #modal-footer="{ ok, cancel }">
        <b-button variant="link" @click="cancel()">
          Cancelar
        </b-button>
        <b-button variant="primary" @click="ok()">
          Aceptar
        </b-button>
      </template>
    </b-modal>
  </div>
</template>