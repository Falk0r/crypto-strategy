<template>
  <div>I'm protected 2!</div>
  <div v-if="users">
    <div v-for="user in users" :key="user.id">
      {{ user.firstName }} : {{ user.email }}
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({middleware: "auth"});

interface User {
  id: number;
  firstName: string;
  email: string;
}

const {data: users} = await useApiFetch<User[]>("users");
</script>
