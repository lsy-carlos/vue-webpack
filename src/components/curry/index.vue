<template>
  <div>
    柯里化
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
        alert(add1(2)(5)(4,5,6))
        /* ------------------------------------------------ */
  },  
}
</script>