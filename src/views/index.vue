<script setup lang="ts">

</script>

<template>
    <div class="container mx-auto p-4">
        <div class="text-3xl font-bold my-4 flex justify-between items-end">
            <RouterLink to="/pics"><img class="h-72"  src="../assets/image/IMG_20130528_114857.jpg" alt=""></RouterLink>
            Xuehang Cang (苍学航) - Personal Home Page
            <RouterLink to="/pics"><img class="h-72" src="../assets/image/6c279cc5-939d-4276-9fe4-4a8ecfedc480crop_photo.jpg" alt=""></RouterLink>
        </div>

        <p class="italic mb-4">
            <a class="text-blue-700" href="https://sebsauvage.net/python/" target="_blank">"Life is short. You need Python."</a>
        </p>

        <p class="text-2xl font-semibold mb-2">
            <a class="" href="">Who I Am</a>
        </p>

        <p class="mb-4">
            I'm a <a class="text-blue-700" href="https://www.python.org" target="_blank">Python</a>  programming language enthusiast from  <a class="text-blue-700" href="https://en.wikipedia.org/wiki/China" target="_blank">China 🇨🇳</a>. See also my <a class="text-blue-700" href="#">resume</a>, and my  <RouterLink to="/" class="text-blue-700">publications list</RouterLink>, a <a class="text-blue-700" href="#">brief bio</a>, assorted <a class="text-blue-700" href="#">writings</a>, <a class="text-blue-700" href="#">presentations</a>,and some <RouterLink to="/pics" class="text-blue-700">pictures of me</RouterLink>. I am <a class="text-blue-700" href="https://twitter.com/xuehangcang" target="_blank">@Xuehang Cang</a> on Twitter.

        </p>
        <p class="mb-4">
            I'm learning something about <a class="text-blue-700" href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank">machine learning</a>. Currently I’m interested in <a class="text-blue-700" href="https://en.wikipedia.org/wiki/Computer_vision" target="_blank">computer vision</a>, <a class="text-blue-700" href="https://huggingface.co/tasks/text-generation">text generation (LLMs)</a> and <a class="text-blue-700" href="https://huggingface.co/blog/vlms">vision-language models</a>.
        </p>

        <p class="text-2xl font-semibold mb-2">
            <a class="" href="">How to Reach Me</a>
        </p>

        <p class="mb-4">
            You can send me an email at <a class="text-blue-700" href="mailto:xuehangcang@outlook.com">xuehangcang@outlook.com</a>.
        </p>

        <p class="text-2xl font-semibold mb-2">
            <a class="" href="">My Name</a>
        </p>

        <p class="mb-4">
            The <a class="text-blue-700" href="https://baike.baidu.com/item/%E8%8B%8D%E5%A7%93" target="_blank">surname Cang</a>, pronounced as cāng (ㄘㄤ), originates from the Manchu ethnic group. It traces back to the Jurchen tribes during the Ming Dynasty, and it belongs to the category of surnames that were Sinicized from tribal names.
        </p>

        <p class="mb-4">
            The Manchu <a class="text-blue-700" href="https://baike.baidu.com/item/%E8%90%A8%E5%85%8B%E8%BE%BE%E6%B0%8F" target="_blank">Sakda clan</a>, originating from the <a class="text-blue-700" href="https://baike.baidu.com/item/%E5%B7%B4%E9%9B%85%E6%8B%89%E6%B0%8F" target="_blank">Bayara clan</a>, is a branch of the <a class="text-blue-700" href="https://baike.baidu.com/item/%E8%A7%89%E7%BD%97%E6%B0%8F" target="_blank">Jueluo clan</a>. The clan name was later derived from geographical locations. In Manchu, it is called "Sakda Hala," which translates to "苍老" in Chinese. The clan historically resided in areas such as Ningguta, Ahur River, Yehe, Sakda, Hetu Ala, Namudulu, Deliwohe, and Heilongjiang, among others.
        </p>

        <p class="text-2xl font-semibold mb-2">
            <a class="" href="">More Hyperlinks</a>
        </p>

        <ul class="list-disc list-inside mb-4">
            <li class="mb-2">
                Here is the <a class="text-blue-700" href="https://github.com/xuehangcang" target="_blank">project and python packages</a> I have released.
            </li>

            <li class="mb-2">
                Here is the  <a class="text-blue-700" href="https://huggingface.co/Xuehang" target="_blank">model and dataset</a> I have released, which includes some test data.
                <div class="mb-2 mt-2 flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm max-sm:overflow-hidden">
                    <h4 class="font-semibold">My Hardware</h4>
                    <div class="mt-4 grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div class="relative">
                            <div
                                class="relative z-1 flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                                <div class="flex items-start justify-start gap-3">
                                    <img alt="GPU" class="w-12" src="../assets/image/gpu.png">
                                    <div class="self-center">
                                        <div class="text-balance text-base font-semibold text-opacity-50 max-sm:text-sm">GPU NVIDIA T4</div>
                                        <div class="text-xs text-gray-500 sm:text-sm">15360MiB</div>
                                    </div>
                                </div>
                                <div class="flex flex-col items-end gap-1">
                                    <div class="flex items-center justify-end gap-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="-mx-5 mb-4 mt-6 border-gray-100 px-6 pb-6 pt-2">
                        <p class="text-base font-semibold">Amazing!</p>
                        <p class="text-sm text-gray-500">I have a total of 65.13 TFLOPS(FP16) \ 8.1 TFLOPS(FP32) of computing power.</p>
                        <div class="mb-1 mt-3 flex items-center justify-between">
                            <p class="text-sm font-semibold text-gray-900">GPU poor</p>
                            <p class="text-sm font-semibold text-gray-900">GPU rich</p>
                        </div>
                        <div class="relative h-2 w-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
                            <div
                                class="absolute -top-1 h-4 w-2 -translate-x-1/2 rounded-full border border-gray-100 bg-white shadow"
                                style="left: 54.283%;"></div>
                            <div
                                class="absolute top-5 max-w-max -translate-x-1/2 whitespace-nowrap rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-semibold text-gray-600 shadow" style="left: 54.283%;">65.13 TFLOPS
                            </div>
                        </div>
                    </div>
                </div>


            </li>

            <li class="mb-2">
                Here is the <a class="text-blue-700" href="https://www.heywhale.com/home/user/profile/5ee9f592c1914600362bea45/overview" target="_blank">article and tutorial</a> I have released.
            </li>
        </ul>






        <p class="text-center mb-4">
            <a class="text-blue-700" href="">"On the Internet, nobody knows you're a dog."</a>
        </p>

    </div>
</template>
