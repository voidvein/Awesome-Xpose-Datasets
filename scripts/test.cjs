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
const {datasetImages}=require('../app.js');
const example={src:'assets/previews/test.webp',source:'https://example.com/data',alt:'Dataset sample showing annotated hand joints',caption:'Sample',attribution:'Dataset authors',license:'CC BY 4.0',license_url:'https://creativecommons.org/licenses/by/4.0/',verified_at:'2026-11-18'};
assert.equal(datasetImages({images:[example]}).length,1);
assert.equal(datasetImages({images:[example,example]}).length,1);
for(const key of ['src','source','alt','attribution','license','verified_at'])assert.equal(datasetImages({images:[{...example,[key]:''}]}).length,0,key+' required');
for(const src of ['../private.png','assets/previews/../secret.png','javascript:alert(1)','data:image/png;base64,a','assets/previews/test.svg'])assert.equal(datasetImages({images:[{...example,src}]}).length,0);
assert.equal(datasetImages({images:[{...example,src:'https://example.com/sample.jpg'}]}).length,1);
for(const p of raw)for(const f of datasetImages(p)){if(f.src.startsWith('assets/'))assert.ok(fs.existsSync(path.join(__dirname,'..',f.src)),p.id+' local image exists');}
console.log('PASS: verified image schema, attribution gate, safe paths/HTTPS, deduplication and local image existence.');
const crypto=require('node:crypto');
const manifestFile=path.join(__dirname,'../assets/previews/manifest.json');
if(fs.existsSync(manifestFile)){const manifest=JSON.parse(fs.readFileSync(manifestFile,'utf8'));for(const m of manifest){const p=raw.find(x=>x.id===m.dataset_id),image=datasetImages(p).find(x=>x.src===m.src);assert.ok(image,m.dataset_id+' manifest image is displayed');assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname,'..',m.src))).digest('hex'),m.sha256);if(image.kind==='page-screenshot'){assert.ok(m.captured_at&&m.rights_note);}else {assert.ok(m.modifications&&m.rights_evidence);assert.equal(image.license,m.license);}assert.equal(image.source,m.source);}console.log('PASS: image manifest integrity, source/license consistency and original file checksums.');}
const screenshot={src:'assets/previews/test.png',kind:'page-screenshot',source:'https://example.com',alt:'Official project page',caption:'官网页面截图',attribution:'Project authors',captured_at:'2026-11-18',rights_note:'Page copyright remains with original authors.'};
assert.equal(datasetImages({images:[screenshot]}).length,1);
for(const key of ['source','attribution','captured_at','rights_note'])assert.equal(datasetImages({images:[{...screenshot,[key]:''}]}).length,0,key+' required for screenshot');
assert.equal(datasetImages({images:[{...screenshot,kind:'dataset-sample'}]}).length,0,'Screenshots do not relax sample license gate');
console.log('PASS: separate screenshot provenance gate; no implied dataset/sample license.');
const {datasetPapers}=require('../app.js');
const paper={title:'Example Dataset Paper',url:'https://example.com/paper',venue:'CVPR',year:2021};
assert.equal(datasetPapers({papers:[paper,paper]}).length,1);
assert.equal(datasetPapers({papers:[{...paper,url:'javascript:bad'}]}).length,0);
assert.equal(datasetPapers({papers:[{...paper,title:''}]}).length,0);
assert.equal(datasetPapers({papers:[{title:paper.title,url:paper.url}]}).length,1);
assert.equal(datasetPapers({papers:[{...paper,year:0} ]})[0].year,null);
assert.equal(filterDatasets([normalize({id:'test',name:'Test',year:2020,papers:[paper]})],{query:'Example Dataset Paper'}).length,1);
console.log('PASS: associated paper schema, URL/title gate, deduplication, unknown venue/year and linked-paper search.');
for(const p of raw){assert.ok(datasetPapers(p).length>0,p.id+' has a verified associated paper');assert.equal(datasetPapers(p).length,p.papers.length,p.id+' paper list passes schema without dropping entries');for(const paper of p.papers){assert.ok(paper.venue&&Number.isInteger(paper.year),p.id+' source venue/year provided');}}
console.log('PASS: all catalog entries have valid paper metadata; publication years remain independent of dataset years.');
const css=fs.readFileSync(path.join(__dirname,'../style.css'),'utf8');
assert.ok(css.includes('.dataset-preview-link,.dataset-preview-fallback{height:auto;min-height:0;aspect-ratio:16/10'));
assert.ok(css.includes('@media(max-width:550px){.dataset-preview-link,.dataset-preview-fallback{height:auto;min-height:0;aspect-ratio:16/10}'));
assert.ok(css.includes('.preview-caption{height:43px;min-height:43px;max-height:43px'));
console.log('PASS: common real/placeholder preview geometry, equal caption heights and mobile ratio override.');
