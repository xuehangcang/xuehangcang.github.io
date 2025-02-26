<script setup lang="ts">
import ModelCard from "@/components/ModelCard.vue";
import DatasetsCard from "@/components/DatasetsCard.vue";
</script>

<template>
    <main class="container mx-auto">
        <div class="flex items-center mt-4 mb-4">
            <img class=" mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
                 src="../assets/img/logo.jpg"
                 alt="">
        </div>
        <p class="mt-2 mb-2">
            我的名字叫学航，一名专注于深度学习的工程师，出生于黑龙江，现居住在北京。我热衷于利用人工智能和数据科学来解决复杂的问题，并推动技术的前沿发展。</p>
        <p class="mt-2 mb-2">当我不构建技术时，您会发现我在到处旅行或者做一些运动。</p>
        <p class="mt-2 mb-2">
            我在技术领域上拥有超过5年的工作经验，大部分来源于互联网上各种课程和技术文档，它们是非常棒的导师。</p>
        <p class="mt-2 mb-2">跨行业工作让学会了更多的东西，不仅仅是在构造产品，还是在建设团队，或者说项目管理上。</p>
        <p class="mt-2 mb-2">在人工智能技术快速发展的时代，掌握相关技术能在工作中获得更多，AI正在改变世界。</p>
        <div class="text-xl font-bold mt-4 mb-4">技能</div>
        <div class="ml-6">
            <ul class="list-disc">
                <li class="mt-1 mb-1">编程语言：Python、JavaScript、Go</li>
                <li class="mt-1 mb-1">深度学习框架：PyTorch、fastai</li>
                <li class="mt-1 mb-1">数据处理与分析：Pandas, NumPy, Scikit-learn</li>
                <li class="mt-1 mb-1">工具与平台：Docker, Git, Jupyter Notebook</li>
                <li class="mt-1 mb-1">其他：图像处理, 自然语言处理, 强化学习</li>
            </ul>
        </div>
        <div class="text-xl font-bold mt-4 mb-4">模型</div>

        <ModelCard model_introduce="This model is a fine-tuned version of the meta-llama/Llama-3.1-8B, using the SFT approach on the
                        XuehangCang/Erotic-literature dataset. It's specifically crafted to understand and generate text
                        in
                        Chinese related to the erotic literature genre. This makes it an invaluable tool for tasks
                        involving
                        creative writing, story generation, or other applications within this specific domain."
                   model_type="Text Generation"
                   model_url="https://huggingface.co/XuehangCang/Llama3.1-8B-El">Llama3.1-8B-El
        </ModelCard>

        <div class="text-xl font-bold mt-4 mb-4">数据</div>

        <DatasetsCard data_introduce="This dataset is a collection of erotic literature in Chinese, compiled for the purpose of
                        text
                        generation tasks. It is divided into two splits: a training set and a test set, allowing for
                        model training and evaluation. The dataset is of moderate size, suitable for projects
                        working on
                        text-based AI models, particularly focusing on the genre of erotic literature."
                      data_type="Text Generation"
                      data_url="https://huggingface.co/datasets/XuehangCang/Erotic-literature">Erotic-literature
        </DatasetsCard>

        <div class="text-xl font-bold mt-4 mb-4">教程</div>
        <div class="ml-6">
            <ul class="list-disc">
                <li class="mt-1 mb-1 "><a class="text-blue-500 hover:text-blue-700"
                                          href="https://www.heywhale.com/home/column/6444a0017a1d8bec059eb39d"
                                          target="_blank">Pytorch 2.0 中文教程</a></li>
            </ul>
        </div>

        <div class="text-xl font-bold mt-4 mb-4">社交</div>
        <div class="ml-6 mb-6">
            <ul class="list-disc">
                <li>
                    <a class="text-blue-500 hover:text-blue-700" href="https://x.com/XuehangCang" target="_blank">Twitter</a>
                </li>
                <li>
                    <a class="text-blue-500 hover:text-blue-700" href="https://github.com/xuehangcang" target="_blank">Github</a>
                </li>
                <li>
                    <a class="text-blue-500 hover:text-blue-700" href="https://huggingface.co/XuehangCang"
                       target="_blank">huggingface</a>
                </li>
            </ul>
        </div>

    </main>

</template>
