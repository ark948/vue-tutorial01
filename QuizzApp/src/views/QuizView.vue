<script setup>
    import Question from '@/components/Question.vue';
    import QuizHeader from '@/components/QuizHeader.vue';
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import quizes from '../data/quizes.json'

    const route = useRoute()
    const quizId = parseInt(route.params.id)
    // we need to keep track of the current question, starting from 1
    const currentQuestionIndex = ref(0);
    const quiz = quizes.find(q => q.id === quizId)
</script>

<template>
    <div>
        <QuizHeader />
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]" />
        </div>
    </div>
</template>