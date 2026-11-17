import{t as e}from"./jsx-runtime-DlN7qj9J.js";var t=e(),n=[`FT`,`FI1`,`FI2`],r=`Trial`,i=e=>{let t=Number(e)||0;return t>0&&t<=10},a=(e,t)=>i(t)&&n.includes(e);function o(e){return String(e??``).trim().toUpperCase().replace(/-00-80$/,``)}function s(e,t){let n=o(t);return n?e.find(e=>e.aktif!==!1&&o(e.partNumber)===n)??null:null}var c=new Set([`MESIN`,`MACHINE`,`TOOL`,`ALAT`,`ROBOT`,`JIGS`,`JIG`,`FIXTURE`,`MOLD`,`DIE`,`CNC`,`AI`]),l=new Set([`MATERIAL`,`BAHAN`,`KOMPONEN`,`PART`,`PARTS`,`SUPPLIER`,`VENDOR`,`WIRE`,`SOCKET`,`TERMINAL`]),u=new Set([`METHOD`,`METODE`,`SOP`,`PROSEDUR`,`STANDAR`,`STANDARD`,`PROCESS`,`PROSES`]);function d(e){if(!e||e===`—`)return e||`—`;let t=String(e);if(t.startsWith(`[`))return t;let n=t.toUpperCase();return c.has(n)?`[MACHINE]:${t}`:l.has(n)?`[MATERIAL]:${t}`:u.has(n)?`[METHOD]:${t}`:`[MAN]:${t}`}var f=[`Januari`,`Februari`,`Maret`,`April`,`Mei`,`Juni`,`Juli`,`Agustus`,`September`,`Oktober`,`November`,`Desember`];function p(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e??``));if(!t)return String(e??``);let[,n,r,i]=t,a=f[Number(r)-1];return a?`${Number(i)} ${a} ${n}`:String(e)}function m(e){return o(e)||`—`}function h(e){let t=String(e??``).trim();return!t||t===`—`?`—`:/^FA\./i.test(t)?t:`FA.${t.replace(/^(group|assembly)\s+/i,``).trim()||t}`}function g(e){return String(e??``).toLowerCase().replace(/(^|[^\p{L}])(\p{L})/gu,(e,t,n)=>t+n.toUpperCase())}function _(){return{no:``,namaProduk:``,jenisDefect:``,jumlah:``,totalProduksi:``,keterangan:``,tebalProduk:!1,tebalJenis:!1,tebalKeterangan:!1}}function v(e){let t=String(e?.jenis??``).trim(),n=String(e?.keterangan??``).trim();return t?n?`- ${t}/${n}`:`- ${t}`:`-`}function y(e=[],{partNumber:t=``}={}){let n=Array.isArray(e)?e:[],r=[];for(let e of n){let n=Array.isArray(e?.grup)?e.grup:[],i=[],a=new Map,o=0;for(let e of n){let t=Array.isArray(e?.rows)?e.rows:[];for(let e of t){i.push({jenisDefect:v(e),jumlah:String(e?.jumlah??``),tebal:!1});let t=Number(e?.jumlah)||0;o+=t,a.set(e?.jenis,(a.get(e?.jenis)??0)+t)}i.push({jenisDefect:`= ${d(e?.pelaku)}`,jumlah:``,tebal:!0})}let s=[`Total NG: ${o}`,...[...a.entries()].sort((e,t)=>(t[1]??0)-(e[1]??0)||String(e[0]).localeCompare(String(t[0]))).map(([e,t])=>`${e}: ${t}`)];r.length>0&&r.push(_());let c=Number(e?.totalProduksi),l=Math.max(i.length,1+s.length);for(let a=0;a<l;a+=1)if(a===0)r.push({no:``,namaProduk:String(t??``),jenisDefect:n.length===0?`-`:i[0]?.jenisDefect??``,jumlah:n.length===0?`-`:String(i[0]?.jumlah??``),totalProduksi:c>0?String(c):``,keterangan:String(e?.nama??e?.code??``),tebalProduk:!0,tebalJenis:n.length===0?!0:!!i[0]?.tebal,tebalKeterangan:!0});else{let e=i[a]??{jenisDefect:``,jumlah:``,tebal:!1},t=s[a-1]??``;r.push({no:``,namaProduk:``,jenisDefect:e.jenisDefect,jumlah:e.jumlah,totalProduksi:``,keterangan:t,tebalProduk:!1,tebalJenis:!!e.tebal,tebalKeterangan:t.startsWith(`Total NG`)})}}return r.forEach((e,t)=>{e.no=String(t+1)}),r}function b(e=[],t=20){let n=Array.isArray(e)?e:[],r=Math.max(1,Math.trunc(Number(t)||20)),i=Math.max(1,Math.ceil(n.length/r)),a=[];for(let e=0;e<i;e+=1){let t=n.slice(e*r,(e+1)*r).map(e=>({...e}));for(;t.length<r;)t.push(_());t.forEach((e,t)=>{e.no=String(t+1)}),a.push(t)}return a}function x(e=[]){let t=Array.isArray(e)?e:[],n=[],r=Math.max(1,Math.ceil(t.length/2));for(let e=0;e<r;e+=1)n.push({atas:t[e*2]??b([])[0],bawah:t[e*2+1]??b([])[0]});return n}var S=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),C=(e,t)=>t&&e?`<b>${S(e)}</b>`:S(e),w=[{teks:`NO`,kelas:`k-no`},{teks:`NAMA PRODUK`,kelas:`k-produk`},{teks:`JENIS DEFECT`,kelas:``},{teks:`JUMLAH<br>DEFECT`,kelas:`k-jumlah`},{teks:`TOTAL<br>PRODUKSI`,kelas:`k-produksi`},{teks:`KETERANGAN`,kelas:`k-ket`}];function T(e,{judul:t,identitas:n,footer:r}){let i=(n??[]).flatMap(({judul:e,teks:t})=>[`<span class="i-label">${S(e)}</span>`,`<span class="i-titik">:</span>`,`<span class="i-isi">${S(t)}</span>`]).join(``),a=(e??[]).map(e=>`<tr>
        <td class="c">${S(e.no)}</td>
        <td>${C(e.namaProduk,e.tebalProduk)}</td>
        <td>${C(e.jenisDefect,e.tebalJenis)}</td>
        <td class="c">${S(e.jumlah)}</td>
        <td class="c">${S(e.totalProduksi)}</td>
        <td>${C(e.keterangan,e.tebalKeterangan)}</td>
      </tr>`).join(``);return`<section class="bagian">
  <div class="judul">${S(t)}</div>
  <div class="identitas">${i}</div>
  <div class="tabel"><table>
    <thead><tr>${w.map(e=>`<th class="${e.kelas}">${e.teks}</th>`).join(``)}</tr></thead>
    <tbody>${a}</tbody>
  </table></div>
  <div class="footer">${S(r)}</div>
</section>`}function E({judul:e=`DATA DEFECT HARIAN`,identitas:t=[],lembar:n=[],footer:r=[`SCH - FRQ - 02 - 04 Rev . 02`,`SCH - FRQ - 02 - 04 Rev . 03`]}={}){let[i,a]=r,o=(Array.isArray(n)?n:[]).map(n=>`<div class="lembar">
  ${T(n?.atas,{judul:e,identitas:t,footer:i})}
  <div class="pemisah"></div>
  ${T(n?.bawah,{judul:e,identitas:t,footer:a})}
</div>`).join(``);return`<!DOCTYPE html>
<html lang="id"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=794, initial-scale=1, shrink-to-fit=no">
<title>${S(e)}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:200mm}
/* Font SAMA dengan aplikasi Quality YMH (final-assembly-app): stack --font-sans
   bawaan Tailwind-nya. Di PC yang sama keduanya kini memakai huruf yang sama
   (di mesin ini Noto Sans; di Windows Segoe UI) — dulu kertas ini Arial
   sementara Quality YMH memakai stack sistem, jadi dua kertas untuk data yang
   sama tercetak dengan huruf berbeda. Font sistem, bukan berkas font: kertas
   dicetak dari iframe srcdoc, dan merujuk /assets/.woff2 dari sana akan pecah
   di Halaman Peragaan (subpath /demo-cbs/). */
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:8.6pt;color:#000}
:root{--k-ket:42mm;--k-label-ket:15.5mm;--k-titik-ket:3.6mm}
@page{size:A4 portrait;margin:5mm}
.lembar{width:200mm;display:flex;flex-direction:column;page-break-after:always;break-after:page}
.lembar:last-child{page-break-after:auto;break-after:auto}
.bagian{display:grid;grid-template-rows:auto auto 1fr auto;min-height:141mm;
  page-break-inside:avoid;break-inside:avoid}
.pemisah{height:2mm;border-top:0.6mm solid #000;flex:0 0 auto}
.judul{text-align:center;font-size:12pt;font-weight:bold;letter-spacing:.4pt;margin-bottom:1.4mm}
/* Grid identitas = DUA ruas per baris (6 kolom: label · titik · isi, dua kali).
   Tiga kolom terakhir dipatok supaya jumlahnya PERSIS selebar kolom KETERANGAN
   tabel (--k-ket), jadi label Group & Dibuat oleh mulai di garis kiri kolom itu
   — bukan di tengah halaman seperti grid "bagi rata" sebelumnya. Satu variabel
   dipakai tabel & grid: mengubah lebar KETERANGAN tak bisa lagi membuat keduanya
   lepas. Nilai isi ruas kanan tinggal 22,9 mm (42 − 15,5 − 3,6): cukup untuk
   Group A / RIZAL / titik-titik tanda tangan QA, yang terpanjang 19,8 mm. */
.identitas{display:grid;
  grid-template-columns:max-content max-content minmax(0,1fr) var(--k-label-ket) var(--k-titik-ket) calc(var(--k-ket) - var(--k-label-ket) - var(--k-titik-ket));
  column-gap:0;row-gap:.5mm;font-size:8.4pt;margin-bottom:1.2mm;align-items:baseline}
.i-label{white-space:nowrap}
.i-titik{padding:0 1.2mm}
.i-isi{font-weight:500;overflow-wrap:break-word}
.tabel{flex:1 1 auto;min-height:0}
table{width:100%;height:100%;border-collapse:collapse;table-layout:fixed;font-size:8.6pt}
th{border:1px solid #000;font-size:7.8pt;font-weight:bold;text-align:center;vertical-align:middle;
  padding:.8mm .8mm;line-height:1.05}
td{border:1px solid #000;padding:.6mm 1.1mm;vertical-align:middle;line-height:1.05;
  word-break:break-word;overflow-wrap:break-word}
td.c{text-align:center}
/* Lebar kolom (mm). NAMA PRODUK 27 mm (dulu 30): isinya cuma nomor dasar part
   number yang tak pernah sepanjang itu, sementara JENIS DEFECT memuat
   "- jenis/keterangan" & baris "= [KATEGORI]:NAMA" yang paling sering
   membungkus — 3 mm itu pindah ke sana. Sisa lebar (87 → 90 mm) jatuh ke JENIS
   DEFECT karena kolomnya tanpa width di table-layout:fixed. */
.k-no{width:7mm}
.k-produk{width:27mm}
.k-jumlah{width:16mm}
.k-produksi{width:18mm}
.k-ket{width:var(--k-ket)}
.footer{flex:0 0 auto;height:3.6mm;line-height:3.6mm;font-size:7.4pt;margin-top:.8mm}
</style></head><body>
${o}
</body></html>`}function D({baris:e=[],className:n=``}){let r=`border border-slate-300 px-2 py-1.5 align-middle`;return(0,t.jsxs)(`table`,{className:`w-full border-collapse text-sm ${n}`,children:[(0,t.jsx)(`thead`,{children:(0,t.jsxs)(`tr`,{className:`bg-slate-100 text-slate-800 uppercase text-[11px] tracking-wide`,children:[(0,t.jsx)(`th`,{className:`${r} w-[6%] text-center font-bold`,children:`No`}),(0,t.jsx)(`th`,{className:`${r} w-[12%] text-center font-bold`,children:`Nama Produk`}),(0,t.jsx)(`th`,{className:`${r} text-center font-bold`,children:`Jenis Defect`}),(0,t.jsxs)(`th`,{className:`${r} w-[9%] text-center font-bold leading-tight`,children:[`Jumlah`,(0,t.jsx)(`br`,{}),`Defect`]}),(0,t.jsxs)(`th`,{className:`${r} w-[10%] text-center font-bold leading-tight`,children:[`Total`,(0,t.jsx)(`br`,{}),`Produksi`]}),(0,t.jsx)(`th`,{className:`${r} w-[22%] text-center font-bold`,children:`Keterangan`})]})}),(0,t.jsx)(`tbody`,{children:e.map((e,n)=>(0,t.jsxs)(`tr`,{className:`even:bg-slate-50`,children:[(0,t.jsx)(`td`,{className:`${r} text-center text-xs text-slate-600`,children:e.no}),(0,t.jsx)(`td`,{className:`${r} text-slate-700`,children:(0,t.jsx)(`span`,{className:e.tebalProduk?`font-bold`:``,children:e.namaProduk})}),(0,t.jsx)(`td`,{className:`${r} break-words text-slate-700`,children:(0,t.jsx)(`span`,{className:e.tebalJenis?`font-bold`:``,children:e.jenisDefect})}),(0,t.jsx)(`td`,{className:`${r} text-center font-bold text-rose-700`,children:e.jumlah}),(0,t.jsx)(`td`,{className:`${r} text-center text-slate-700`,children:e.totalProduksi}),(0,t.jsx)(`td`,{className:`${r} break-words text-slate-600`,children:(0,t.jsx)(`span`,{className:e.tebalKeterangan?`font-bold text-slate-800`:``,children:e.keterangan})})]},n))})]})}function O({label:e=r}){return(0,t.jsx)(`div`,{className:`absolute inset-0 z-10 flex items-center justify-center rounded-md bg-emerald-50`,children:(0,t.jsx)(`span`,{className:`text-3xl font-bold tracking-wide text-emerald-700`,children:e})})}export{y as a,h as c,p as d,s as f,x as i,d as l,a as m,D as n,E as o,r as p,b as r,g as s,O as t,m as u};