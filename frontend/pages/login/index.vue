<template>
  <div>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button @click="postLogin" type="submit" value="Login" class="btn btn-primary mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>

    </div>
  </div>
</template>

  <script setup lang="ts">

const postLogin = async () => {
  const { data } = await useFetch('http://localhost:3500/login', {
    method: 'POST',
    body: JSON.stringify({
      username: 'admin',
      password: 'admin'
    })
  });
  console.log(data);
}
  
  definePageMeta({
    name: "login",
  });
  </script>