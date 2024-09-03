<script setup>
    import Question from '@/components/Question.vue';
    import QuizHeader from '@/components/QuizHeader.vue';
    import Result from '@/components/Result.vue';
    import { ref, watch, computed } from 'vue';
    import { useRoute } from 'vue-router';
    import quizes from '../data/quizes.json'

    const route = useRoute()
    const quizId = parseInt(route.params.id)
    // we need to keep track of the current question, starting from 1
    const currentQuestionIndex = ref(0);
    const quiz = quizes.find(q => q.id === quizId)
    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
    const barPercentage = computed(() => `${currentQuestionIndex.value/quiz.questions.length * 100}%`)
    const numberOfCorrectAnswers = ref(0)
    const showResults = ref(false)

    const onOptionSelected = (isCorrect) => {
        if (isCorrect) {
            numberOfCorrectAnswers.value++;
        }
        if (quiz.questions.length - 1 === currentQuestionIndex.value) {
            showResults.value = true
        }

        currentQuestionIndex.value++;
    }
</script>

<template>
    <div>
        <QuizHeader 
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
        />
        <div>
            <!-- once an option is selected, onOptionSelected will be called -->
            <Question
                v-if="!showResults"
                :question="quiz.questions[currentQuestionIndex]" 
                @selectOption="onOptionSelected"
                />
            <Result v-else :quizQuestionLength="quiz.questions.length" :numberOfCorrectAnswers="numberOfCorrectAnswers" />
        </div>
    </div>
</template>