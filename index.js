// console.log('it was not easy at all')
const hasDriversLicense = true; //A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);//not inverts true to false and false to true

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log('Sarah can comfortably drive!')
// }else{
//     console.log('someone else should drive ...!')
// }

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah can comfortably drive!')//we can set the condtion inside if
// }else{
//     console.log('someone else should drive ...!')
// }

const isTired = false;
console.log(hasDriversLicense|| hasGoodVision ||isTired);


if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah can comfortably drive!')//we can set the condtion inside if
}else{
    console.log('someone else should drive ...!')
}
