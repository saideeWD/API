const normolPerson = {
    firstname : "sabbir",
    lastName : "hasan",  
    salary : 15000 ,
    getFullName : function(){
        console.log(this.firstname, this.lastName);
    },
    chargeBill: function(amount , tips , tax){
        console.log(this)
     this.salary = this.salary - amount - tips - tax ;
      return this.selary ;


    }

}

const heroAlom={
    firstname : 'hero alom',
    lastName : " khan",
    salary : 25000,
}
const siyambabu ={
    firstname : 'siyambabu',
    lastName : "fisher",
    salary : 30000 ,
}
const routingBoss ={
    firstname: "Salmu ",
    lastName : " emmn",
    salary : 35000 
}

// const chargeBillprovide = normolPerson.chargeBill.bind(heroAlom);
// chargeBillprovide(2000);
// chargeBillprovide(3000);
// console.log(heroAlom.salary);

// const routingBossChargbill = normolPerson.chargeBill.bind( routingBoss);
// routingBossChargbill(2000);
// routingBossChargbill(3000);
// console.log(routingBoss.salary);
// normolPerson.chargeBill.call(heroAlom,6000 , 10, 100);
// normolPerson.chargeBill.call(heroAlom,4000, 16, 30);
// console.log(heroAlom.salary);

// normolPerson.chargeBill.call(routingBoss, 2000, 14, 140);
// console.log(routingBoss.salary);


normolPerson.chargeBill.apply(heroAlom, [ 2000 , 30 , 78 ]);
normolPerson.chargeBill.apply(heroAlom, [ 1200 , 30 , 178 ]);
console.log(heroAlom.salary);