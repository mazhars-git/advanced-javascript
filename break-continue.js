let numbs = [1, -2, 3, 5, -6, 8, 9, -11];

for (let i = 0; i < numbs.length; i++) {
   
    if (numbs[i] > 6){
        break;
    }
    //console.log(numbs[i]);      
}
for (let i = 0; i < numbs.length; i++) {
   
    if (numbs[i] < 0){
        continue;
    }
    console.log(numbs[i]);
}
