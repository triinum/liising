

<p align="center">
   <i><strong>LHV liisingutaotluse esimene samm
</strong></i>
<p>

---


###   



### Mis asub kus
* /features - Cucumber featuuride fail – sealt saab muuta jutumärkides olevaid väärtusi
* /stepdefinitions – sammud
* /pagedefinitions – lehe elemendid
* /reports  - tulemused HTML kujul



### Alustamiseks

#### Eeldused
1.NodeJS installitud
https://nodejs.org/en/download/

2.Chrome või FF installtiud


#### Setup 
* Klooni repo
* Mine repo kausta ja käivita
```
   npm install 
```
* installitakse sõltuvused package.json failist node_modules kausta.

```
npm run webdriver-update
``` 

* Ühest käsureast
```
npm run webdriver-start
```

* Luuakse 'typeScript' kaust ja .ts failid konverditakse .js failideks
```
npm run build
```

* Teisest käsureast
```
npm test
```


