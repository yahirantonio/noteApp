import { dataNotes } from "../stores/store"

export const getNote = () => {

}

export const putNote = (data) => {
   dataNotes.update(datanote => {
      const index = datanote.findIndex(dataNote => dataNote.notaID == data.notaID)
      datanote[index] = data;
      return datanote;
   })
}

export const postNote = (data) => {
   let notaID = 0;
   dataNotes.update(datanote => {
      const lastElement = datanote[datanote.length - 1];
      notaID = lastElement.notaID + 1;
      return [...datanote, { ...data, notaID}]
   })
   return notaID;
}

export const dropNote = (id) => {
   dataNotes.update(datanote => datanote.filter(note => note.notaID !== id))
}