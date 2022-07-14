function translatePigLatin(str) {

    const vowel = ["a", "e", "i", "o", "u"];
    let findings = "";
    let results = "";
    
    if (vowel.includes(str[0])) {
        results = str + "way";
    }
    else {

        for (let x = 0; x < str.length; x++) {
            if (vowel.includes(str[x]) == false) {
                findings += str[x];
            }
            else break;
        }
        results = str.slice(findings.length, ) + findings + "ay";
    }
    return results;
  }
  
  console.log(translatePigLatin("algorithm"));