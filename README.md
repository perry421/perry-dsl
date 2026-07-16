# Perry DSL

A declarative mini-language for generating SVG cover art.

```
npm install @perry/dsl
```

## Syntax

```
C:w,h,t,l,c  →  Circle (width, height, top%, left%, color)
D:s,t,l,c    →  Dot (size, top%, left%, color)
W:w,t,l      →  Waveform bar (width, top%, left%)
G:s,t,l      →  Grid (cell size, top%, left%)
B:w,h,t,l,c  →  Block (width, height, top%, left%, color)
L:h,t,l      →  Line (height, top%, left%)
F:w%,h%,t%,b →  Frame (width%, height%, top%, background)
N:text       →  Number badge
T:text       →  Tag label
```
