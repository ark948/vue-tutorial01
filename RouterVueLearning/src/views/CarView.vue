<script setup>
    // impoprts
    import { useRoute, useRouter, RouterView } from 'vue-router';
    import cars from "../data/cars.json";

    // composables
    const route = useRoute(); // access the current route
    const router = useRouter(); // a router object, used to adjust url path

    const carId = parseInt(route.params.id);
    const car = cars.find(c => c.id === carId);
</script>

<template>
    <div>
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <!-- this RouterView will this component to render all children routes of this component -->
        <button @click="router.push(`/cars/${carId}/contact`)">Show contact info</button>
        <RouterView />
    </div>
</template>