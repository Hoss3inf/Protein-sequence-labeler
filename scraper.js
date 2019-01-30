const fs = require('fs');
let filelist = fs.readdirSync('./data/','utf-8','r');
let writeStream = fs.createWriteStream('./sequences.txt');

for (value of filelist) {
   let filename = extensionRemover(value);
   [family,sub,subsub] = filename.split('_');
fs.readFileSync('./data/'+value).toString().split('\n').forEach(function (line) { 
    if(!line.includes('gi') && line.length>1) {
protein = family + ',' + sub + ',' + subsub + ',' + line + '\n';
writeStream.write(protein);
};
 });
};

function extensionRemover(filename){
return filename.split('.')[0];
}



