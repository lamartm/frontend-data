// functie die twee parameters in krijgt dataArray en de column hiervan, vervolgens maak ik een nieuwe array met behulp van de .map() method die een functie gebruikt op de geselecteerde
// dataArray. De functie zelf laat alleen de properties/columns zien die geselecteerd zijn.
export function filteredData (dataArray, column) {
    return dataArray.map(result => result[column])
}