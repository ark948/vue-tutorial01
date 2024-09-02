<script setup>
    import { useRoute, RouterView } from 'vue-router';
    import cars from "../data/cars.json";

    const route = useRoute(); // access the current route
    const car = cars.find(c => c.id === parseInt(route.params.id));
    
</script>

<template>
    <div>
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <!-- this RouterView will this component to render all children routes of this component -->
        <RouterView />
    </div>
</template>