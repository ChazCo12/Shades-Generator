export const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // return {r, g, b} 
    return [ r, g, b ];
}

export const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export const rgb2hex = (r,g,b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const arrayToString = (rgb) => {
  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}