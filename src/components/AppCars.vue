<template>
  <div >
    <p>AppCars</p>
        <table class="table">
        <tr >

            <td>Brand</td><br>
            <td>Model</td><br>
            <td>Year</td><br>
            <td>Max Speed</td><br>
            <td>Transmition</td><br>
            <td>Engine</td><br>
            <td>Number Of Doors</td><br>

        </tr>
        <tr v-for="car in cars" :key="car.id">

            <td>{{car.brand}}</td><br>
            <td>{{car.model}}</td><br>
            <td>{{car.year}}</td><br>
            <td>{{car.maxSpeed}}</td><br>
            <td>{{car.isAutomatic ? "Automatic" : "Manual"}}</td><br>
            <td>{{car.engine}}</td><br>
            <td>{{car.numberOfDoors}}</td><br>
            <td>
              <router-link :to="{ name: 'edit', params:{ id: car.id}}"><button class="btn btn-primary">Edit</button></router-link>
            <td><button @click="deleteCar(car)" class="btn btn-primary">Delete</button></td><br>
            
        </tr>
        </table>
  </div>
</template>

<script>
import { cars } from '../services/CarsService'
export default {
  name: 'AppCars',
  data() {
    return {
      cars: [],
      
    }
  },
  beforeRouteEnter (to, from, next) {
    cars.getAll()
      .then((response) => {
          next((vm) => {
            vm.cars = response.data
          })
      })
  },
  methods: {
    deleteCar(car)
    {
      cars.deleteCar(car.id)
       .then((success) => {
          this.cars = this.cars.filter(c => c !== car)
        })
    }
    
  }
}
</script>


