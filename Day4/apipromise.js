var result;
var data = fetch("https://jsonplaceholder.typicode.com/todos/1")
  let getdata =(time, work) => {
    return new Promise((resolve , reject ) => {
      if(result != null ) {
        setTimeout(() => {
            resolve(work());

        }, time);

      } else {
        console.log("test");
        // reject(console.log("Data is not found"));
      }
    });
  }

  getdata(2000, () => console.log(`${result}`))
    .then (() => {
      return getdata(0000 , (response) => {
        console.log(response.json());
      });
    })

    .then (() => {
      return getdata(2000 , (user) => {
        console.log(user.result);
      });
    })

    .catch (() => {
      console.log("Error Occured");
    })

    .finally (() => {
      console.log("Program end");
    })


data.then(response => response.json())
.then(result => {
    console.log(result);

});
