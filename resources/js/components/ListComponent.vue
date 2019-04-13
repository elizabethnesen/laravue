<template>
    <div class="container">
        <div class="row justify-content-center">
            <span>Остаток: {{ balance }} грн.</span>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Наименование</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, i) in items">
                    <td>{{ item.title }}</td>
                    <td>{{ item.count }}</td>
                    <!--цена зависит от выбранного количества-->
                    <td>{{ item.count === 0 ? item.price : item.price * item.count }}</td>
                    <td>
                        <i class="fas fa-minus-circle" @click="dropCount(i)"></i>
                        <i class="fas fa-plus-circle" @click="addCount(i)"></i>
                        <i class="fas fa-times-circle" @click="destroyCount(i)"></i>
                    </td>
                </tr>
                </tbody>
            </table>
            <form>
                <input type="text" placeholder="Наименование" v-model="title">
                <input type="text" placeholder="Цена за единицу" v-model="price">
                <button type="button" class="btn btn-success" @click="addPosition">Добавить</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                balance: 70.00, //остаток по умолчанию
                title: '',
                price: '',
                count: '',
                items:
                [
                    {
                        title: 'Яблоко',
                        count: 0,
                        price: 10,
                        showItem: false
                    },
                    {
                        title: 'Апельсин',
                        count: 0,
                        price: 30,
                        showItem: false
                    },
                    {
                        title: 'Банан',
                        count: 0,
                        price: 15,
                        showItem: false
                    }
                ]
            }
        },
        methods: {
            //добавление новой позиции в таблицу
            addPosition: function () {
                if(this.title=='' || this.price=='' || this.price<=0)
                {
                    alert('Вы некорректно ввели необходимые поля для добавления продукта')
                }
                else
                {
                    this.items.push({
                        title: this.title,
                        count: 0,
                        price: this.price,
                        showItem: false
                    })
                }
            },
            //нажание на "+" - увеличение количества
            addCount: function (i)
            {
                if (this.items[i].price>this.balance)
                {
                    //если цена больше остатка
                    alert('Ваш остаток закончился');
                }
                else
                {
                    //увеличиваем количество
                    this.items[i].count++;
                    //отнимаем от баланса цену добавленного продукта
                    this.balance -= this.items[i].price;
                }
            },
            //нажание на "-" - уменьшение количества
            dropCount: function (i)
            {
                if (this.items[i].count === 0)
                {
                    //в случае отнятия от нулевого количества
                    this.items[i].count = 0;
                }
                else
                {
                    //уменьшаем количество
                    this.items[i].count--;
                    //прибавляем к балансу цену убранного продукта
                    this.balance += this.items[i].price;
                }
            },
            //нажание на "х" - сброс количества
            destroyCount: function (i)
            {
                //к остатку плюсуем сумму убранного продукта исходя из кол-ва
                this.balance += this.items[i].count * this.items[i].price;
                //обнуляем количество
                this.items[i].count = 0;
            }
        }
    }
</script>