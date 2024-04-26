<template>
    <div>
        <h1>sub2-{{ timer }}</h1>
        <button @click="$router.navigateBack()">返回到sub1</button>
        <button @click="$router.reLaunch('/test-menu2')">清除所有缓存跳转到menu2</button>
    </div>
</template>

<script>
export default{
    name:'TestSub2',
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