// const get=()=>{
//     let hexa=document.getElementById('hexa').value
//     let upper=hexa.toUpperCase()
//     // console.log(upper)
//     if (length(hexa) != 6){
//         document.getElementById('alertt').style.display='block'
//         document.getElementById("body").style.background = "#fff"    

//     }else{
//         document.getElementById('alertt').style.display="none"
//         let r,g,b =convert(hexa)
//         document.getElementById("red").value = r
//         document.getElementById("green").value = g
//         document.getElementById("blue").value = b
//         document.getElementById("body").style.background = res    

        
        
//     }
    

// }


// const convert=(hexa_code)=>{
//     // heXa="0123456789ABCDEF"
//     let r=parseInt(hexa_code.slice(0,2),16)
//     let g=parseInt(hexa_code.slice(2,4),16)
//     let b=parseInt(hexa_code.slice(4,6),16)
//     return r , g , b
// }

const get = () => {
    let hexa = document.getElementById('hexa').value;
    let upper = hexa.toUpperCase();

    if (hexa.length != 7 || !isValidHex(hexa)) { // Vérifiez la longueur et la validité du code hexadécimal
        document.getElementById('alertt').style.display = 'block';
        document.getElementById("body").style.background = "#fff";    
    } else {
        document.getElementById('alertt').style.display = "none";
        let [r, g, b] = convert(hexa); // Utilisez destructuring pour obtenir les valeurs r, g et b
        document.getElementById("red").value = r;
        document.getElementById("green").value = g;
        document.getElementById("blue").value = b;
        document.getElementById("body").style.background = `rgb(${r}, ${g}, ${b})`;
    }
}

const convert = (hexa_code) => {
    let r = parseInt(hexa_code.slice(1, 3), 16); // Convertir les deux premiers caractères en décimal
    let g = parseInt(hexa_code.slice(3, 5), 16); // Convertir les caractères 3 et 4 en décimal
    let b = parseInt(hexa_code.slice(5, 7), 16); // Convertir les deux derniers caractères en décimal
    return [r, g, b]; // Retournez les valeurs r, g et b dans un tableau
}

const isValidHex = (hex) => {
    const validChars = '0123456789ABCDEF';
    for (let char of hex.slice(1)) {
        if (!validChars.includes(char)) {
            return false;
        }
    }
    return true;
}
// if (!validChars.includes(char)) { return false; }: Inside the loop, 
// this line checks if the current character char is not included in the validChars array. 
// validChars.includes(char) returns true if char is found in the validChars array,
//  and false otherwise. If char is not valid (i.e., not included in validChars), 
//  it means the hexadecimal color code is invalid, so the function returns false.

// return true;: If all characters in the hex string (excluding the '#' character) are valid, 
// the loop completes without encountering any invalid characters. In this case, the function
//  returns true, indicating that the hexadecimal color code is valid.
