//------------1------------------------
min = 0;
max = 345;
arrLenght = 40;

for (i = 0, a = [], b = []; i < arrLenght; i++) {
  a[i] = Math.floor(Math.random() * (max - min) + min);
  b[i] = Math.floor(Math.random() * (max - min) + min);
}

console.log(a);
console.log(b);

for (i = 0; i < arrLenght; i++) {
  for (j = 0; j < arrLenght; j++) {
    if (a[i] == b[j]) {
      console.log(a[i]);
      break;
    }
  }
}

//------------2-----------------------

min = 0;
max = 567;
arrLenght = 20;

primeNumber: for (i = 0, arrA = [], arrB = []; i < arrLenght; i++) {
  arrA[i] = Math.floor(Math.random() * (max - min) + min);

  if (arrA[i] > 2) {
    for (j = 2; j < arrA[i]; j++) {
      if (arrA[i] % j == 0) continue primeNumber;
    }
  }
  arrB.push(arrA[i]);
}

console.log(arrA);
console.log(arrB);

for (i = 0, maxB = minB = arrB[0]; i < arrB.length; i++) {
  if (arrB[i] < minB) minB = arrB[i];
  if (arrB[i] > maxB) maxB = arrB[i];
}

console.log(minB);
console.log(maxB);

//--------------------3-----------------------

min = 23;
max = 345;
n = 10;

for (i = 0, arrayA = []; i < n; i++) {
  arrayA[i] = Math.floor(Math.random() * (max - min) + min);
}

console.log(`arrayA: ${arrayA}`);

for (i = 0, minIndex = maxIndex = 0; i < arrayA.length; i++) {
  if (arrayA[i] <= arrayA[minIndex]) minIndex = i;

  if (arrayA[i] >= arrayA[maxIndex]) maxIndex = i;
}

console.log(minIndex, maxIndex);

if (minIndex < maxIndex && maxIndex - minIndex > 1) {
  cropArrB = arrayA.slice(minIndex + 1, maxIndex);
} else if (maxIndex < minIndex && minIndex - maxIndex > 1) {
  cropArrB = arrayA.slice(maxIndex + 1, minIndex);
} else {
  cropArrB = arrayA;
}

console.log(cropArrB);

//--------------4-----------------------

min = 1;
max = 16;
n = 14;

for (i = 0, arrayLast = []; i < n; i++) {
  arrayLast[i] = Math.floor(Math.random() * (max - min) + min);
}

for (
  i = 0, minInd = maxInd = 0, minLast = maxLast = arrayLast[0];
  i < arrayLast.length;
  i++
) {
  if (arrayLast[i] < minLast) {
    minInd = i;
    minLast = arrayLast[i];
  }
  if (arrayLast[i] > maxLast) {
    maxInd = i;
    maxLast = arrayLast[i];
  }
}

console.log(`Before change ${arrayLast}`);

arrayLast[maxInd] = minLast;
arrayLast[minInd] = maxLast;

console.log(`After change ${arrayLast}`);
