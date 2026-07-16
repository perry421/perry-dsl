function parseDSL(instructions) {
  let bg = 'background:#070B1A', elements = [];
  for (let i = 0; i < instructions.length; i++) {
    const p = instructions[i], t = p[0];
    if (i === 0 && p.startsWith('bg:')) { bg = p.replace('bg:', 'background:'); continue; }
    let m;
    if (t === 'C') { m = p.match(/C:([\d.]+),([\d.]+),([\d.]+)%,([\d.]+)%,(.+)/); if (m) elements.push(`<div class="cv-c" style="width:${m[1]}px;height:${m[2]}px;top:${m[3]}%;left:${m[4]}%;background:${m[5]}"></div>`); }
    else if (t === 'N') { elements.push(`<div class="cv-n">${p.slice(2)}</div>`); }
    else if (t === 'T') { elements.push(`<span class="cv-t">${p.slice(2)}</span>`); }
  }
  return `<div class="cover" style="${bg}">${elements.join('')}</div>`;
}
module.exports = { parseDSL };
