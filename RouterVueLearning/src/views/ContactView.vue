<script setup>
    import { useRoute } from 'vue-router';
    import cars from "../data/cars.json";

    const route = useRoute();
    const car = cars.find(c => c.id === parseInt(route.params.id));

</script>

<template>
    <div v-if="car">
        <h1>
            Contact info
        </h1>
        <p>{{ car.contact.dealer }}</p>
        <p>{{ car.contact.number }}</p>
    </div>
    <!-- if car is not found, do not render anything -->
</template>