export const required = (value)=>{
   return  value ? undefined: "Require Form"
}

export const maxLengthCreator = (length)=>{
   return (value)=>{
      return value.length>length ?`Max length ${length}`:undefined;
   }
}

export const isValidURL = (value) =>{
   if(!value)
   return undefined;
   
   let res = value?.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
   return (res !== null)? undefined:"invalid Url"
 };