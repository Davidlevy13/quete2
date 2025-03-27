import 'dotenv/config'


const  cowsay  =  require ( "cowsay" ) ;
const name = process.env.NAME;
const city = process.env.CITY;

console . log ( cowsay . say ( { 
    text : `I am ${name}, wilder in ${city}` , 
    e : "oO" , 
    T : "U " 
} ) ) ;



