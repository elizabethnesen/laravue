<template>
    <div class="container">
        <header>
            <h1>First project on Vue</h1>
        </header>
        <section>
            <div class="row">
                <div class="col-md-4 side_bar">
                    <!-- используем компонент router-link для навигации -->
                    <!-- входной параметр `to` определяет URL для перехода -->
                    <!-- `<router-link>` по умолчанию отображается тегом `<a>` -->
                    <router-link to="/mainPage">Главная</router-link>
                    <router-link to="/order">Заказ</router-link>
                </div>
                <div class="col-md-8 content">
                    <!-- отображаем тут компонент, для которого совпадает маршрут -->
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


<style>
    header {
        height: 100px;
        width: 100%;
        text-align: center;
    }
    .side_bar {
        height: 500px;
    }
    .side_bar a {
        display: block;
        height: 70px;
        width: 100%;
        background: #e3d9db;
        color: #070608;
        text-align: center;
        font-size: 30px;
        border: 1px solid #fff6e0;
        padding-top: 15px;
        text-decoration: none;
    }
    .side_bar a:hover {
        color: #e3d9db;
        background: #070608;
    }
</style>