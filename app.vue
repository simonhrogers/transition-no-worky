<template>
  <div>
    <h1>Ice Cream Tiger App</h1>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>

.page-enter-active, .page-leave-active {
  transition: opacity 0.2s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}

.layout-enter-active, .layout-leave-active {
  transition: opacity 0.2s;
}

.layout-enter-from, .layout-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

</style>