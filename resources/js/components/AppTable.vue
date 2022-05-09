<script setup lang="ts">
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import AppPagination from './AppPagination.vue'
import type { Meta } from '@/types'

interface Props {
    columns: Record<string, string>
    rows: object[]
    meta: Meta
    checkIdx?: string
}

// eslint-disable-next-line vue/no-setup-props-destructure
const { columns, rows, checkIdx = 'email' } = defineProps<Props>()

const emit = defineEmits<{
    (e: '@selectedItems', value: string[]): void
    (e: '@currentPage', value: number | string): void
}>()

const selectedRows: Ref<string[]> = ref([])
const indeterminate = computed(
    () =>
        selectedRows.value.length > 0 && selectedRows.value.length < rows.length
)

const currentPage = (value: number | string) => {
    emit('@currentPage', value)
    if (selectedRows.value.length > 0) {
        selectedRows.value = []
    }
}

const handleSelectAll = (event: Event) => {
    selectedRows.value = (event.target as HTMLInputElement).checked
        ? rows.map((p) => p[checkIdx])
        : []
}
</script>

<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">
                    <slot name="title" />
                </h1>
                <p class="mt-2 text-sm text-gray-700">
                    <slot name="description" />
                </p>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                    Add user
                </button>
            </div>
        </div>
        <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div
                    class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
                >
                    <div
                        class="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
                    >
                        <div
                            v-if="selectedRows.length > 0"
                            class="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16"
                        >
                            <button
                                type="button"
                                class="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                @click.prevent="
                                    $emit('@selectedItems', selectedRows)
                                "
                            >
                                Bulk edit
                            </button>
                            <button
                                type="button"
                                class="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                @click.prevent="
                                    $emit('@selectedItems', selectedRows)
                                "
                            >
                                Delete all
                            </button>
                        </div>
                        <table
                            class="min-w-full table-fixed divide-y divide-gray-300"
                        >
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="relative w-12 px-6 sm:w-16 sm:px-8"
                                    >
                                        <input
                                            type="checkbox"
                                            class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                            :checked="
                                                indeterminate ||
                                                selectedRows.length ===
                                                    rows.length
                                            "
                                            :indeterminate="indeterminate"
                                            @change="handleSelectAll"
                                        />
                                    </th>
                                    <th
                                        v-for="(col, key, index) in columns"
                                        :key="key"
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                        :class="[
                                            {
                                                'relative py-3.5 pl-3 pr-4 sm:pr-6':
                                                    key === 'actions',
                                            },
                                            {
                                                'min-w-[12rem]': index === 0,
                                            },
                                        ]"
                                    >
                                        <slot
                                            :name="`header-${key}`"
                                            :column="col"
                                        >
                                            {{ col }}
                                        </slot>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr
                                    v-for="row in rows"
                                    :key="row[checkIdx]"
                                    :class="[
                                        selectedRows.includes(row[checkIdx]) &&
                                            'bg-gray-50',
                                    ]"
                                >
                                    <td
                                        class="relative w-12 px-6 sm:w-16 sm:px-8"
                                    >
                                        <div
                                            v-if="
                                                selectedRows.includes(
                                                    row[checkIdx]
                                                )
                                            "
                                            class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"
                                        ></div>
                                        <input
                                            v-model="selectedRows"
                                            type="checkbox"
                                            class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                            :value="row[checkIdx]"
                                        />
                                    </td>
                                    <td
                                        v-for="(_, key, index) in columns"
                                        :key="key"
                                        class="whitespace-nowrap py-4 text-sm"
                                        :class="[
                                            index === 0 &&
                                            selectedRows.includes(row[checkIdx])
                                                ? 'text-indigo-600'
                                                : index === 0
                                                ? 'text-gray-900'
                                                : 'text-gray-500',
                                            {
                                                'pr-3 font-medium': index === 0,
                                            },
                                            key === 'actions'
                                                ? 'pl-3 pr-4 text-right font-medium sm:pr-6'
                                                : 'px-3',
                                        ]"
                                    >
                                        <slot :name="`cell-${key}`" :row="row">
                                            {{ row[key] }}
                                        </slot>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <AppPagination
                            :meta="meta"
                            @@current-page="currentPage"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
