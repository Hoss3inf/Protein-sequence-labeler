const fs = require('fs');
const lineByLine = require('line-by-line')
let filelist = fs.readdirSync('./data/','utf-8','r');
let writeStream = fs.createWriteStream('./sequences.txt')
// console.log(filelist.length);

for (value of filelist) {
//    console.log('filelist:', filelist);
   let filename = extensionRemover(value);
   // console.log('filename:', filename);
   [family,sub,subsub] = filename.split('_');
   // console.log(family, sub, subsub);
let sequence;
    lr = new lineByLine('./data/'+ value,{encoding: 'utf-8',skipEmptyLines: true});
    lr.on('line', (line) => {
        
       if(!line.includes('gi')) {
            // console.log('line:', line,'\n');
        sequence = line;};
// console.log('line:', line,'\n');
protein = family + ',' + sub + ',' + subsub + ',' + sequence + '\n';
// console.log('protein:', protein);
writeStream.write(protein);

    })

};
// writeStream.close();





function extensionRemover(filename){
return filename.split('.')[0];
}

// console.log(filenames);

