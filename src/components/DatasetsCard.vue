<script setup lang="ts">
const props = defineProps({
    data_introduce: String,
    data_type: String,
    data_url: String,
})
</script>

<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
            <div class="p-6">
                <h2 class="text-xl font-bold mb-2 text-gray-800"><slot></slot></h2>
                <p class="text-gray-700 mb-4 max-w-sm overflow-hidden whitespace-nowrap text-ellipsis">{{ data_introduce }}</p>
                <div class="flex items-center justify-between">
                    <span class="text-gray-600 text-sm">{{ data_type }}</span>
                    <a href='{{ data_url }}' target="_blank" class="text-blue-500 hover:text-blue-700 text-sm font-semibold">下载数据</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>