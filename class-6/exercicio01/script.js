const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

companies.forEach((companie) => console.log(`O nome desta empresa é ${companie.name} e foi fundada em ${companie.start}`))


const criadasApos1987 = () =>
  companies.filter((companie) => companie.start > 1987 ) 
console.log(criadasApos1987())


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const somaArray = ages.reduce((acc, age) => acc + age, 0) 
console.log(somaArray)


const {name, category}  = companies[0];
const newCompanie = {name, category}
console.log(newCompanie)


const person = {
  name: "Costas",
  address: {
street: "Lalaland 12"
  }};

  
const { address: {street} } = person;
console.log(street)

const avaliaEmpresa = () => companies.map((companie) => companie.start > 1996 && companie.end < 2004 === true)
console.log(avaliaEmpresa())

