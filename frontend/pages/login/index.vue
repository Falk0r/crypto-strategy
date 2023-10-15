<template>
  <div>
    <h1>Login</h1>
    <div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        v-model="loginData.username"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="loginData.password"
      />
      <button
        @click="postLogin"
        type="submit"
        value="Login"
        class="btn btn-primary mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "login",
  layout: "application",
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
interface LoginData {
  username: string;
  password: string;
}

const loginData: LoginData = {
  username: "test1@test.com",
  password: "1234",
};

const {status, data, signIn} = useAuth();

const postLogin = async () => {
  await signIn(loginData, {callbackUrl: "/protected"});
};
</script>
