<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'
import AppTable from '../components/AppTable.vue'
import type { ApiResourceCollection } from '@/types'

interface User {
    id: number
    name: string
    email: string
    email_verified_at: string
}

interface UserResource extends ApiResourceCollection {
    data: User[]
}

const data = ref<UserResource>()
const params = useUrlSearchParams()

const goToPage = async (page: string | number | undefined = undefined) => {
    if (params.page && typeof page === 'undefined') {
        page = params.page as string
    }

    const response = await axios.get('/api/users', { params: { page } })
    data.value = response.data

    params.page = page as string
}

goToPage()

const headers = {
    name: 'Name',
    email: 'Email',
    email_verified_at: 'Email verified at',
    actions: 'Edit',
}

const handleSelected = (items: string[]) => {
    console.log(items)
}
</script>

<template>
    <div v-if="data" class="mt-10">
        <AppTable
            :columns="headers"
            :rows="data.data"
            :meta="data.meta"
            @@selected-items="handleSelected"
            @@current-page="goToPage"
        >
            <template #title>Users</template>
            <template #description
                >A list of all the users in your account including their name,
                title, email and role.</template
            >

            <template #header-actions="{ col }">
                <span class="sr-only">{{ col }}</span>
            </template>

            <template #cell-actions="{ row: row }">
                <button
                    type="button"
                    class="font-medium text-indigo-600 hover:text-indigo-900"
                >
                    Edit <span class="sr-only">, {{ row.name }}</span>
                </button>
            </template>
        </AppTable>
    </div>
</template>
