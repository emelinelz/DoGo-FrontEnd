// export default function (promenadeId={},action){
//   console.log('jesuis danmonREDUCER',action);
//   if (action.type==='selectPromenade') {
//       var promenadeCopy= {...promenadeId,
//         promenadeId:action.promenadeId
//     }
//       return promenadeCopy

//   }else {
//     return null
//   }


// }

export default function(promenade = {}, action) {
  console.log('jesuis danmonREDUCER',action);
  if(action.type == 'selectPromenade') {
      return action.promenadeId
      
  } else {
      return promenade;
  }
  
}
