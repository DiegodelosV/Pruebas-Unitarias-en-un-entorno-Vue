<template>
  <div class="contacto">
    <h1>Contacto</h1>
  </div>

  <ul>
    <li>Nombre: {{ nombre }}</li>
    <li>Apellido: {{ apellido }}</li>
    <li>Email: {{ email }}</li>
    <li>Telefono: {{ tel }}</li>
  </ul>
</template>

<script>
export default {
    name: 'ContactoView',
    data() {
        return {
            nombre: 'Cristian',
            apellido: 'Perez',
            email: 'sitio@example.com',
            tel: '123456789'

        }
    }
}
</script>
