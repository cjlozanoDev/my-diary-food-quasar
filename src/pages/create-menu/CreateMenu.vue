<template>
  <div>
    <span class="head-diary-food head-subtitle">{{ $t("create_menu") }}</span>
    <main class="page-my-diary-food">
      <section class="create-menu__card">
        <span class="card-title">LUNES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">MARTES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">MIERCOLES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">JUEVES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">VIERNES</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">SÁBADO</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
      <section class="create-menu__card">
        <span class="card-title">DOMINGO</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in sit
      </section>
    </main>
  </div>
</template>

<style scoped>
.create-menu__card {
  position: relative;
  width: 100%;
  min-height: 300px;
  max-width: 1200px;
  margin-bottom: var(--spacing-lg);
  background: white;
  border-radius: 20px;
  border: 25px solid var(--brown-ligth);
  box-shadow: 0 0 0 2px black;
  padding: 5px;
}
.card-title {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  min-width: 100px;
  text-align: center;
  padding: 10px;
  background: white;
  border-radius: 10px;
  border: 2px solid black; /* Grosor y color del borde del título */
}

@media (min-width: 798px) {
  .create-menu__card {
    font-size: var(--font-large);
    margin-bottom: var(--spacing-xl);
  }
}
</style>
