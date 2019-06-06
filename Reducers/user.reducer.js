export default function (user={},action){
  if (action.type==='setUser') {
    // console.log('jesuis danmonREDUCER',action);
      var userCopy= {...user,
        userId:action.userId,
        name: action.name,
        email: action.email,
        dog1:action.dog1,
        dog1gender:action.dog1gender,
        avatar:action.avatar,
        token: action.token
    }
      return userCopy

  }else {
    return user
  }


}
