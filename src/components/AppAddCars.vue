<template>
  <form @submit.prevent="addCar" @reset="reset" >
      <div class="form-group row">
        <label for="brand" class="col-4 col-form-label">Brand</label>
        <div class="col-8">
          <div class="input-group">
            <input id="brand" name="brand" type="text" required="required" class="form-control here" v-model="car.brand">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Model</label>
        <div class="col-8">
          <div class="input-group">
            <input id="model" name="model" type="text" required="required" class="form-control here" v-model="car.model">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="year" class="col-4 col-form-label">Year</label>
        <div class="col-8">
          <select class="form-control" id="year" v-model="car.year">
                <option v-for="(year, key) in years" :key="key" v-bind:value="year" >{{year}}</option>
            </select>
        </div>
      </div>

      <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Number of doors</label>
        <div class="col-8">
          <div class="input-group">
            <input type="number" placeholder="number of doors..." class="form-control here" v-model="car.numberOfDoors"><br>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Max Speed</label>
        <div class="col-8">
          <div class="input-group">
            <input type="number" placeholder="max speed..." class="form-control here" v-model="car.maxSpeed"><br>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Automatic</label>
        <div class="col-8">
          <div class="input-group">
          <input type="checkbox" id="true" value="true" v-model="car.isAutomatic" >
          <label for="true">Yes</label>
          
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Engine</label>
        <div class="col-8">
          <div class="input-group">
            <input type="radio" name="engine" value="Disel" v-model="car.engine" >Disel<br>
            <input type="radio" name="engine" value="Petrol" v-model="car.engine">Petrol<br>
            <input type="radio" name="engine" value="Electric" v-model="car.engine">Electric<br>
            <input type="radio" name="engine" value="Hybrid" v-model="car.engine">Hybrid<br>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
          <button name="reset" type="reset" class="btn btn-primary">Reset</button>
          <button @click="preview" type="button" class="btn btn-primary">Preview</button>
        </div>
      </div>
    </form>
</template>

<script>
import { cars } from '../services/CarsService'
export default {
  data()
  {
      return {
          years: [],
          car: {brand:'', model:'',maxSpeed: '',year:'', isAutomatic: '',numberOfDoors:'', engine: ''}
          
      }
  },
  created(){
       for(var i = 1990; i <= 2018; i++){
           this.years.push(i);
       }
   },
  methods: {
    addCar(){
      cars
      .add(this.car)
      .then(response =>{
        this.$router.push('/cars')
      })
      .catch(err => console.log(err))

    },
    preview()
    {
      alert(`
        ${this.car.brand}
        ${this.car.model}
        ${this.car.year}
        ${this.car.numberOfDoors}
        ${this.car.maxSpeed}
        ${this.car.isAutomatic ? 'Automatic ': 'Manual'}
        ${this.car.engine}
        `
        )
    },
    reset () {
        this.car =  this.defaultCar()
    },
    defaultCar(){
      return {brand:'', model:'',maxSpeed: '',year:'', isAutomatic: '',numberOfDoors:'', engine: ''}
    }
  }
}
</script>

