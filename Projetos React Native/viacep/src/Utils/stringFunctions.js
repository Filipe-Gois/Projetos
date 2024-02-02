import { mask, unMask } from "remask";

//máscara para input que receber cep
// export const cepMasked = data => mask(unMask(data), ["99.999.999/9999-99"])
export const cepMasked = data => mask(unMask(data), ["99999-999"])

//tira a mascara do value que contém o cep
export const cepUnMasked = data => unMask(data)