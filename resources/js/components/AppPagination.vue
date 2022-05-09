<script setup lang="ts">
import { computed } from '@vue/reactivity'
import type { Meta } from '@/types'

const props = defineProps<{
    meta: Meta
}>()

const emit = defineEmits<{
    (e: '@currentPage', value: number | string): void
}>()

const currentPage = computed(() => props.meta.current_page as number)

const selectPage = (page: number | string) => {
    emit('@currentPage', page)
}

const nextPage = () => {
    selectPage(currentPage.value + 1)
}

const prevPage = () => {
    selectPage(currentPage.value - 1)
}

const hasPages = computed(
    () =>
        props.meta &&
        (props.meta?.current_page !== 1 ||
            props.meta?.current_page < props.meta?.last_page)
)
</script>

<template>
    <div
        v-if="hasPages"
        class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
        <div class="flex flex-1 justify-between sm:hidden">
            <button
                type="button"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white"
                :disabled="currentPage === 1"
                @click.prevent="prevPage"
            >
                Previous
            </button>
            <button
                type="button"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white"
                :disabled="currentPage === meta.last_page"
                @click.prevent="nextPage"
            >
                Next
            </button>
        </div>
        <div
            class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
        >
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    {{ ' ' }}
                    <span class="font-medium">{{ meta.from }}</span>
                    {{ ' ' }}
                    to
                    {{ ' ' }}
                    <span class="font-medium">{{ meta.to }}</span>
                    {{ ' ' }}
                    of
                    {{ ' ' }}
                    <span class="font-medium">{{ meta.total }}</span>
                    {{ ' ' }}
                    results
                </p>
            </div>
            <div>
                <nav
                    class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                >
                    <button
                        type="button"
                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white"
                        :disabled="currentPage === 1"
                        @click.prevent="prevPage"
                    >
                        <span class="sr-only">Previous</span>
                        <svg
                            class="h-5 w-5"
                            x-description="Heroicon name: solid/chevron-left"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <template v-for="(link, idx) in meta.links">
                        <template v-if="/^[0-9]+|^\.{3}$/.test(link.label)">
                            <button
                                :key="idx"
                                type="button"
                                class="relative inline-flex items-center border px-4 py-2 text-sm font-medium"
                                :class="
                                    meta.current_page === parseInt(link.label)
                                        ? 'z-10 cursor-default border-indigo-500 bg-indigo-50 text-indigo-700'
                                        : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:hover:bg-white'
                                "
                                :aria-current="
                                    meta.current_page === parseInt(link.label)
                                        ? 'page'
                                        : undefined
                                "
                                :disabled="link.label === '...'"
                                @click.prevent="
                                    $emit('@currentPage', link.label)
                                "
                            >
                                {{ link.label }}
                            </button>
                        </template>
                    </template>
                    <button
                        type="button"
                        class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-white"
                        :disabled="currentPage === meta.last_page"
                        @click.prevent="nextPage"
                    >
                        <span class="sr-only">Next</span>
                        <svg
                            class="h-5 w-5"
                            x-description="Heroicon name: solid/chevron-right"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    </div>
</template>
