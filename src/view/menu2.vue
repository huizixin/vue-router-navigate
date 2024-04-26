<template>
    <div>
        <h1>menu2-{{ timer }}</h1>
        <button @click="$router.reLaunch('/test-menu1')">跳转到test-menu1</button>
    </div>
</template>

<script>
export default{
    name:'TestMenu2',
    data(){
        return{
            timer: 0,
            setTime:null
        }
    },
    mounted(){
        this.setTime = setInterval(() => {
            this.timer=this.timer+1
        }, 1000);
    },
    beforeDestroy(){
        clearInterval(this.setTime)
        this.setTime=null
    }
}
</script>