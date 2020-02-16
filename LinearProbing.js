// YAYYYYY I HAVE FINALLY DONE THIS ON MY OWN!!!
// Separate Chaining is better than Linear Probing, but I don't how to do that yet. Must look at the new ES6 Map function.
// Linear probing is much more simpler and works!
// Gotta learn Separate Chaining and stuff

// This is my first Data Structure!

myarr = []
data = []

function hash(mystr){
  pos = 0
  const H = 37
  for(let i = 0; i < mystr.length; i++){
    pos += pos * H + mystr.charCodeAt(i)
  }
  pos %= 37
  return parseInt(pos)
}

function put(str, text){
  pos = hash(str)
  if (myarr[pos] === undefined){
    myarr[pos] = str
    data[pos] = text
  }
  else{
    while (myarr[pos] !== undefined){
      pos++
    }
    myarr[pos] = str
    data[pos] = text
  }
}

function get(str){
  pos = hash(str)
  if (myarr[pos] == str){
    return `
    Index: ${pos}
    Key: ${str}
    Data: ${data[pos]}
    `
  }
  else{
    times_probed = 0
    while(myarr[pos] != str){
      pos++
      times_probed++
    }
    return `
      Linear Probed ${times_probed} time(s)
      Current Index: ${pos}
      Key: ${str}
      Data: ${data[pos]}
    `
  }
}

put("Neelansh", "Dogs make the world better")
put("Gin", "Aviation Gin can take you places (literally) - Ryan Reynolds 2030")
