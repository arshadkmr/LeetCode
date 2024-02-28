const formatDate = (str) => {
    const monthsMapping = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12'
    };
    const [date, month, year] = str.split(' ')
    const updatedDate= (function(){
        let store=''
        for(let i=0;i<date.length;i++){
            if(date[i]>'a'){
                break
            }
            store+=date[i]
        }
            if(store.length===1){
                store=`0${store}`
            }
        
        return store
    })();
    return `${year}-${monthsMapping[month]}-${updatedDate}`
}

let date = "6th Jun 1933"
console.log(formatDate(date));