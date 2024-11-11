export function toSlug(mot: string): string {
    return mot
        .toLocaleLowerCase()             
        .normalize("NFD")                
        .replace(/[\u0300-\u036f]/g, "") //     /[\u0300-\u036f]/g=== diacritiques
        .replace(/[^a-z0-9\s-]/g, "")    // /[^a-z0-9\s-]/g===caractères spéciaux
        .replace(/\s+/g, '-')            //    /\s+/g===les espaces 
        .replace(/-+/g, '-');                  //https://unicode-explorer.com/blocks
}