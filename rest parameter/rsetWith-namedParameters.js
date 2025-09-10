function greet(firstName, lastName, ...titles) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`titles: ${titles.join(',')}`);
}
greet("afdel","aboobacker","b.e","mernstack","fullstackdeveloper");