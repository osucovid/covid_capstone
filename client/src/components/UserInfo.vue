<template>
    <div>
        <h2>Data as of: {{ new Date().toLocalDateString() }}</h2>
        <h3>Username: {{ $auth.user.name }}</h3>
    </div>

</template>