<script setup lang="ts">
const props = defineProps({
    model_introduce: String,
    model_type: String,
    model_url: String,
})
</script>

<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="p-6">
                <h2 class="text-xl font-bold mb-2 text-gray-800"><slot></slot></h2>
                <p class="text-gray-700 mb-4 max-w-sm overflow-hidden whitespace-nowrap text-ellipsis">{{ model_introduce }}</p>
                <div class="flex items-center justify-between">
                    <span class="text-gray-600 text-sm">{{ model_type }}</span>
                    <a href='{{ model_url }}' target="_blank" class="text-blue-500 hover:text-blue-700 text-sm font-semibold">下载模型</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>