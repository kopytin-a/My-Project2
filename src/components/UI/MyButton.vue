<template>
    <button class="btn custom-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
   name: 'my-button'
}
</script>


<style scoped>
.custom-btn {
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
}
.btn {
  width: 200px;
  height: 40px;
  padding: 0;
  border: none;
  background: linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%);
}
.btn:hover {
  color: rgba(7,187, 7);
  background: white;
  box-shadow:none;
}
.btn:before,
.btn:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: rgba(7,187, 7);
}
.btn:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
.btn:hover:before,
.btn:hover:after{
  width:100%;
  transition:800ms ease all;
}
</style>