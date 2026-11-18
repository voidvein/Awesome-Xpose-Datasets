const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {normalize,safeUrl,filterDatasets,yearCounts}=require('../app.js');
const raw=JSON.parse(fs.readFileSync(path.join(__dirname,'../datasets.json'),'utf8')),data=raw.map(normalize);
assert.ok(data.length>=45);assert.equal(new Set(data.map(p=>p.id)).size,data.length);
for(const p of data){for(const k of ['id','name','summary','scale','access','license','url'])assert.ok(typeof p[k]==='string'&&p[k].trim(),p.id+': '+k);assert.ok(Number.isInteger(p.year)&&p.year>=1900&&p.year<=2100);assert.ok(p.categories.length&&p.categories.every(x=>['Head','Hand','Human'].includes(x)));assert.ok(p.dimensions.every(x=>['2D','3D'].includes(x)));if(!p.dimensions.length)assert.ok(p.notes.includes('未核实'));assert.ok(p.modalities.length&&p.annotations.length);assert.ok(safeUrl(p.url));assert.ok(p.sources.length);for(const s of p.sources)assert.ok(safeUrl(typeof s==='string'?s:s.url));}
const before=JSON.stringify(data);for(const category of ['Head','Hand','Human']){const found=filterDatasets(data,{category});assert.ok(found.length>=15);assert.ok(found.every(p=>p.categories.includes(category)));assert.equal(yearCounts(data,{category}).reduce((a,x)=>a+x.count,0),found.length);}
for(const dimension of ['2D','3D'])assert.ok(filterDatasets(data,{dimension}).every(p=>p.dimensions.includes(dimension)));
assert.equal(filterDatasets(data,{query:'no-such-dataset-xyz'}).length,0);assert.equal(yearCounts(data,{query:'no-such-dataset-xyz'}).length,0);
assert.ok(filterDatasets(data,{query:'interhand'}).some(p=>p.id==='interhand26m'));
assert.deepEqual(yearCounts(data,{category:'Hand',year:'2020'}),yearCounts(data,{category:'Hand'}));
const mixed=filterDatasets(data,{category:'Hand',dimension:'3D',modality:'RGB',year:'2020'});assert.ok(mixed.every(p=>p.year===2020&&p.categories.includes('Hand')&&p.dimensions.includes('3D')&&p.modalities.includes('RGB')));
assert.equal(JSON.stringify(data),before);assert.equal(safeUrl('javascript:alert(1)'),'');assert.equal(safeUrl('https://user:pass@example.com'),'');
const synthetic=[normalize({id:'multi',name:'Multi',year:2020,categories:['Head','Human'],dimensions:['2D'],modalities:['RGB']})];assert.equal(filterDatasets(synthetic,{category:'Head'}).length,1);assert.equal(yearCounts(synthetic).reduce((a,x)=>a+x.count,0),1);
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');for(const id of ['search','dimension','year','modality','sort','categories','cards','year-chart','detail-view'])assert.ok(html.includes('id="'+id+'"'));
console.log('PASS: '+data.length+' unique sourced datasets; schema, URLs, categories, dimensions, combined filters, dynamic chart/year isolation, safe links, multitag deduplication and nonmutation.');
