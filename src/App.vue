<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <button v-show="!isLoged" @click="doLogin">Login</button>

        <div v-show="isLoged">
            <button @click="doLogout">Logout</button>
            <button @click="loadUsers">Users</button>
            <button @click="loadProducts">Products</button>
            <button @click="loadSuppliers">Suppliers</button>
        </div>

        <hr />

        <div v-show="showProduct">
            <h4>Products</h4>
            <button @click="removeProducts">Remove all</button>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>quantity</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in getProducts">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.quantity}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-show="showUsers">
            <h4>Users</h4>
            <button @click="removeUsers">Remove all</button>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in getUsers">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.age}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-show="showSuppliers">
            <h4>Suppliers</h4>
            <button @click="removeSuppliers">Remove all</button>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>product</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="supplier in getSuppliers">
                        <td>{{supplier.id}}</td>
                        <td>{{supplier.name}}</td>
                        <td>{{supplier.product}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>

    import {mapActions, mapGetters} from 'vuex'

    export default{
        data(){
            return{
                msg: "Vamo que vamo Vuex!"
            }
        },
        methods:{
            ...mapActions([
                'doLogin',
                'doLogout',
                'loadProducts',
                'loadUsers',
                'loadSuppliers',
                'removeSuppliers',
                'removeProducts',
                'removeUsers'
            ])
        },
        computed:{
            ...mapGetters([
                'isLoged',
                'hasProducts',
                'hasUsers',
                'hasSuppliers',
                'getProducts',
                'getUsers',
                'getSuppliers'
            ]),
            showProduct(){
                return this.isLoged && this.hasProducts;
            },
            showUsers(){
                return this.isLoged && this.hasUsers;
            },
            showSuppliers(){
                return this.isLoged && this.hasSuppliers;
            }
        }
    }
</script>
