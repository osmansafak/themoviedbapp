<template>
    <i class="loader" />
</template>

<style>
    .loader {
        border: 5px solid #f3f3f3;
        border-top: 5px solid #ff3b30;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        display: inline-block;
        position: relative;
        margin: 30px 0 30px -20px;
        left: 50%;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>