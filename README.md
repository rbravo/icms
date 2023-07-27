# icms
Tabela de ICMS interno e interestadual em javascript

### Instalação

##### Node
```bash
npm install --save icms
```
##### HTML
```html
<script src="https://cdn.jsdelivr.net/gh/rbravo/icms@master/dist/icms.js"></script>
```

### Utilização

##### JS:

```javascript
var icms = require('icms'),
    aliquotaDfGo = icms('df', 'go'),
    aliquotaInternaDf = icms('df');

console.log(aliquotaDfGo); // 12
console.log(aliquotaInternaDf); // 18
```

##### ou HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/rbravo/icms@master/dist/icms.js"></script>
<script>
    var aliquotaDfGo = icms('df', 'go');
    var aliquotaInternaDf = icms('df');
</script>
```

### Atualizado para 2023 a partir da tabela:

![image](https://github.com/rbravo/icms/assets/2054303/7358e2bf-8b86-4002-9853-8ffb568bedfc)


### Licença MIT
