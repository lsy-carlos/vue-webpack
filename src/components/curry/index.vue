<template>
  <div>
    柯里化
    <button @click="strictCurry()">运行</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  }, 
  created() {
    /* ------------------------ 柯里化 ------------------------ */
        function addNumber(x,y,z,c,v){
          return x+y+z+c+v;
        }
        const add11 = addNumber.bind(null,'h');
        console.log(add11.length);
        
        const add21 = add11.bind(null,'e');
        console.log(add21.length);
        const add31 = add21.bind(null,'l');
        console.log(add31.length);
        const add41 = add31.bind(null,'l');
        console.log(add41.length);
        const add51 = add41.bind(null,'o')
        console.log(add51.length);
        console.log(add51());
        
        

        const curry = (fn)=>{
            return (...args)=>{
                if(args.length >= fn.length){
                    return fn(...args);
                }else{
                    return curry(fn.bind(null,...args));
                }
            }
        }
        
        const add = curry((x,y,q,z)=>x+y+z+q);
        console.log(
            add(1)(2)(3)(4),
            add(1,2,3,4),
            add(1,2)(3,4)
        )

        const add1 = (...args)=>{
            let arrArg = args;

            let temp = (...xs)=>{
                arrArg = [...arrArg,...xs];
                return temp;
            }
            temp.toString = ()=>arrArg.reduce((a,b)=>a+b);

            return temp;
        }
        console.log(
            add1(1)(2),
            add1(2)(3,4)
        );
        // alert(add1(2)(5)(4,5,6))
        /* ------------------------------------------------ */
  },  
  methods:{
    strictCurry(){
      function strictCurry(fn) {
        return (x) => {
          console.log(fn);
          if (fn.length <= 1) {
            return fn(x);
          }
          return strictCurry(fn.bind(null, x));
        };
      }
      const multiply = (x,y,z,c)=>{
        console.log(x+y+z+c);
        
      };
      strictCurry(multiply)(2)(3)(4)(1)
    }
  }
}
</script>