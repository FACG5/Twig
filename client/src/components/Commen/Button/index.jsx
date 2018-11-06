import React from 'react';
 export default  function Button (props){
   const {className,value}=props;
    return ( 
      <button className={className}>{value}</button>
     );
}
 
 
