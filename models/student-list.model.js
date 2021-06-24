class Batch  {

    static fromAPIArrayData(data)  {
        var result = [];

        data.map( value => {
            if(!result.length)  {
                result.push({ group: value.group, data: [value]})
            }
            else {
                result.forEach((resVal, index, self) => {
                    if(resVal.group == value.group) {
                        self[index].data = [ ...self[index].data, value]
                    }
                    else {
                        result.push({ group: value.group, data: [value]})
                    } 
                })
            }
        })

        return result

    }

    constructor()  {}
}

export default Batch;

