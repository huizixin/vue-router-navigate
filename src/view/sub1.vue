<template>
    <div>
        <h1>sub1-{{ timer }}</h1>
        <button @click="$router.redirectTo('/test-sub2')">跳转到sub2</button>
        <button @click="$router.navigateBack()">返回到缓存的emun1</button>
    </div>
</template>

<script>
export default{
    name:'TestSub1',
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