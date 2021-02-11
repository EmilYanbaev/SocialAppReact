export const required = (value)=>{
   return  value ? undefined: "Require Form"
}

export const maxLengthCreator = (length)=>{
   return (value)=>{
      return value.length>length ?`Max length ${length}`:undefined;
   }
}