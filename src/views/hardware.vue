<script setup lang="ts">

</script>

<template>
    <div class="mb-8 flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm max-sm:overflow-hidden">
        <h4 class="font-semibold">My Hardware</h4>
        <div class="mt-4 grid grid-cols-1 gap-5 xl:grid-cols-2">
            <div class="relative">
                <div
                    class="relative z-1 flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <div class="flex items-start justify-start gap-3">
                        <img alt="GPU" class="w-12" src="#">
                        <div class="self-center">
                            <div class="text-balance text-base font-semibold text-opacity-50 max-sm:text-sm">GPU NVIDIA
                                T4
                            </div>
                            <div class="text-xs text-gray-500 sm:text-sm">16GB</div>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <div class="flex items-center justify-end gap-3">
                            <button
                                class="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-2xl font-medium text-blue-500 transition-all duration-200 hover:bg-blue-100">
                                <span class="absolute -top-0.5 flex h-full w-full items-center justify-center">-</span>
                            </button>
                            <div class="font-mono text-sm font-semibold text-gray-600">1</div>
                            <button
                                class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-2xl font-medium text-blue-500 transition-all duration-200 hover:bg-blue-100">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    class="absolute left-0 top-0 h-full w-full rounded-xl border border-gray-100 bg-gray-50 transition-all duration-200 dark:border-gray-800 dark:bg-gray-900"></div>
                <div
                    class="absolute left-0 top-0 h-full w-full rounded-xl border border-gray-100 bg-gray-50 transition-all duration-200 dark:border-gray-800 dark:bg-gray-900"></div>
            </div>
        </div>
        <div class="-mx-5 mb-4 mt-6 border-b border-gray-100 px-6 pb-14 pt-2">
            <p class="text-base font-semibold">Amazing!</p>
            <p class="text-sm text-gray-500">I have a total of 65.13 TFLOPS of computing power.</p>
            <div class="mb-1 mt-3 flex items-center justify-between">
                <p class="text-sm font-semibold text-gray-900">GPU poor</p>
                <p class="text-sm font-semibold text-gray-900">GPU rich</p>
            </div>
            <div class="relative h-2 w-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
                <div
                    class="absolute -top-1 h-4 w-2 -translate-x-1/2 rounded-full border border-gray-100 bg-white shadow"
                    style="left: 54.283%;"></div>
                <div
                    class="absolute top-5 max-w-max -translate-x-1/2 whitespace-nowrap rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-semibold text-gray-600 shadow"
                    style="left: 54.283%;">
                    <a target="_blank"
                       href="https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/src/hardware.ts">65.13
                        TFLOPS</a>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>