<template>
    <div class="container">
        <div class="row justify-content-center">
            <form>
                <input type="text" placeholder="Наименование" v-model="title">
                <input type="text" placeholder="Цена за единицу" v-model="price">
                <button type="button" class="btn btn-success" @click="addPosition">Добавить</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'Vuex'
    export default {
        computed: {
            ...mapGetters({
                items: 'getItems'
            })
        },
        methods: {
            addPosition: function () {
                if(this.title===undefined || this.price===undefined || this.price<=0)
                {
                    alert('Вы некорректно ввели необходимые поля для добавления продукта');
                }
                else{
                    this.$store.dispatch('addPosition', [this.title, this.price]);
                    alert('Продукт ' + this.title + ' с ценой ' + this.price + ' успешно добавлен');
                }
            }
        }
    }
</script>