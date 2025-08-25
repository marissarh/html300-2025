export default{
    data(){
        return{
            hasBorder:false
        }
    },
    methods:{
        toggleBorder(){
            this.hasBorder = !this.hasBorder
        }
    }
}