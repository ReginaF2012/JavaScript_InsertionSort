function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

let studentArr = [{name: "Al Cooper" , grade: 4}, {name: "Bobby Tables" , grade: 4}, {name: "Gracie Hopper" , grade: 3}]

function insertionSortStudentsByGrade(studentsArray){
    for(let i = 1; i < studentsArray.length; i++){
        let current = studentsArray[i];
        let j = i - 1;
        while(j >= 0 && studentsArray[j]['grade'] > current['grade']){
            studentsArray[j + 1] = studentsArray[j];
            j--;
        }
        studentsArray[j + 1] = current;
    }
    return studentsArray;
}