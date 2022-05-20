let stock = {
  fruits : ["Orange" ," Banana " ," Apple"]
};
let order = (fruit_name , call_production) => {
  setTimeout(() => {
      console.log(`${stock.fruits[fruit_name]} was selected ,call production`);
      call_production();
  },2000);
    
};

let production = () => {
  console.log("Order recivied , start production");
};

order(0, production);
